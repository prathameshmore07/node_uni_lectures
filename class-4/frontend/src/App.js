import { useEffect, useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Load Plants
  const loadPlants = () => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPlants();
  }, []);

  // Add Plant
  const addPlant = async (e) => {
    e.preventDefault();

    const newPlant = {
      name,
      price: Number(price),
    };

    await fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });

    setName("");
    setPrice("");

    loadPlants();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Plant Inventory</h1>

      <form onSubmit={addPlant}>
        <div>
          <label>Plant Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Price:</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Add Plant</button>
      </form>

      <hr />

      <h2>Plants List</h2>

      {plants.map((plant) => (
        <div
          key={plant.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{plant.name}</h3>
          <p>₹{plant.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;