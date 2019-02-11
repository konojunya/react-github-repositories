import * as React from "react";

const NotFoundPage = React.lazy(() => import("./NotFound"));

export const NotFound: React.FunctionComponent = () => (
  <React.Suspense fallback={<p>loading...</p>}>
    <NotFoundPage />
  </React.Suspense>
)