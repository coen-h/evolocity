import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

function BoxSection({ title, children, index }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2 * (index - 1), 0.2 * index, 0.2 * (index + 1)], [0, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0.2 * index, 0.2 * (index + 1)], [0, 50]);

  return (
    <motion.div
      className="box-section"
      style={{
        opacity,
        translateY,
      }}
    >
      <div className="box">
        <h1>{title}</h1>
        {children}
      </div>
    </motion.div>
  );
}

export default function Kart() {
  const sections = [
    { title: 'Wheels'},
    { title: 'Base' },
    { title: 'Frame' },
    { title: 'Steering' },
    { title: 'Motor' },
    { title: 'Battery' }
  ];

  return (
    <>
      <Header />
      <div id="kart">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <div style={{ height: '200vh' }} />
            <BoxSection {...section} index={index}>
              {section.title === 'Wheels' && (
                <p>
                  Most groups use bicycle tyres because of how easy it is to attach to a kart compared to other types of tyres.
                  Using bicycle tyres makes it easier to attach brakes and get a motor working.
                </p>
              )}
            </BoxSection>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
}