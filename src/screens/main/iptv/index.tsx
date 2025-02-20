import React, { useEffect } from "react";
import Template from "@templates/main/iptv";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { IAPICategoryDef } from "@interfaces/api_interfaces/categories";
import { DataShareService } from "@services/data-share.service";
import { CategoryTypeDef, noImageURI } from "@enviroments/definitions";

const IptvScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<any>([]);
  const goTo = (name: string, params: any) =>
    useGoTo(navigation, route, false, name, params);

  const [apiCategories, setApiCategories] = React.useState<IAPICategoryDef[]>([]);

  useEffect(() => {
    const categories = DataShareService.subjects.getValue('categories');
    setApiCategories((categories?.length ? categories : []).filter(cat => cat.type.id === CategoryTypeDef.iptv));
    return () => { };
  }, []);

  useEffect(() => {
    setItems(apiCategories.map(cat => ({
      id: cat.id,
      text: cat.name,
      icon: { uri: cat.picture || noImageURI }
    })));
  }, [apiCategories]);

  const onPress = (item: any) => {
    const category = apiCategories.find(cat => cat.id === item.id);
    if (category) {
      DataShareService.setData('category', { data: category });
      goTo("iptvCategories", category);
    }
    // goTo("iptvCategories", item);
  };

  return (
    <Template items={items} goTo={goTo} onPress={onPress} loading={loading} />
  );
};

export default IptvScreen;
