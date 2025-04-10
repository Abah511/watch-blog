// components/WatchSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WatchSlider.css"; // We'll create this for custom styles

const watches = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Rolex Submariner",
    link: "https://www.rolex.com/watches/submariner.html",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600185365523-4f4c1d1d2921",
    name: "Omega Speedmaster",
    link: "https://www.omegawatches.com/speedmaster",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573495612937-62c14f2113f1",
    name: "Tag Heuer Carrera",
    link: "https://www.tagheuer.com/us/en/timepieces/collections/tag-heuer-carrera",
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
    </div>
  );
};

export default WatchSlider;
