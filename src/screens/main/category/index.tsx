import React, { useEffect } from "react";
import Template from "@templates/main/category";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";
import { DataShareService } from "@services/data-share.service";
import { IAPICategoryDef } from "@interfaces/api_interfaces/categories";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";
import { IAPIMovieDef } from "@interfaces/api_interfaces/movies";
import { IAPISerieDef } from "@interfaces/api_interfaces/series";
import { noImageURI } from "@enviroments/definitions";

const CategoryScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(i18n.t("categories"));
  const [category, setCategory] = React.useState("");
  const [apiCategory, setApiCategory] = React.useState<IAPICategoryDef>();
  const [items, setItems] = React.useState<any>([
    { title: "Movies", slug: "movies", items: [] },
    { title: "Series", slug: "series", items: [] }
  ]);
  const [apiMovies, setApiMovies] = React.useState<IAPIMovieDef[]>([]);
  const [apiSeries, setApiSeries] = React.useState<IAPISerieDef[]>([]);
  const [tab, setTab] = React.useState("movies");

  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useEffect(() => {
    const { data } = DataShareService.getData('category');
    if (data?.id) {
      setApiCategory(data);
    } else {
      goTo('back');
    }
    return () => { };
  }, []);

  useEffect(() => {
    setCategory(apiCategory?.name || '');
    if (apiCategory?.id) {
      loadMovies();
      loadSeries();
    }
  }, [apiCategory]);

  const loadMovies = () => {
    setLoading(true);
    firstValueFrom(ApiService.client.movies.get({
      query: {
        count: 20,
        order: [{ col: 'id', sort: 'DESC' }],
        conds: [{ and: [{ id: { gt: 0 } }, ...apiCategory ? [{ category: { eq: apiCategory.id } }] : []] }]
      }
    }))
      .then((result) => setApiMovies(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando películas');
      })
      .finally(() => setLoading(false));
  };

  const loadSeries = () => {
    setLoading(true);
    firstValueFrom(ApiService.client.series.get({
      query: {
        count: 20,
        order: [{ col: 'id', sort: 'DESC' }],
        conds: [{ and: [{ id: { gt: 0 } }, ...apiCategory ? [{ category: { eq: apiCategory.id } }] : []] }]
      }
    }))
      .then((result) => setApiSeries(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando series');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const newItems = [...items];
    const item = {
      title: "Movies",
      slug: "movies",
      items: apiMovies.map(mov => ({
        id: mov.id,
        text: mov.name,
        image: { uri: mov.cover_picture || noImageURI },
      }))
    };
    const index = newItems.findIndex(itm => itm.slug === "movies");
    if (index > -1) {
      newItems.splice(index, 1, item);
    } else {
      newItems.push(item);
    }
    setItems(newItems);
  }, [apiMovies]);

  useEffect(() => {
    const newItems = [...items];
    const item = {
      title: "Series",
      slug: "series",
      items: apiSeries.map(serie => ({
        id: serie.id,
        text: serie.name,
        image: { uri: serie.cover_picture || noImageURI },
      }))
    };
    const index = newItems.findIndex(itm => itm.slug === "series");
    if (index > -1) {
      newItems.splice(index, 1, item);
    } else {
      newItems.push(item);
    }
    setItems(newItems);
  }, [apiSeries]);

  const onPress = (item: any) => {
    const serie = apiSeries.find(ser => ser.id === item.id && item.slug === "series");
    const movie = apiMovies.find(mov => mov.id === item.id && item.slug === "movies");
    if (serie || movie) {
      DataShareService.setData('content_details', {
        data: { serie, movie }
      });
      goTo("preview");
    }
  };

  return (
    <Template
      title={title}
      category={category}
      tabSelected={tab}
      setTab={setTab}
      items={items}
      goTo={goTo}
      onPress={onPress}
      loading={loading}
    />
  );
};

export default CategoryScreen;
