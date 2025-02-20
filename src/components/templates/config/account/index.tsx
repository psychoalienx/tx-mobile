import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import AccountMenu from "@organisms/accountMenu";
import CancelSuscriptionModal from "@molecules/cancelSuscriptionModal";

const Template = ({
  goTo,
  suscriptionMonth,
  suscriptionYear,
  username,
  email,
  phone,
  payDay,
  payMonth,
  payYear,
  cardNumber,
}: {
  goTo: any;
  suscriptionMonth: string;
  suscriptionYear: string;
  username: string;
  email: string;
  phone: string;
  payDay: string;
  payMonth: string;
  payYear: string;
  cardNumber: string;
}) => {
  const [isVisibleCancel, setIsVisibleCancel] = React.useState<boolean>(false);

  return (
    <Layout
      style={{ ...styles.container }}
      title={i18n.t("account")}
      backButton={() => goTo("back")}
    >
      <AccountMenu
        goTo={goTo}
        suscriptionMonth={suscriptionMonth}
        suscriptionYear={suscriptionYear}
        username={username}
        email={email}
        phone={phone}
        payDay={payDay}
        payMonth={payMonth}
        payYear={payYear}
        cardNumber={cardNumber}
        onPress={() => setIsVisibleCancel(true)}
      />
      <CancelSuscriptionModal
        isVisible={isVisibleCancel}
        onPress={() => {
          setIsVisibleCancel(false);
          goTo("cancelSuscription");
        }}
        onCancel={() => {
          setIsVisibleCancel(false);
        }}
      />
    </Layout>
  );
};
export default Template;
