"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    img: "/img/client-img/client1.jpg",
    name: "Alen Meair",
    position: "Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: 5,
  },
  {
    img: "/img/client-img/client2.jpg",
    name: "Axon Detos",
    position: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: 5,
  },
  {
    img: "/img/client-img/client3.jpg",
    name: "John Dona",
    position: "Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: 5,
  },
  {
    img: "/img/client-img/client4.jpg",
    name: "Anna Smith",
    position: "Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: 5,
  },
  {
    img: "/img/client-img/client5.jpg",
    name: "Alien Dew",
    position: "Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: 5,
  },
  {
    img: "/img/client-img/client6.jpg",
    name: "Jon Smith",
    position: "Reviewer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.",
    rating: 5,
  },
];

const TestimonialsCard: React.FC = () => {
  return (
    <div className="client-area-page ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>What Client’s Say About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.
          </p>
        </div>
        <div className="row">
          {testimonials.map((t, idx) => (
            <div className="col-lg-4 col-sm-6" key={idx}>
              <div className="testimonial-card glass-effect hover-lift">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>{t.text}</p>
                <ul className="rating mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <li key={i}><i className="bx bxs-star"></i></li>
                  ))}
                </ul>
                <div className="client-info">
                  <div className="client-img">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h3 className="client-name mb-1">{t.name}</h3>
                    <span className="client-position">{t.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="col-lg-12">
            <div className="page-navigation-area mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link href="#" className="page-link page-links">
                    <i className="bx bx-chevrons-left"></i>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link href="#" className="page-link">1</Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">2</Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">3</Link>
                </li>
                <li className="page-item">
                  <Link href="#" className="page-link">
                    <i className="bx bx-chevrons-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
