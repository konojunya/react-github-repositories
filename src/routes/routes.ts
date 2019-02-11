import { RouteProps } from "react-router-dom";

// pages
import { Index } from "../components/pages/Index";
import { Detail } from "../components/pages/Detail";

// notfound だけ lazy/suspenseを使う
import { NotFound } from "../components/pages/NotFound";

export const routes: RouteProps[] = [
  { exact: true, path: "/", component: Index },
  { exact: true, path: "/:id", component: Detail },
  { path: "*", component: NotFound }
]