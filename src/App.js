import './App.css';

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Comp str = "this is a string" />
    </div>
  );
}

function Comp(props) {
  return (
    <div>
      <p>Input string: {props.str}</p>
    </div>
  )
}

export default App;
