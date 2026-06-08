import { Link } from "react-router-dom";

function NotFound() {

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          color: "#ff4d6d",
          marginBottom: "10px"
        }}
      >
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "25px"
        }}
      >
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        style={{
          background: "#ff4d6d",
          color: "#fff",
          textDecoration: "none",
          padding: "12px 25px",
          borderRadius: "30px",
          fontWeight: "600"
        }}
      >
        Back To Home
      </Link>

    </div>

  );
}

export default NotFound;