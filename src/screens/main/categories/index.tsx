import React, { useEffect } from "react";
import Template from "@templates/main/categories";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";
import { IAPICategoryDef } from "@interfaces/api_interfaces/categories";
import { DataShareService } from "@services/data-share.service";
import { CategoryTypeDef, noImageURI } from "@enviroments/definitions";

const CategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<any>([]);
  const [apiCategories, setApiCategories] = React.useState<IAPICategoryDef[]>([]);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useFocusEffect(
    React.useCallback(() => {
      const categories = DataShareService.subjects.getValue('categories');
      setApiCategories((categories?.length ? categories : []).filter(cat => cat.type.id === CategoryTypeDef.default));
    }, [])
  );

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
      goTo("category");
    }
  };

  return (
    <Template
      title={i18n.t("categories")}
      items={items}
      goTo={goTo}
      onPress={onPress}
      loading={loading}
    />
  );
};

export default CategoriesScreen;
