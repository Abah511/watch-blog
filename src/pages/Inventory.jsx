import React from 'react';
import './Inventory.css';

const Inventory = () => {
  const watches = [
    { 
      id: 1, 
      brand: 'Rolex', 
      model: 'Submariner', 
      price: '$8000', 
      imageUrl: 'https://watchclubpakistan.pk/cdn/shop/files/IMG-2529_1.jpg?v=1697103322&width=360' // Replace with actual image URL
    },
    { 
      id: 2, 
      brand: 'Omega', 
      model: 'Speedmaster', 
      price: '$5000', 
      imageUrl: 'https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-3ccf4a.png?w=230' // Replace with actual image URL
    },

    {
      id: 3,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-8273_Cam001_M3.png?v=1744207839',
      brand: 'SVESTON',
      price: '$5000',
      
    },


    {
      id: 4,
      imageUrl: 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw3a4cb689/TAG_Heuer_Carrera/CBN2010.BA0642/CBN2010.BA0642_0913.png',
      brand: 'Tag Heuer Carrera',
      model: 'Speedmaster', 
      price: '$5000',
    },
  
    {
      id: 5,
      imageUri: 'https://watchclubpakistan.pk/cdn/shop/products/image_79764e4b-8696-4a15-ab01-0c25de7a2587.jpg?v=1679587634&width=360',
      brand: 'Rolex',
      model: ' Gmt Master II 116710ln (Preorder)',
      price: '$5000',
    },
  
    {
      id: 6,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/07/GA-B2100-2A-300x300.webp',
      brand: 'Casio' ,
      model: 'G-Shock GA-B2100-2A Resin Band Men Watch',
  price: '$5000',
  },
  
    {
      id: 7,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2025/02/FM40106A-D-300x300.webp',
      brand: 'Ferro',
      model: 'FM40106A-D Metal Band Men Watch',
      price: '$5000',  
  },
  
    {
      id: 8,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/12/unnamed-file-300x300.webp',
      brand: 'Daniel',   
      model: 'Klein DK13647-4 Metal Band Men Watch',
      price: '$5000',
    },
  
    {
      id: 9,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2023/12/FS-5414-300x300.webp',
      brand: 'Fossil' ,
  model: 'FS-5414 Goodwin Leather Band Men Watch',
      price: '$5000',
    },
  
    {
      id: 10,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/02/565M-05-300x300.webp',
      brand: 'Halei'  ,
  model: '565M-CHTT-GLD Metal Band Men Watch',
     price: '$5000',
    },
  
    {
      id: 11,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/05/MF0411G-02-1-300x300.webp',
      brand: 'Mini' ,
  model: 'Focus  MF0411G-02 Metal Band Men Watch',
      price: '$5000',
    },
  
    {
      id: 12,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/10/pAIR-16-300x300.webp',
      brand: 'Mathey',
  model: 'Tissot Couple Watches',
      price: '$5000',
    },

    
  ];

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Our Watch Inventory</h1>
      <div className="watch-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <div className="image-container">
              <img 
                src={watch.imageUrl} 
                alt={`${watch.brand} ${watch.model}`} 
                className="watch-image" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/300x300?text=Watch+Image';
                }}
              />
            </div>
            <div className="watch-info">
              <h2 className="watch-model">{watch.brand} - {watch.model}</h2>
              <p className="watch-price">{watch.price}</p>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;