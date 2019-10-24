import React from "react";
import RouterSwitch from "../../components/RouterSwitch";
import routes from "../../routes/authenticated";

const AuthenticatedScreenRouter = props => (
  <RouterSwitch routes={routes} {...props} />
);

export default AuthenticatedScreenRouter;
