export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DATA":
      const { data, isLoadding, error } = action.payload;
      return {
        ...state,
        data: data,
        isLoadding: isLoadding,
        error: error,
        countryData: data
      };

    case "REMOVE":
      const filteredCountries = state.countryData && state.countryData.filter(country => country.name.common !== action.payload)
      console.log(state.countryData)
      console.log(filteredCountries)
      return {
        ...state,
        countryData: filteredCountries,
      };

    case "SEARCH":
      const searchTerm= action.payload;
      const filterCountry = state.data.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...state,
        countryData : filterCountry,
      };

    default:
      return state;
  }
};
