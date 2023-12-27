import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";

export const useContryHooks = () => {
  return useContext(CountryContext);
}