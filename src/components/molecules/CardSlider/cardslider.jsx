// Import Library
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from 'prop-types';

// Import Assets
import { ArticleCard } from "../../atoms/atoms";

// Main Declaration & Export
export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 600px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  // Main Code
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider" style={{ height: "340px" }}>
          <div className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
            <ArticleCard />
          </div>
          <div className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
            <ArticleCard />
          </div>
          <div className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
            <ArticleCard />
          </div>
          <div className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
            <ArticleCard />
          </div>
          <div className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
            <ArticleCard />
          </div>
          <div className="keen-slider__slide" style={{ display: "flex", justifyContent: "center" }}>
            <ArticleCard />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} />
          </>
        )}
      </div>
    </>
  );
}

// Additional Code
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <svg
      onClick={props.onClick}
      className={`arrow arrow--mid ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

Arrow.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  left: PropTypes.bool,
};
