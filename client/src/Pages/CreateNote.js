import React, { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

function CreateNote() {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      // ✅ baseURL api.js se, sirf /notes use karo
      await axios.post("/notes", note, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Note created!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error creating note.");
    }
  };

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          required
        /><br />
        <textarea
          name="content"
          placeholder="Content"
          value={note.content}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateNote;