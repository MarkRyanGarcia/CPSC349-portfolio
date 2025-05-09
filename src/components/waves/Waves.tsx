import React from 'react';
import './Waves.css';

interface WavesProps {
  name?: string;
  imageUrl?: string;
  bottomText?: string;
  description?: string;
}

const Waves: React.FC<WavesProps> = ({
  name = "Mark Garcia",
  imageUrl = "/src/assets/mark2.png",
  bottomText = "Made with 💗 by Markypoo",
  description = "An undergraduate student at CSU Fullerton | CS Major, Math Minor"
}) => {
  return (
    <>
      <div className="waves-header">
        {/* Waves waves-header Content */}
        <div className="inner-waves-header flex">
          <img className="circle-image" src={imageUrl} alt="Profile Pic" />
          <h1 id="name">{name}</h1>
          <p className="waves-description">{description}</p>
        </div>

        {/* Wave SVG */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(248,248,248,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(248,248,248,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(248,248,248,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f8f8f8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="content flex">
        <p>{bottomText}</p>
      </div>
    </>
  );
};

export default Waves;