import jwtDecode from "jwt-decode";
import { API_URL } from "../temp/TempURL";
import { loginUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export function useIsUserLogged() {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token')

    if (token != null) {
      const user = jwtDecode(token);

      if (user.exp > Date.now()) {
        localStorage.removeItem('token');
      }
      else {
        fetch(API_URL + '/user', {
          method: 'get',
          headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          })
        }).then(response => response.json())
        .then(data => dispatch(loginUser(data)));
      }
    }
} 