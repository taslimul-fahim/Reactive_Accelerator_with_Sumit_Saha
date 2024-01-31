import Form from "./components/Form";
import "./styles.css";

function App() {
  return (
    <div>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <Form status={"error"} />
    </div>
  );
}

export default App;
