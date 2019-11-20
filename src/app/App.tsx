import React from "react";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const App: React.FC = (props: any) => {
  const { route } = props;
  return <div className="App">{renderRoutes(route.routes)}</div>;
};

export default withRouter(App);
