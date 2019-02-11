import { Router } from "express";
import * as React from "react";
import { renderToNodeStream } from "react-dom/server";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";

const RootController = Router()

RootController.get("*", (req, res) => {
  res.status(200).header("'Content-Type', 'text/html; charset=utf-8'").send("html");
});

export default RootController;