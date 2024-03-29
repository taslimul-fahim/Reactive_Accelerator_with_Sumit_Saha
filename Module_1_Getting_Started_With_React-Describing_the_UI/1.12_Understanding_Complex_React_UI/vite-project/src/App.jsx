import Avatar from "./components/Avatar";

function App() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  const listItems = people.map((person) => <li>{person}</li>);

  return (
    <div>
      <div>{listItems}</div> <hr />
      <Avatar/>
    </div>
  );
}
export default App;
