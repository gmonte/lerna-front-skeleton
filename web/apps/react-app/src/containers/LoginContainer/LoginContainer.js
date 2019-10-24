import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Types as AuthTypes } from "@lerna-front-skeleton/store/src/ducks/auth";
import I18n from "@meta-react/i18n";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    if (loading || error) {
      dispatch({ type: AuthTypes.LOGOUT });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button
        disabled={loading}
        onClick={() => dispatch({ type: AuthTypes.LOGIN })}
      >
        <I18n>login</I18n>
      </button>
    </div>
  );
};

export default LoginContainer;
