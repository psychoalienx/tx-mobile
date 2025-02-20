import React from "react";
import Template from "@templates/config/paymentHistory";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";

const PaymentHistoryScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>({
    plan: "",
    nextBillDate: "",
    items: [],
  });
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useFocusEffect(
    React.useCallback(() => {
      setData({
        plan: "Plan Simple",
        price: "$ 1,99",
        nextBillDate: "30  de octubre 2021",
        items: [
          {
            date: "30/09/21",
            price: "$ 15,99",
            item: "Servicios streming, Plan basico",
            card: "1234",
            desc: "$13,21 (+$2,78 IVA)",
            icon: "mastercard", 
          },
          {
            date: "30/09/21",
            price: "$ 15,99",
            item: "Servicios streming, Plan basico",
            card: "1234",
            desc: "$13,21 (+$2,78 IVA)",
            icon: "visa",
          },
          {
            date: "30/09/21",
            price: "$ 15,99",
            item: "Servicios streming, Plan basico",
            card: "1234",
            desc: "$13,21 (+$2,78 IVA)",
            icon: "americanExpress",
          },
        ],
      });
      return () => {};
    }, [])
  );

  return (
    <Template
      loading={loading}
      plan={data.plan}
      price={data.price}
      nextBillDate={data.nextBillDate}
      items={data.items}
      goTo={goTo}
    />
  );
};

export default PaymentHistoryScreen;
