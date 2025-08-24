import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navStyle = {
    display: "flex",
    flexDirection: "column", // ⭐️ Vertical layout
    alignItems: "center",
    background: darkMode ? "#0f172a" : "#1e293b",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100
  };

  const brandStyle = {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "white",
    marginBottom: "10px"
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "12px",
    alignItems: "center"
  };

  return (
    <nav style={navStyle}>
      <h3 style={brandStyle}>MERN Notes App</h3>
      <div style={linkContainerStyle}>
        {!token ? (
          <>
            <NavLinkCustom to="/login" label="Login" />
            <NavLinkCustom to="/register" label="Register" />
          </>
        ) : (
          <>
            <NavLinkCustom to="/dashboard" label="Dashboard" />
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 14px",
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "background 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "#dc2626"}
              onMouseOut={(e) => e.target.style.background = "#ef4444"}
            >
              Logout
            </button>
          </>
        )}
        <button
          onClick={toggleDarkMode}
          style={{
            padding: "6px 10px",
            backgroundColor: darkMode ? "#facc15" : "#334155",
            color: darkMode ? "#000" : "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500"
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

// ✅ Custom NavLink component
function NavLinkCustom({ to, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "500",
        color: hover ? "white" : "black",
        background: hover ? "black" : "transparent",
        transition: "all 0.3s ease"
      }}
    >
      {label}
    </Link>
  );
}

export default Navbar;
