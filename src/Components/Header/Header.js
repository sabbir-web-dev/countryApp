import React, { useEffect, useState } from "react";
import { useContryHooks } from "../../Hooks/CountryContre";
import { Link } from "react-router-dom";

function Header() {
  const [text, setText] = useState("");
  const {dispatch} = useContryHooks();


  
  useEffect(()=> {
    dispatch({type:"SEARCH",payload:text})
  },[dispatch, text]);

return (
    <div className="header">
      <Link className="link" to="/">
      <h1>Country App</h1>
      </Link>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        name="text"
        id="text"
        placeholder="Search Country"
      />
    </div>
  );
}

export default Header;
