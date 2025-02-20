import React, { useEffect } from "react";
import Template from "@templates/main/explorer";
import useGoTo from "@hooks/useGoTo";
import i18n from "@hooks/useLocalize";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import { IAPICategoryDef } from "@interfaces/api_interfaces/categories";
import { DataShareService } from "@services/data-share.service";
import { firstValueFrom } from "rxjs";
import { ApiService } from "@services/api/core/api.service";
import { IAPIMovieDef } from "@interfaces/api_interfaces/movies";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { IAPISerieDef } from "@interfaces/api_interfaces/series";
import { noImageURI } from "@enviroments/definitions";

const ExplorerScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(i18n.t("explorer"));
  const [items, setItems] = React.useState<any>([
    { title: "Movies", slug: "movies", items: [] },
    { title: "Series", slug: "series", items: [] }
  ]);
  const [apiCategories, setApiCategories] = React.useState<IAPICategoryDef[]>([]);
  const [apiMovies, setApiMovies] = React.useState<IAPIMovieDef[]>([]);
  const [apiSeries, setApiSeries] = React.useState<IAPISerieDef[]>([]);
  const [tab, setTab] = React.useState("movies");

  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  const { control, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      search: "",
    } as any,
  });

  const watch = useWatch({
    control,
    name: ["search"],
  });

  useFocusEffect(
    React.useCallback(() => {
      const categories = DataShareService.subjects.getValue('categories');
      setApiCategories(categories?.length ? categories : []);
      loadMovies();
      loadSeries();
    }, [])
  );

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

  useFocusEffect(
    React.useCallback(() => {
      onSubmit();
    }, [watch])
  );

  const loadMovies = (keyword?) => {
    setLoading(true);
    firstValueFrom(ApiService.client.movies.get({
      query: {
        count: 10,
        order: [{ col: 'id', sort: 'DESC' }],
        conds: [{ and: [{ id: { gt: 0 } }, ...(keyword || false) ? [{ keyword: { like: keyword } }] : []] }]
      }
    }))
      .then((result) => setApiMovies(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando películas');
      })
      .finally(() => setLoading(false));
  };

  const loadSeries = (keyword?) => {
    setLoading(true);
    firstValueFrom(ApiService.client.series.get({
      query: {
        count: 10,
        order: [{ col: 'id', sort: 'DESC' }],
        conds: [{ and: [{ id: { gt: 0 } }, ...(keyword || false) ? [{ keyword: { like: keyword } }] : []] }]
      }
    }))
      .then((result) => setApiSeries(result))
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando series');
      })
      .finally(() => setLoading(false));
  };

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

  const onSubmit = () => {
    let { search } = getValues();
    loadMovies(search);
    loadSeries(search);
    setTitle(search);
  };

  return (
    <Template
      title={title}
      loading={loading}
      goTo={goTo}
      tabSelected={tab}
      setTab={setTab}
      items={items}
      onPress={onPress}
      control={control}
    />
  );
};

export default ExplorerScreen;
