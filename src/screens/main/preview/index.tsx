import React, { useEffect } from "react";
import Template from "@templates/main/preview";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { DataShareService } from "@services/data-share.service";
import { IAPIMovieDef } from "@interfaces/api_interfaces/movies";
import i18n from "@hooks/useLocalize";
import { _formatDate } from "@helpers/handlers";
import { noImageURI } from "@enviroments/_environment.dev";
import { IAPISerieDef } from "@interfaces/api_interfaces/series";
import { noImage } from "@enviroments/definitions";

const PreviewScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [preview, setPreview] = React.useState({});
  const [items, setItems] = React.useState<any>([]);
  const [tab, setTab] = React.useState("trailers");
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  const [apiMovie, setApiMovie] = React.useState<IAPIMovieDef>();
  const [apiSerie, setApiSerie] = React.useState<IAPISerieDef>();

  useEffect(() => {
    const { data } = DataShareService.getData('content_details');
    if (data?.movie?.id || data?.serie?.id) {
      setApiMovie(data.movie);
      setApiSerie(data.serie);
    } else {
      goTo('back');
    }
    return () => { };
  }, []);

  useEffect(() => {
    if (apiMovie) {
      setPreview({
        splash: { uri: apiMovie.cover_picture || noImageURI },
        title: apiMovie.name,
        tabs: apiMovie.categories.map(cat => ({ id: cat.id, name: cat.category.name })),
        tabSelected: { id: apiMovie.categories[0]?.id, name: "" },
        duration: i18n.t('formatDuration', { minutes: apiMovie.duration }),
        releaseDate: _formatDate(apiMovie.launch_date),
        synopsis: apiMovie.description
      });

      setItems([
        ...apiMovie.trailers.length ? [{
          title: "Trailers",
          slug: "trailers",
          items: apiMovie.trailers.map(trailer => ({
            id: trailer.id,
            name: trailer.name,
            image: { uri: trailer.picture || noImageURI },
            // duration: trailer.duration,
          }))
        }] : []
      ]);
    }

    if (apiSerie) {
      setPreview({
        splash: { uri: apiSerie.cover_picture || noImageURI },
        title: apiSerie.name,
        tabs: apiSerie.categories.map(cat => ({ id: cat.id, name: cat.category.name })),
        tabSelected: { id: apiSerie.categories[0]?.id, name: "" },
        duration: i18n.t('formatSeasons', { count: apiSerie.seasons.length }),
        releaseDate: _formatDate(apiSerie.launch_date),
        synopsis: apiSerie.description
      });

      const episodes: any = {
        title: "Episodios",
        slug: "episodes",
        seasons: [],
        items: []
      };

      apiSerie.seasons.forEach((season, index) => {
        episodes.seasons[`s${index}`] = season.name;
        episodes.items = [
          ...episodes.items,
          ...season.chapters.map(episode => ({
            season: `s${index}`,
            id: episode.id,
            name: episode.name,
            image: { uri: episode.promotional_picture || noImageURI },
            duration: i18n.t('formatDuration', { minutes: episode.duration }),
          }))
        ];
      });

      setItems([
        episodes,
        ...apiSerie.trailers.length ? [{
          title: "Trailers",
          slug: "trailers",
          items: apiSerie.trailers.map(trailer => ({
            id: trailer.id,
            name: trailer.name,
            image: { uri: trailer.picture || noImageURI },
            // duration: trailer.duration,
          }))
        }] : []
      ]);
    }


  }, [apiMovie, apiSerie]);

  useFocusEffect(
    React.useCallback(() => {

      /* setItems([
        {
          title: "Trailers",
          type: "list",
          slug: "trailers",
          items: [
            {
              id: 1,              
              name: "Trailer The Lego Movie",
              image: require("@assets/images/dummy/blackpanther_h.png"),
              duration: "3 min",
            },
            {
              id: 2,
              name: "Teaser",
              image: require("@assets/images/dummy/blackpanther_h.png"),
              duration: "3 min",
            },
          ],
        },
        {
          title: "Similars",
          slug: "similars",
          type: "grid",
          items: [
            {
              id: 1,
              name: "Similar The Lego Movie",
              image: require("@assets/images/icon.png"),
              duration: "3 min",
            },
            {
              id: 2,
              name: "Similar The Lego Movie",
              image: require("@assets/images/icon.png"),
              duration: "3 min",
            },
            {
              id: 3,
              name: "Similar The Lego Movie",
              image: require("@assets/images/icon.png"),
              duration: "3 min",
            },
          ],
        },
      ]); */

      /* To divide a tab by seasons, you must declare a "seasons" key in the tab as follows:
        --------------------------------------------------
        [
          {"season_code": "name to display for the season"}
        ]
        ---------------------------------------------------
        then in each individual element a key "season" must be declared with the season code as a value:
        --------------------------------------------------
        ...
          "season": "season_code". 
        ...
        ---------------------------------------------------
      */

      /* To display a tab as a grid, an item must be set with the key type: "grid". 
        ---------------------------------------------------   
        {
          title: "Similars",
          slug: "similars",
          type: "grid",
          ...
        }
        ---------------------------------------------------      
      */
    }, [])
  );

  const onFavorite = () => { };
  const onPlay = (item: any) => {
    DataShareService.setData('play_content', {
      data: {
        content: apiMovie?.content,
        captions: apiMovie?.captions
      }
    });
    goTo('player');
  };
  const onPressItem = (item: any) => {
    console.log(item);
  };
  const onPressTab = (item: any) => { };

  return (
    <Template
      loading={loading}
      items={items}
      preview={preview}
      tab={tab}
      setTab={setTab}
      onPlay={onPlay}
      onPressItem={onPressItem}
      onPressTab={onPressTab}
      onFavorites={onFavorite}
    />
  );
};

export default PreviewScreen;
