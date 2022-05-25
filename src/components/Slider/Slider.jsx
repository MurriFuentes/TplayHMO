import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Slide01 from "../../images/tp_promo-100megas.jpg"
import Slide02 from "../../images/Cm_nacional_d.png"
import Slide03 from  "../../images/tp_banner_landing.jpg"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"."+Slide01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"."+Slide02}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"."+Slide03}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  );
}
