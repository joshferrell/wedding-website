import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "../utils/styles.css";

import type { AppProps } from "next/app";
import { ChakraProvider, Alert, AlertIcon, Link } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "../widgets/navbar";
import { useEffect, useMemo, useRef } from "react";

const FixBrowser = () => (
  <Link
    isExternal={true}
    textDecoration="underline"
    href="https://browsehappy.com/"
  >
    upgrade your browser
  </Link>
);

function MyApp({ Component, pageProps }: AppProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const supportsWebp = useMemo(() => {
    if (!ref.current) return true;
    return Boolean(
      ref.current.toDataURL("image/webp").indexOf("data:image/webp")
    );
  }, [ref]);

  return (
    <ChakraProvider>
      <canvas ref={ref} style={{ height: 0, width: 0 }} />
      {!supportsWebp && (
        <Alert status="error">
          <AlertIcon />
          You are using an outdated browser. Please&nbsp;
          <FixBrowser />
          &nbsp;to improve your experience.
        </Alert>
      )}
      <NavBar />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
