import Card from "./components/Card";
import "./App.css"

function App() {
  return (
    <div>
      <header className=" text-white">
        <h1>IMAGE GALLERY</h1>
      </header>
      <div className=" mt-2 card-group w-100">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
