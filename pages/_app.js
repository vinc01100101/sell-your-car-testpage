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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L6EWL6H47"
        ></script>
        <script>
          {/* {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());

  gtag('config', 'G-6L6EWL6H47');`} */}
        </script>
      </Head>
      {/* this svg sprite is hidden, images are called in src/svgStore/svgCall.js */}
      <SvgSprite />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
