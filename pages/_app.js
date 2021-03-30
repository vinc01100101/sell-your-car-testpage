//global css
import "../src/global.css";

import Layout from "@/components/Layout";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

//theme
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "@/config";
const muiTheme = createMuiTheme(theme);

//svg sprite
import SvgSprite from "@/svgStore/sprite";

//redux
import { createWrapper } from "next-redux-wrapper";
import { useDispatch } from "react-redux"; //Provider module not needed, createWrapper did it instead
import store from "@/redux/store";
import { setDatesArray } from "@/redux/modals/creators";

//react
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDatesArray());

    //google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-6L6EWL6H47");

    console.log(window.dataLayer);
  }, []);
  return (
    <>
      <Head>
        <title>
          Sell My Car or Trade It In Quickly and at Top Prices | Automart.Ph"
        </title>
        <meta
          name="description"
          content="Sell My Car or Trade In My Used Car Hassle-Free, Quickly and for High Prices in the Philippines. Automart.Ph Will Sell for You. Just Drive It In"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L6EWL6H47"
        ></script>
      </Head>
      {/* this svg sprite is hidden, images are called in src/svgStore/svgCall.js */}
      <SvgSprite />
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

//redux Provider wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
