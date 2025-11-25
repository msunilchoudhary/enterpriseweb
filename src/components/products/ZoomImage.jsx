import { useState } from "react";
import Slider from "react-slick";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

export default function ZoomImage({
  images = [
    "/images/products/fashion/fashion01.webp",
    "/images/products/fashion/fashion02.jpg",
    "/images/products/fashion/fashion03.webp",
  ],
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="d-flex">
      <Slider {...settings} className="zoom-slider-thumbs">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="p-1"
          >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className="img-thumbnail"
              style={{ width: "80px", cursor: "pointer" }}
            />
          </div>
        ))}
      </Slider>
      <div className="border p-2 mb-3">
        <InnerImageZoom
          zoomScale={2}
          zoomType="hover"
          src={selectedImage}
          zoomSrc={selectedImage}
        />
      </div>
    </div>
  );
}
