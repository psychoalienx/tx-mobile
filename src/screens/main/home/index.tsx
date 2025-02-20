import React, { useCallback, useEffect} from "react";
import Template from "@templates/main/home";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { IAPIMovieDef } from "@interfaces/api_interfaces/movies";
import { firstValueFrom } from "rxjs";
import { ApiService } from "@services/api/core/api.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { DataShareService } from "@services/data-share.service";
import { ContentProgress, MediaContentProgress } from "@services/content-progress.service";
import { IAPIChapterDef, IAPISerieDef } from "@interfaces/api_interfaces/series";
import { noImageURI } from "@enviroments/definitions";

const HomeScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const [loading, setLoading] = React.useState(false);

  const [loadingFeaturedMovies, setLoadingFeaturedMovies] = React.useState(false);
  const [apiFeaturedMovies, setApiFeaturedMovies] = React.useState<IAPIMovieDef[]>([]);

  const [apiResumingContent, setApiResumingContent] = React.useState<MediaContentProgress[]>([]);
  const [loadingResumingContent, setLoadingResumingContent] = React.useState(false);

  const [apiPremiereMovies, setApiPremiereMovies] = React.useState<IAPIMovieDef[]>([]);
  const [loadingPremiereMovies, setLoadingPremiereMovies] = React.useState(false);

  const [apiSeries, setApiSeries] = React.useState<IAPISerieDef[]>([]);
  const [loadingSeries, setLoadingSeries] = React.useState(false);


  const [items, setItems] = React.useState<any[]>([]);
  const [previews, setPreviews] = React.useState<any[]>([]);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);


  const onPlay = (item: any) => {
    const element = apiResumingContent.find(content => content.parent?.id)?.parent || [...apiFeaturedMovies, ...apiPremiereMovies].find(mov => mov.id === item.id);
    if (element) {
      DataShareService.setData('play_content', {
        data: {
          content: element.content,
          captions: element.captions
        }
      });
      goTo('player');
    }
  };

  const onDetail = (item: any) => {
    const serie = apiSeries.find(ser => ser.id === item.id && item.type === "serie");
    const movie = apiResumingContent.find(content => content.parent?.id === item.id)?.parent || [...apiFeaturedMovies, ...apiPremiereMovies].find(mov => mov.id === item.id && item.type === "movie");
    if (serie || movie) {
      DataShareService.setData('content_details', {
        data: { serie, movie }
      });
      goTo("preview");
    }
  };

  useEffect(() => {
    loadCategories();
    loadFeaturedMovies();
    loadPremiereMovies();
    loadSeries();
    return () => { };
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      loadResumingMovies();     
    }, [])
  );

  const onTab = (item: any) => {
  };

  const loadCategories = () => {
    firstValueFrom(ApiService.client.categories.get({
      query: { count: 100, order: [{ col: 'id', sort: 'DESC' }], conds: [{ and: [{ id: { gt: 0 } }] }] }
    }))
      .then((result) => {
        DataShareService.subjects.create('categories', result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadSeries = () => {
    setLoadingSeries(true);
    firstValueFrom(ApiService.client.series.get({
      query: { count: 4, order: [{ col: 'id', sort: 'DESC' }], conds: [{ and: [{ id: { gt: 0 } }] }] }
    }))
      .then((result) => setApiSeries(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando series');
      })
      .finally(() => setLoadingSeries(false));
  };

  const loadFeaturedMovies = () => {
    setLoadingFeaturedMovies(true);
    firstValueFrom(ApiService.client.movies.get({
      query: { count: 4, order: [{ col: 'id', sort: 'DESC' }], conds: [{ and: [{ id: { gt: 0 } }] }] }
    }))
      .then((result) => setApiFeaturedMovies(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando películas Destacadas');
      })
      .finally(() => setLoadingFeaturedMovies(false));
  };

  useEffect(() => {
    setPreviews(apiFeaturedMovies.map(movie => ({
      id: movie.id,
      splash: { uri: movie.promotional_picture },
      title: movie.name,
      tabs: movie.categories.map(category => ({
        id: category.id,
        name: category.category.name
      })),
      tabSelected: { id: movie.categories[0]?.id, name: "" },
    })));
  }, [apiFeaturedMovies]);

  const loadResumingMovies = () => {
    setLoadingResumingContent(true);
    ContentProgress.getAll()
      .then((result) => {
        setApiResumingContent(result);
      })
      .finally(() => setLoadingResumingContent(false));;
    /* setLoadingResumingMovies(true);
    firstValueFrom(ApiService.client.movies.get({
      query: { count: 10, order: [{ col: 'id', sort: 'DESC' }], conds: [{ and: [{ id: { gt: 0 } }] }] }
    }))
      .then((result) => setApiResumingMovies(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando Continuar viendo');
      })
      .finally(() => setLoadingResumingMovies(false)); */
  };

  const loadPremiereMovies = () => {
    setLoadingPremiereMovies(true);
    firstValueFrom(ApiService.client.movies.get({
      query: { count: 10, order: [{ col: 'id', sort: 'DESC' }], conds: [{ and: [{ id: { gt: 0 } }] }] }
    }))
      .then((result) => setApiPremiereMovies(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando películas Estreno');
      })
      .finally(() => setLoadingPremiereMovies(false));
  };

  useEffect(() => {
    const resuming = apiResumingContent.map((content) => ({
      id: content.parent?.id || 0,
      image: { uri: content.parent?.promotional_picture },
      progress: (content?.progress?.ms || 0) * 100 / (content?.progress?.duration || 1),
      type: content.content.type.type
    }));

    const premiere = apiPremiereMovies.map(movie => ({
      id: movie.id,
      image: { uri: movie.promotional_picture },
      type: "movie",
    }));

    const series = apiSeries.map(serie => ({
      id: serie.id,
      image: { uri: serie.promotional_picture || noImageURI },
      type: "serie",
    }));

    setItems([
      ...resuming.length ? [{
        title: "Continuar viendo",
        icon: require("@assets/images/dummy/watching.png"),
        slug: "slug",
        items: resuming
      }] : [],
      ...series.length ? [{
        title: "Series de TV",
        icon: require("@assets/images/dummy/series.png"),
        slug: "slug",
        items: series
      }] : [],
      ...premiere.length ? [{
        title: "Estrenos",
        icon: require("@assets/images/dummy/premier.png"),
        slug: "slug",
        previewSize: "big",
        items: premiere
      }] : []
    ]);

  }, [apiResumingContent, apiPremiereMovies, apiSeries]);

  return (
    <Template
      loading={loading}
      items={items}
      previews={previews}
      onTab={onTab}
      onPlay={onPlay}
      onDetail={onDetail}
    />
  );
};

export default HomeScreen;
