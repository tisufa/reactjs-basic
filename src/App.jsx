import "./App.css";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <button
        style={{
          background: "green",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          color: "#fff",
        }}
      >
        <em className="fas fa-plus"></em>
        Add User
      </button>
      <button
        style={{
          background: "red",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          color: "#fff",
        }}
      >
        <em className="fas fa-trash"></em>
        Delete User
      </button>
    </>
  );
}

export default App;
