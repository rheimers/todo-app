import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodocategories } from "../api/todocategories";

function NewTask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await postTodocategories({
      title,
      author,
    });
    setTitle("");
    setAuthor("");
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
          disabled={!title || !author}
        />
      </form>
      <Link to="/">TASKS</Link>
    </>
  );
}

export default NewTask;
