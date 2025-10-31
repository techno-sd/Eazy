"use client";
  
import React from "react";

const TopHeader: React.FC = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <ul className="header-content-left">
                <li>
                  <a href="mailto:info@eazycyber.sa">
                    <i className="bx bx-envelope"></i>
                    Email: info@eazycyber.sa
                  </a>
                </li>

                <li>
                  <i className="bx bx-location-plus"></i>
                  658 Lane Drive St. California
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
