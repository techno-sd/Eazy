"use client";
  
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const IntroVideo: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="video-area-six pb-100">
        <div className="container">
          <div className="video-img-six">
            <Image
              src="/img/home-six/video-img.png"
              alt="Image"
              width={862}
              height={642}
            />

            <div className="video-button">
              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
              >
                <i className="bx bx-play"></i>
              </div>
            </div>

            <h3>Watch Video</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
