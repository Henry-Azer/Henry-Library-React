import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";

import ReactTooltip from "react-tooltip";

import "aos/dist/aos.css";
import "./styles/styles.css";

ReactDOM.render(
    <ParallaxProvider>
        <BrowserRouter>
            <Routes />
            <ReactTooltip />
        </BrowserRouter>
    </ParallaxProvider>,
    document.getElementById("root")
);
