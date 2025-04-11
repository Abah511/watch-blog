// GridWatches.jsx
import "./GridWatches.css";

const GridWatches = () => {
  const watches = [
    {
      id: 1,
      image: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-8273_Cam001_M3.png?v=1744207839",
      name: "Sveston",
    },
    {
      id: 2,
      image: "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw3a4cb689/TAG_Heuer_Carrera/CBN2010.BA0642/CBN2010.BA0642_0913.png",
      name: "TAG Heuer Carrera",
    },
    // Add more watches...
  ];

  return (
    <div className="grid-container">
      <h2>Latest Collection</h2>
      <div className="grid">
        {watches.map((watch) => (
          <div className="watch-card" key={watch.id}>
            <img src={watch.image} alt={watch.name} />
            <p>{watch.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridWatches;
