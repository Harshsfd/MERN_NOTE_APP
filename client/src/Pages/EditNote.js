import React, { useState, useEffect } from "react";
import axios from "../api";
import { useNavigate, useParams } from "react-router-dom";

function EditNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/notes`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const found = res.data.find((n) => n._id === id);
        if (found) {
          setNote({ title: found.title, content: found.content });
        } else {
          alert("Note not found.");
          navigate("/dashboard");
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching note");
        navigate("/dashboard");
      }
    };
    fetchNote();
  }, [id, navigate]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/notes/${id}`, note, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Note updated!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error updating note");
    }
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          required
        /><br />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Content"
          required
        /><br />
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
}

export default EditNote;
