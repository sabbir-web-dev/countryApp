export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DATA":
      const { data, isLoadding, error } = action.payload;
      return {
        ...state,
        data: data,
        isLoadding: isLoadding,
        error: error,
      };

    case "REMOVE":
      const filteredCountries =
        state.data && Array.isArray(state.data)
          ? state.data.filter(
              (country) => country.name.common === action.payload
            )
          : [];
      return {
        ...state,
        data: filteredCountries,
      };

    case "SEARCH":
      const searchTerm= action.payload;
      const filterCountry = state.data.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...state,
        data: filterCountry,
      };

    default:
      return state;
  }
};
