import { MediaContentItemTypeDef } from "@enviroments/definitions";
import { IAPIMediaCaption, IAPIMediaContent } from "@interfaces/api_interfaces/media";
import { IAPIMovieDef } from "@interfaces/api_interfaces/movies";
import { IAPIChapterDef } from "@interfaces/api_interfaces/series";
import { firstValueFrom } from "rxjs";
import { ApiService } from "./api/core/api.service";
import { StorageService } from "./api/core/storage.service";

export interface MediaContentProgress {
  content: IAPIMediaContent;
  progress: {
    caption?: IAPIMediaCaption;
    lang?: string;
    ms?: number;
    duration?: number;
  };
  parent?: IAPIChapterDef | IAPIMovieDef;
};

export class ContentProgress {
  private static localStorageKey = 'contentProgress';
  private static contentList: MediaContentProgress[] = [];

  public static getAll = async () => {
    ContentProgress.contentList = await StorageService.get(ContentProgress.localStorageKey) as MediaContentProgress[] || [];

    const movieList = ContentProgress.contentList.filter(ele => ele.content.type.type === MediaContentItemTypeDef.movie);
    const chapterList = ContentProgress.contentList.filter(ele => ele.content.type.type === MediaContentItemTypeDef.chapter);
    const promiseMovies = movieList.length ? [
      firstValueFrom(
        ApiService.client.movies.get({ query: { count: movieList.length, conds: [{ and: [{ id: { in: movieList.map(m => m.content.type.id) } }] }] } })
      ).then(result => {
        result.forEach(movie => {
          const index = ContentProgress.contentList.findIndex(c => c.content.type.type === MediaContentItemTypeDef.movie && c.content.type.id === movie.id);
          ContentProgress.contentList[index].parent = movie;
        });
      }).catch((error) => console.log(error))
    ] : [];
    const promiseChapters = chapterList.length ? [
      firstValueFrom(
        ApiService.client.series.chapters.get({ query: { count: chapterList.length, conds: [{ and: [{ id: { in: chapterList.map(m => m.content.type.id) } }] }] } })
      ).then(result => {
        result.forEach(chapter => {
          const index = ContentProgress.contentList.findIndex(c => c.content.type.type === MediaContentItemTypeDef.chapter && c.content.type.id === chapter.id);
          ContentProgress.contentList[index].parent = chapter;
        });
      }).catch((error) => console.log(error))
    ] : [];
    await Promise.all([...promiseMovies, ...promiseChapters]);
    return ContentProgress.contentList;
  };

  public static update = (content, progress) => {
    const index = ContentProgress.contentList.findIndex(el => el.content.id === content.id);
    ContentProgress.contentList.splice(index, 1);
    ContentProgress.contentList.unshift({ content, progress });

    return StorageService.set(ContentProgress.localStorageKey, ContentProgress.contentList);
  };

  public static remove = (content) => {
    const index = ContentProgress.contentList.findIndex(el => el.content.id === content.id);
    if (index > -1) {
      ContentProgress.contentList.splice(index, 1);
    }
    return StorageService.set(ContentProgress.localStorageKey, ContentProgress.contentList);
  };

  public static removeAll = () => {
    return StorageService.remove(ContentProgress.localStorageKey);
  };

  public static getContentById = (id: number) => {
    return ContentProgress.contentList.find(item => item.content.id === id);
  };

}
