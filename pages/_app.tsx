import "assets/styles/globals.scss";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;
