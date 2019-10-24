import React from "react";
import RouterSwitch from "../../components/RouterSwitch";
import routes from "../../routes/guest";

const GuestScreenRouter = props => <RouterSwitch routes={routes} {...props} />;

export default GuestScreenRouter;
