import { useState } from "react";
import "./Envelope.css";
import myHeart from "./assets/heart-cartoon-style.png";

function Envelope() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleEnvelopeClick = () => {
    setIsAnimating(true);
    setIsVisible(false);
  };

  return (
      <div className="envelope-container" onClick={handleEnvelopeClick}>
        <div className="envelope">
          <div className="envelope-top"></div>
          <div className="letter"></div>
          <div className="envelope-bottom"></div>
          <div className={`flap ${isAnimating ? "flap-animating" : ""}`}></div>
          <div
            className={`heart-wrapper ${isAnimating ? "heart-transform" : ""}`}
          >
            <img
              src={myHeart}
              className={`heart ${isAnimating ? "heart-animating" : ""}`}
            />
          </div>
        </div>
        <p className={isVisible ? "p-style" : "p-style clicked"}>You've got mail! Click to open.</p>
      </div>
  );
}

export default Envelope;
