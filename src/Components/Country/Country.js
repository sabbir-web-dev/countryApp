import React from "react";
import { useParams } from "react-router";
import useFetch from "./../../Hooks/useFetch";
import { Link } from "react-router-dom";

function Country() {
  const { countryName } = useParams();

  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  const { data, isLoadding, error } = useFetch(url);
  return (
    <div>
      {isLoadding && <h4 style={{ textAlign: "center" }}>Loadding...</h4>}
      {error && <h4 style={{ textAlign: "center" }}>{error}</h4>}
      {data &&
        data.map((country,index) => {
          const { name, region, flags, population, area} = country;
          return (
            <div key={index} className="country">
              <div className="">
                <img src={flags.png} alt="" />

                <div className="card-botttom country-bottom">
                  <h4>
                    Name: <strong>{name.common}</strong>
                  </h4>
                  <h5>
                    Region: <strong>{region}</strong>
                  </h5>

                  <div className="">
                    <small>Population: {population}</small> <br />
                    <small>Area: {area}</small>
                  </div>
                <div className="button-wrap">
                <Link to="/" className="link btn">home</Link>
                </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Country;
