import Card from "./components/Card";

function App() {
  return (
    <div>
      <div className="card-group w-100">
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
