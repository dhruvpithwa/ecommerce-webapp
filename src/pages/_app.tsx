
import type { AppProps } from "next/app";
import { wrapper } from "@/store";

import AppLayout from "@/components/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default wrapper.withRedux(App);