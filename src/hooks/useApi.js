import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { setItems } from "../actions/itemActions";
import { loginUser } from "../actions/userActions";

const API_URL = 'https://localhost:44303';

const useApi = () => {
  const [response, setResponse] = useState({data: null, isLoading: true, error: null});
  const [token, setToken] = useState(localStorage.getItem('token'));

  const dispatch = useDispatch();

  useEffect(() => {
    setResponse({data: null, isLoading: true, error: null});
    fetch(API_URL + '/item')
      .then((res) => res.json())
      .then((data) => {
        setResponse({data, isLoading: false, error: null});
        dispatch(setItems(data));
      }).catch((error) => setResponse({data: null, isLoading: false, error}))
  }, [setResponse])

  useEffect(() =>{
    if (token != null) {
      const user = jwtDecode(token);

      if (user.exp < Date.now() / 1000) {
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
  }, [token])

  return response;
}

export default useApi;