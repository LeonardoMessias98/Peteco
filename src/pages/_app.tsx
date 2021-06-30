import type { AppProps } from "next/app";
import { createServer } from "miragejs";

import { GlobalStyle } from "@/shared/styles/globals";
import PetsController from "@/modules/pets/fakes/PetsController";

createServer({
  routes() {
    this.namespace = "api";

    const petsController = new PetsController();

    this.get("/pets", petsController.index);
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
