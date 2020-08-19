import React, { useState, useEffect } from "react";
import { getTodocategories } from "../api/todocategories";

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
      {todocategories?.map((todocategory) => (
        <div key={todocategory.id}>{todocategory.title}</div>
      ))}
    </div>
  );
}

export default Home;
