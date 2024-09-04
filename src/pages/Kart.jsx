import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

BoxSection.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

function BoxSection({ children, index }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2 * (index - 1), 0.2 * index, 0.2 * (index + 1)], [0, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0.2 * index, 0.2 * (index + 1)], [0, 25]);

  return (
    <motion.div
      className="box-section"
      style={{
        opacity,
        translateY,
      }}
    >
      <div className="box">
        {children}
      </div>
    </motion.div>
  );
}

export default function Kart() {
  const sections = [
    { title: 'Frame and Seat', 
      image: "/wheeli1.webp",
      description: "Using a light metal frame, We have a good base to build on." },
    { title: 'Steering axle', 
      image: "/wheeli2.webp",
      description: "We built our steering axle ontop of a previous groups one to make it work for our kart." },
    { title: 'Wheels and Back Frame', 
      image: "/wheeli3.webp",
      description: "We attached our steering axle and added an additional wheel to the back." },
    { title: 'Second back wheel, Reinforcing', 
      image: "/wheeli4.webp",
      description: "A second wheel was added to the back for extra stability and to prevent tipping side to side." },
    { title: 'Motor and wiring batteries', 
      image: "/wheeli5.webp",
      description: "We added a motor and two batteries to power our kart. ." },
    { title: 'Brakes', 
      image: "/wheeli6.webp",
      description: "A brake on both wheels making sure we have enough braking power for any situation." },
  ];

  useEffect(() => {
    document.title = 'Kart - Evolocity';
  }, []);

  return (
    <>
      <Header />
      <div id="kart">
      {sections.map((section, index) => (
        <>
          <div key={index + 10} style={{ height: '120vh' }}/>
            <BoxSection key={index} title={section.title} index={index}>
              <div id="image-back">
                <img style={{width: "100vw", height: "100vh"}} src={section.image} alt={`${section.title}`} />
              </div>
              <div id="kart-text"> 
                <h1 style={{textAlign: "center", margin: "0"}}>{section.title}</h1>
                <p style={{ textAlign: "center", margin: "0" }}>
                  {section.description}
                </p>
              </div>
            </BoxSection>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
}