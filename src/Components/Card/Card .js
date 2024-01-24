import React from "react";
import { useContryHooks } from "../../Hooks/CountryContre";
import { Link } from "react-router-dom";

function Card({ country }) {
  const { name, region, flags, population, area,} = country;
  const {  removeCountry} = useContryHooks();

  return (
    <div className="card">
      {}
      <img src={flags.png} alt="" />

      <div className="card-botttom">
        <h4>
          Name: <strong>{name.common.slice(0,14)}</strong>
        </h4>
        <h5>
          Region: <strong>{region}</strong>
        </h5>

        <div className="">
          <small>Population: {population}</small> <br />
          <small>Area: {area}</small>
          {/* <small>Lengugaes: {languages}</small> */}
        </div>

        <div className="box2-wrap">
          <Link
            to={`/country/${name.common}`}
            className="btn link"
          >
            Details
          </Link>
          <div
            className="btn"
            onClick={() => removeCountry(name.common)}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
