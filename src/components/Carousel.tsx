import { useState } from "react";

const IMAGE_1_URL =
  "https://cdn.pixabay.com/photo/2022/02/17/15/01/black-forest-7018959_640.jpg";

const IMAGE_2_URL =
  "https://cdn.pixabay.com/photo/2023/02/08/17/55/mountains-7777164_640.jpg";

const IMAGE_3_URL =
  "https://cdn.pixabay.com/photo/2022/08/15/09/14/koyasan-temple-7387445_640.jpg";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <>
      <div className="carousel">
        <ul className="carousel__slides">
          <input
            type="radio"
            name="radio-buttons"
            id="img-1"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMAGE_1_URL} alt="이미지1" />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-prev"
              >
                <span>&lt;</span>
              </label>
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-next"
              >
                <span>&gt;</span>
              </label>
            </div>
          </li>

          <input
            type="radio"
            name="radio-buttons"
            id="img-2"
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMAGE_2_URL} alt="이미지2" />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-prev"
              >
                <span>&lt;</span>
              </label>
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-next"
              >
                <span>&gt;</span>
              </label>
            </div>
          </li>

          <input
            type="radio"
            name="radio-buttons"
            id="img-1"
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMAGE_3_URL} alt="이미지3" />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-prev"
              >
                <span>&lt;</span>
              </label>
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-next"
              >
                <span>&gt;</span>
              </label>
            </div>
          </li>

          <div className="carousel__dots">
            <label
              onClick={() => {
                setActiveImage(1);
              }}
              className="carousel__dot"
              id="img-dot-1"
            ></label>
            <label
              onClick={() => {
                setActiveImage(2);
              }}
              className="carousel__dot"
              id="img-dot-2"
            ></label>
            <label
              onClick={() => {
                setActiveImage(3);
              }}
              className="carousel__dot"
              id="img-dot-3"
            ></label>
          </div>
        </ul>
      </div>
    </>
  );
}
