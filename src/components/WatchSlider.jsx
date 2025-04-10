import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WatchSlider.css';

const watches = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-8273_Cam001_M3.png?v=1744207839',
    name: 'SVESTON',
    link: 'https://en-pk.svestonwatches.com/?srsltid=AfmBOoqG-6TNtLfaUv_3Tn0yI_zPtIEUunTz5RASSf3nff05wJ9oOxMT',
  },
  {
    id: 2,
    image: 'https://currenwatches.com.pk/cdn/shop/collections/c5_1134e2ce-6f98-4b14-bce5-fe93f71b6f78_330x.jpg?v=1730379621',
    name: 'Omega Speedmaster',
    link: 'https://currenwatches.com.pk/?srsltid=AfmBOooOXxLhcg1fMmOVVfzYx8s7ta16LFsZIN3RlOZFYUlcT3IZCxgD',
  },
  {
    id: 3,
    image: 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw3a4cb689/TAG_Heuer_Carrera/CBN2010.BA0642/CBN2010.BA0642_0913.png',
    name: 'Tag Heuer Carrera',
    link: 'https://www.tagheuer.com/us/en/timepieces/collections/tag-heuer-carrera.html',
  },
  {
    id: 4,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/10/Pair-1.webp',
    name: 'Rado Jubile Couple Watches',
    link: 'https://rafiqsonsonline.com/product/rado-jubile-couple-watch/',
  },
  {
    id: 5,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/07/GA-B2100-2A-300x300.webp',
    name: 'Casio G-Shock GA-B2100-2A Resin Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=casio',
  },
  {
    id: 6,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2025/02/FM40106A-D-300x300.webp',
    name: 'Ferro FM40106A-D Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=ferro',
  },
  {
    id: 7,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/12/unnamed-file-300x300.webp',
    name: 'Daniel Klein DK13647-4 Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=daniel-klein',
  },
  {
    id: 8,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2023/12/FS-5414-300x300.webp',
    name: 'Fossil FS-5414 Goodwin Leather Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=fossil',
  },
  {
    id: 9,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/02/565M-05-300x300.webp',
    name: 'Halei 565M-CHTT-GLD Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=halei',
  },
  {
    id: 10,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/05/MF0411G-02-1-300x300.webp',
    name: 'Mini Focus MF0411G-02 Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=mini-focus',
  },
  {
    id: 11,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/10/pAIR-16-300x300.webp',
    name: 'Mathey Tissot Couple Watches',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=mathey-tissot',
  },

];

const latestWatches = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-8273_Cam001_M3.png?v=1744207839',
    name: 'Rolex Submariner',
    link: 'https://www.rolex.com/watches/submariner',
  },
  {
    id: 2,
    image: 'https://currenwatches.com.pk/cdn/shop/collections/c5_1134e2ce-6f98-4b14-bce5-fe93f71b6f78_330x.jpg?v=1730379621',
    name: 'Omega Seamaster',
    link: 'https://www.omegawatches.com/seamaster',
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/0003/5815/4293/files/SV-8273_Cam001_M3.png?v=1744207839',
    name: 'SVESTON',
    link: 'https://en-pk.svestonwatches.com/?srsltid=AfmBOoqG-6TNtLfaUv_3Tn0yI_zPtIEUunTz5RASSf3nff05wJ9oOxMT',
  },
  {
    id: 4,
    image: 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw3a4cb689/TAG_Heuer_Carrera/CBN2010.BA0642/CBN2010.BA0642_0913.png',
    name: 'Tag Heuer Carrera',
    link: 'https://www.tagheuer.com/us/en/timepieces/collections/tag-heuer-carrera.html',
  },
  {
    id: 5,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/10/Pair-1.webp',
    name: 'Rado Jubile Couple Watches',
    link: 'https://rafiqsonsonline.com/product/rado-jubile-couple-watch/',
  },
  {
    id: 6,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/07/GA-B2100-2A-300x300.webp',
    name: 'Casio G-Shock GA-B2100-2A Resin Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=casio',
  },
  {
    id: 7,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2025/02/FM40106A-D-300x300.webp',
    name: 'Ferro FM40106A-D Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=ferro',
  },
  {
    id: 8,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/12/unnamed-file-300x300.webp',
    name: 'Daniel Klein DK13647-4 Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=daniel-klein',
  },
  {
    id: 9,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2023/12/FS-5414-300x300.webp',
    name: 'Fossil FS-5414 Goodwin Leather Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=fossil',
  },
  {
    id: 10,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/02/565M-05-300x300.webp',
    name: 'Halei 565M-CHTT-GLD Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=halei',
  },
  {
    id: 11,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/05/MF0411G-02-1-300x300.webp',
    name: 'Mini Focus MF0411G-02 Metal Band Men Watch',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=mini-focus',
  },
  {
    id: 12,
    image: 'https://rafiqsonsonline.com/wp-content/uploads/2024/10/pAIR-16-300x300.webp',
    name: 'Mathey Tissot Couple Watches',
    link: 'https://rafiqsonsonline.com/product-category/mens-watch/?filter_brands=mathey-tissot',
  },


];

const WatchSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="watch-slider">
      <Slider {...settings}>
        {watches.map((watch) => (
          <div key={watch.id} className="slide">
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <a href={watch.link} target="_blank" rel="noopener noreferrer">
              View on Official Site
            </a>
          </div>
        ))}
      </Slider>

      {/* Latest Watches Grid */}
      <div className="latest-watches">
        <h2>Latest Collection</h2>
        <div className="latest-watches-grid">
          {latestWatches.map((watch) => (
            <div key={watch.id} className="watch-item">
              <img src={watch.image} alt={watch.name} />
              <h3>{watch.name}</h3>
              <a href={watch.link} target="_blank" rel="noopener noreferrer">
                View on Official Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchSlider;
