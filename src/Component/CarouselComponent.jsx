import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";

function CarouselComponent() {
  return (
    
      <Carousel data-bs-theme="dark" className="">
        <Carousel.Item>
          <img
            className="image_width"
            src="https://plus.unsplash.com/premium_photo-1700752853984-d3d1574aabd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_width"
            src="https://images.unsplash.com/photo-1717153982802-b0bd0b2eb579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_width"
            src="https://images.unsplash.com/photo-1717158082997-97d18efbd633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

  );
}
export default CarouselComponent;
