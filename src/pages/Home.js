import React, { useState, useEffect } from "react";
import { getTodocategories } from "../api/todocategories";
import { Link } from "react-router-dom";

function Home() {
  const [todocategories, setTodocategories] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todocategories = await getTodocategories();
      setTodocategories(todocategories);
    };
    doFetch();
  }, []);
  return (
    <div className="App">
      <Link to="/add">NEW TASK</Link>
      {todocategories?.map((todocategory) => (
        <div key={todocategory.id}>{todocategory.title}</div>
      ))}
    </div>
  );
}

export default Home;
