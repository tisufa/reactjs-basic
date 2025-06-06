import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <FontAwesomeIcon icon={faPlus} />
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
        <FontAwesomeIcon icon={faTrash} />
        Delete User
      </button>
    </>
  );
}

export default App;
