import * as React from "react";
import { GeneralProvider } from "./src/context/general";
import App from "@navigation/index";
import useCachedResources from "@hooks/useCachedResources";
import { RsLoggerComponent } from "@components/rolsoft/RsLogger/RsLogger";
import { includeLogger } from "@enviroments/environment";
import { RsToastComponent } from "@components/rolsoft/RsToast/RsToast";

export default function Main({exp}) {
  const { isLoadingAssets } = useCachedResources();
  return isLoadingAssets ? (
    <GeneralProvider>
      <App />
      {includeLogger && <RsLoggerComponent recovery={exp.errorRecovery} />}
      <RsToastComponent />
    </GeneralProvider>
  ) : null;
}
