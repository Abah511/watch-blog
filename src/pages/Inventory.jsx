import React, { useState } from 'react';
import './Inventory.css';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaExchangeAlt, FaSearch } from 'react-icons/fa';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [quickView, setQuickView] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [compare, setCompare] = useState([]);

  const watches = [
    { 
      id: 1, 
      brand: 'Rolex', 
      model: 'Submariner', 
      price: 8000, 
      imageUrl: 'https://watchclubpakistan.pk/cdn/shop/files/IMG-2529_1.jpg?v=1697103322&width=360',
      rating: 4.5,
      isNew: true
    },
    { 
      id: 2, 
      brand: 'Omega', 
      model: 'Speedmaster', 
      price: 5000, 
      imageUrl: 'https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-3ccf4a.png?w=230',
      rating: 4.2,
      isNew: false
    },
    {
      id: 3,
      brand: 'SVESTON',
      model: 'Classic',
      price: 5000,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-8273_Cam001_M3.png?v=1744207839',
      rating: 3.8,
      isNew: true
    },
    {
      id: 4,
      brand: 'Tag Heuer',
      model: 'Carrera',
      price: 5000,
      imageUrl: 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw3a4cb689/TAG_Heuer_Carrera/CBN2010.BA0642/CBN2010.BA0642_0913.png',
      rating: 4.0,
      isNew: false
    },
    {
      id: 5,
      brand: 'Rolex',
      model: 'GMT Master II',
      price: 5000,
      imageUrl: 'https://watchclubpakistan.pk/cdn/shop/products/image_79764e4b-8696-4a15-ab01-0c25de7a2587.jpg?v=1679587634&width=360',
      rating: 4.7,
      isNew: true
    },
    {
      id: 6,
      brand: 'Casio',
      model: 'G-Shock GA-B2100',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/07/GA-B2100-2A-300x300.webp',
      rating: 4.1,
      isNew: false
    },
    {
      id: 7,
      brand: 'Ferro',
      model: 'FM40106A-D',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2025/02/FM40106A-D-300x300.webp',
      rating: 3.9,
      isNew: true
    },
    {
      id: 8,
      brand: 'Daniel Klein',
      model: 'DK13647-4',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/12/unnamed-file-300x300.webp',
      rating: 4.0,
      isNew: false
    },
    {
      id: 9,
      brand: 'Fossil',
      model: 'FS-5414',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2023/12/FS-5414-300x300.webp',
      rating: 4.2,
      isNew: false
    },
    {
      id: 10,
      brand: 'Halei',
      model: '565M-CHTT-GLD',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/02/565M-05-300x300.webp',
      rating: 3.7,
      isNew: true
    },
    {
      id: 11,
      brand: 'Mini Focus',
      model: 'MF0411G-02',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/05/MF0411G-02-1-300x300.webp',
      rating: 3.5,
      isNew: false
    },
    {
      id: 12,
      brand: 'Mathey Tissot',
      model: 'Couple Watch',
      price: 5000,
      imageUrl: 'https://rafiqsonsonline.com/wp-content/uploads/2024/10/pAIR-16-300x300.webp',
      rating: 4.3,
      isNew: true
    }
  ];

  // Filter logic
  const filteredWatches = watches.filter(watch => {
    const matchesSearch = `${watch.brand} ${watch.model}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || 
                       (priceFilter === '5000' && watch.price <= 5000) ||
                       (priceFilter === '10000' && watch.price <= 10000);
    return matchesSearch && matchesPrice;
  });

  // Sorting logic
  const sortedWatches = [...filteredWatches].sort((a, b) => {
    switch(sortOption) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'brand': return a.brand.localeCompare(b.brand);
      default: return 0;
    }
  });

  // Rating stars
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star" />
      );
    }
    return <div className="rating-stars">{stars}</div>;
  };

  // Toggle wishlist
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // Toggle compare
  const toggleCompare = (id) => {
    if (compare.includes(id)) {
      setCompare(compare.filter(item => item !== id));
    } else if (compare.length < 2) {
      setCompare([...compare, id]);
    }
  };

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Our Watch Inventory</h1>
      
      {/* Search and Filter Controls */}
      <div className="controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search watches..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-controls">
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="5000">Under $5,000</option>
            <option value="10000">Under $10,000</option>
          </select>
          
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="brand">Brand (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Compare Indicator */}
      {compare.length > 0 && (
        <div className="compare-indicator">
          {compare.length} item(s) selected for comparison
          <button onClick={() => console.log('Compare:', compare)}>Compare Now</button>
        </div>
      )}

      {/* Watch Grid */}
      <div className="watch-grid">
        {sortedWatches.map((watch) => (
          <div 
            key={watch.id} 
            className={`watch-card ${watch.isNew ? 'new-arrival' : ''}`}
            onMouseEnter={() => setQuickView(watch.id)}
            onMouseLeave={() => setQuickView(null)}
          >
            {/* New Arrival Badge */}
            {watch.isNew && <div className="new-badge">New Arrival</div>}
            
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
              
              {/* Quick View on Hover */}
              {quickView === watch.id && (
                <div className="quick-view">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              )}
              
              
              <button 
                className={`wishlist-btn ${wishlist.includes(watch.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(watch.id)}
              >
                {wishlist.includes(watch.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            
            <div className="watch-info">
              <h2 className="watch-model">{watch.brand} - {watch.model}</h2>
              
              {/* Rating System */}
              <div className="watch-rating">
                {renderRating(watch.rating)}
                <span>({watch.rating.toFixed(1)})</span>
              </div>
              
              <p className="watch-price">${watch.price.toLocaleString()}</p>
              
              <div className="action-buttons">
                <button className="view-details">View Details</button>
                
                {/* Compare Button */}
                <button 
                  className={`compare-btn ${compare.includes(watch.id) ? 'active' : ''}`}
                  onClick={() => toggleCompare(watch.id)}
                >
                  <FaExchangeAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;