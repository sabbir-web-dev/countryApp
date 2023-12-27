import React, { createContext, useEffect, useReducer} from "react";
import { reducer } from "../Reducer/reducer";
import useFetch from './../Hooks/useFetch';

export const CountryContext = createContext({});

const UseProvider = ({ children }) => {
  const url = "https://restcountries.com/v3.1/all";
  const { isLoadding, data, error } = useFetch(url);

  useEffect(()=>{
    if(data){
      dispatch({type:"SHOW_DATA",payload:{isLoadding,error,data}})
    }
  },[data, error, isLoadding])

  const [state, dispatch] = useReducer(reducer, {
    isLoadding: true,
    data: [],
    error: null,
  });

  const value = {
    dispatch,
    isLoadding: state.isLoadding,
    data: state.data,
    error: state.error,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default UseProvider;
