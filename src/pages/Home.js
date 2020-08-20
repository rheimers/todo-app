import React from "react";
import { getTodocategories } from "../api/todocategories";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function Home() {
  const { data: todocategories, loading, error } = useAsync(getTodocategories);
  return (
    <div className="App">
      <Link to="/add">NEW TASK</Link>
      {error && <div>SORRY</div>}
      {loading && <div>Waiting room....</div>}
      {todocategories?.map((todocategory) => (
        <div key={todocategory.id}>{todocategory.title}</div>
      ))}
    </div>
  );
}

export default Home;
