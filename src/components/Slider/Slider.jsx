import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Slide01 from "../../images/slider1.png"
import Slide02 from "../../images/slider2.jpg"
import Slide03 from "../../images/slider3.jpg"

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
            src={"https://i.ibb.co/m5jfLM5/slider1.png"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/pjG68Yg/slider2.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/5vnBrF6/slider3.png"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  );
}
