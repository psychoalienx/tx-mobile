import * as React from "react";
import { useForm } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import useGoTo from "@hooks/useGoTo";
import i18n from "@hooks/useLocalize";
import Template from "@templates/auth/plans";

const PlansScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [plans, setPlans] = React.useState([]);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      plan: null
    } as any,
  });

  useFocusEffect(
    React.useCallback(() => {
      setPlans([
        {
          id: 1,
          name: i18n.t("simple"),
          price: "$3,99",
          resolution: "480p",
          quality: i18n.t("good"),
        },
        {
          id: 2,
          name: i18n.t("basic"),
          price: "$8,99",
          resolution: "1080p",
          quality: i18n.t("best"),
        },
        {
          id: 3,
          name: i18n.t("premium"),
          price: "$19,99",
          resolution: "4k",
          quality: i18n.t("excellent"),
        },
      ]);
    }, [])
  );

  const onSubmit = (form: any) => {
    console.log(form);
    goTo("selectPayment");
  };

  return (
    <Template plans={plans} control={control} onSubmit={handleSubmit(onSubmit)} goTo={goTo} />
  );
};

export default PlansScreen;
