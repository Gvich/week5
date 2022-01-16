import "tailwindcss/tailwind.css";
import "../styles/style.css"
import "../styles/register.css"
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
