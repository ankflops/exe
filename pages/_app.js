import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// import Font Awesome CSS
// import Collapse from ""

// <Script src="node_modules/@material-tailwind/html/scripts/collapse.js" />

// <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js" />
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
