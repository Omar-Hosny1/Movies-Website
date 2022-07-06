import React from "react";
import images from "./images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ScrollImages() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src={images[0]} alt="" />
        </div>
        <div>
          <img loading="lazy" src={images[1]} alt="" />
        </div>
        <div>
          <img loading="lazy" src={images[2]} alt="" />
        </div>
        <div>
          <img loading="lazy" src={images[3]} alt="" />
        </div>
      </Carousel>
    </section>

    // <div className="home">
    //   <img src={images[0]} className="mobile-pic" />
    //   <motion.div className="carousel">
    //     <motion.div
    //       drag="x"
    //       dragConstraints={{ right: 0, left: -4350 }}
    //       className="inner-carousel"
    //     >
    //       {images.map((image) => {
    //         return (
    //           <motion.div className="item" key={image}>
    //             <img src={image} />
    //           </motion.div>
    //         );
    //       })}
    //     </motion.div>
    //   </motion.div>
    // </div>
  );
}
