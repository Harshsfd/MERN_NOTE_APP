import React, { useEffect, useState } from "react";
import axios from "../api";
import { useNavigate, Link } from "react-router-dom";

function Dashboard({ darkMode }) {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please login first.");
          navigate("/login");
          return;
        }

        const res = await axios.get("http://localhost:5000/api/notes", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotes(res.data);
      } catch (err) {
        console.error(err);
        alert("Session expired. Please login again.");
        navigate("/login");
      }
    };

    fetchNotes();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/api/notes/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotes(prev => prev.filter(note => note._id !== id));
      } catch (err) {
        console.error(err);
        alert("Error deleting note");
      }
    }
  };

  return (
    <div>
      <h2>Your Notes</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <Link to="/create">
          <button style={{
            padding: "8px 14px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Create New Note
          </button>
        </Link>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {notes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          notes.map((note) => (
            <li
              key={note._id}
              style={{
                background: darkMode ? "#334155" : "#ecf0f1",
                color: darkMode ? "#f1f5f9" : "#333",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px"
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small style={{ color: darkMode ? "#cbd5e1" : "#555" }}>
                {note.createdAt
                  ? `Created: ${new Date(note.createdAt).toLocaleDateString()} at ${new Date(note.createdAt).toLocaleTimeString()}`
                  : "Created: Unknown date"}
              </small>
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <Link to={`/edit/${note._id}`}>
                  <button style={{
                    padding: "5px 10px",
                    backgroundColor: "#f59e0b",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}>
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(note._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
