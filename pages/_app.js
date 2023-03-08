import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
// import Font Awesome CSS


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp