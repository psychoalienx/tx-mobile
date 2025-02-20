import React, { useEffect } from "react";
import Template from "@templates/main/iptvCategories";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";
import { IAPIChannelDef } from "@interfaces/api_interfaces/channels";
import { DataShareService } from "@services/data-share.service";
import { IAPICategoryDef } from "@interfaces/api_interfaces/categories";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const IptvCategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [items, setItems] = React.useState<any>([]);
  const [apiChannels, setApiChannels] = React.useState<IAPIChannelDef[]>([]);
  const [apiCategory, setApiCategory] = React.useState<IAPICategoryDef>();

  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  /* useEffect(() => {
    const { data } = DataShareService.getData('category');
    if (data?.id) {
      setApiCategory(data);
    } else {
      goTo('back');
    }
    return () => { };
  }, []); */

  useFocusEffect(
    React.useCallback(() => {
      setItems([]);
      const { data } = DataShareService.getData('category');
      if (data?.id) {
        setApiCategory(data);
      } else {
        goTo('back');
      }
    }, [])
  );

  useEffect(() => {
    setTitle(apiCategory?.name || '');
    if (apiCategory?.id) {
      loadChannels(apiCategory?.id);
    }
  }, [apiCategory]);

  const loadChannels = (categoryId) => {
    setLoading(true);
    firstValueFrom(ApiService.client.channels.get({
      query: {
        count: 20,
        order: [{ col: 'id', sort: 'DESC' }],
        conds: [{ and: [{ id: { gt: 0 } }, ...categoryId ? [{ category: { eq: categoryId } }] : []] }]
      }
    }))
      .then((result) => {
        setApiChannels(result);
      })
      .catch((error) => {
        console.log(error);
        RsToast.error('Error cargando canales IPTV');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setItems(apiChannels.map(channel => ({ id: channel.id, text: channel.name })));
  }, [apiChannels]);

  const onPress = (item: any) => {
    const element = apiChannels.find(channel => channel.id === item.channel);
    if (element) {
      DataShareService.setData('play_content', {
        data: {
          content: element,
          // captions: element.captions
        }
      });
      goTo('player');
    }
  };

  return (
    <Template
      title={title}
      items={items}
      goTo={goTo}
      onPress={onPress}
      loading={loading}
    />
  );
};

export default IptvCategoriesScreen;
