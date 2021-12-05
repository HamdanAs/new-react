import { useEffect } from "react";
import { useHistory } from "react-router";
import AuthService from "../services/AuthService";

export default function Guest(props) {
  const history = useHistory();

  useEffect(() => {
    if (AuthService.getCurrentUser().checked) {
      history.push("/");
    }
  }, [history]);

  return props.render;
}
