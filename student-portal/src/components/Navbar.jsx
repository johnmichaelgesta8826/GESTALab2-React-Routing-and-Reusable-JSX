import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#c9a227" : "#e8e6df",
    textDecoration: "none",
    padding: "8px 18px",
    fontSize: "0.85rem",
    fontWeight: isActive ? "700" : "500",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    borderBottom: isActive ? "2px solid #c9a227" : "2px solid transparent",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#0f1b33",
        padding: "16px 48px",
        borderBottom: "3px solid #c9a227",
        boxShadow: "0 4px 16px rgba(15, 27, 51, 0.25)",
      }}
    >
      <h2
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "1.35rem",
          letterSpacing: "1px",
          color: "#c9a227",
        }}
      >
        Student Portal
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginLeft: "auto",
        }}
      >
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/students" style={linkStyle}>Students</NavLink>
        <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;