import Layout from "@/components/Layout";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

//theme
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "@/config";
const muiTheme = createMuiTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
