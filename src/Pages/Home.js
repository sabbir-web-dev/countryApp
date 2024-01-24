import React from "react";

import { v4 as uuidv4 } from "uuid";

import Card from "../Components/Card/Card ";
import { useContryHooks } from "../Hooks/CountryContre";

function Home() {

  const { countryData, isLoadding, error } = useContryHooks();

  return (
    <div>
      {isLoadding && <h4 style={{ textAlign: "center" }}>Loadding...</h4>}
      {error && <h4 style={{ textAlign: "center" }}>{error}</h4>}
      <div className="card-wrap">
        {countryData && countryData.map((country) => <Card key={uuidv4()} country={{...country,id:uuidv4()}}></Card>)}
      </div>
    </div>
  );
}

export default Home;
