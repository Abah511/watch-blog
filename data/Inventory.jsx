const Inventory = () => {
    const watches = [
      { id: 1, brand: 'Rolex', model: 'Submariner', price: '$8000' },
      { id: 2, brand: 'Omega', model: 'Speedmaster', price: '$5000' },
    ];
  
    return (
      <div>
        <h2>Inventory</h2>
        <ul>
          {watches.map(w => (
            <li key={w.id}>{w.brand} - {w.model} - {w.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Inventory;
  