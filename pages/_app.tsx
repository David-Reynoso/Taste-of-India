import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

const _app = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};
export default _app;
