import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodocategories } from "../api/todocategories";

function NewTask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const todocategory = {
      title,
      author,
      //   createAt: Date.now(),
    };
    try {
      await postTodocategories(todocategory);
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Author:
          <input value={author} onChange={handleAuthorChange} />
        </label>
        <input
          type="submit"
          value="Add new task"
          disabled={!title || !author || loading}
        />
        {error && <p>ERROR</p>}
      </form>
      <Link to="/">TASKS</Link>
    </>
  );
}

export default NewTask;
