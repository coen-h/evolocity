import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

function BoxSection({ title, children, index, rotateWheel }) {
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
        {rotateWheel && (
          <>
            <motion.img
              style={{ position: "absolute", width: "250px", right: "100px", top: "100px", rotate: rotateWheel }}
              src="/wheel.svg"
            />
            <motion.img
              style={{ position: "absolute", width: "250px", left: "100px", bottom: "100px", rotate: rotateWheel }}
              src="/wheel.svg"
            />
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function Kart() {
  const { scrollYProgress } = useScroll();
  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const sections = [
    { title: 'Wheels', rotateWheel },
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
            <div style={{ height: '150vh' }} />
            <BoxSection {...section} index={index}>
              {section.title === 'Wheels' && (
                <>
                  <p style={{ textAlign: "center" }}>
                    Most groups use bicycle tyres because of how easy it is to attach to a kart compared to 
                    other types of tyres. Using bicycle tyres makes it easier to attach brakes and get a motor working.
                  </p>
                </>
              )}
              {section.title === 'Base' && (
                <>
                  <p style={{ textAlign: "center" }}>
                    When deciding your base, you will need to discuss if weight is important for your build. 
                    A lighter option like plyboard might work better or if weight doesn’t matter a stronger
                    metal sheet may be a better option.
                  </p>
                  <img src="/metal.svg" style={{ position: "absolute", width: "250px", left: "100px", top: "100px"}} />
                  <img src="/wood.svg" style={{ position: "absolute", width: "250px", right: "100px", bottom: "100px"}} />
                </>
              )}
              {section.title === 'Frame' && (
                <>
                  <p style={{ textAlign: "center" }}>
                    Frames are most often made of metal pipes because of their lightweight and strength.
                  </p>
                  <img src="/pipe.svg" style={{ position: "absolute", width: "250px", right: "100px", top: "100px"}} />
                  <img src="/pipe2.svg" style={{ position: "absolute", width: "250px", left: "100px", bottom: "100px"}} />
                </>
              )}
              {section.title === 'Steering' && (
                <>
                  <p style={{ textAlign: "center" }}>
                    Steering is probably the most important part of the kart and it's the hardest to get right.
                    You will need to figure out how you will attach the steering to the wheels then ensure
                    you have a big enough steering radius and strength for going at fast speeds.
                  </p>  
                  <img src="/steer.svg" style={{ position: "absolute", width: "250px", left: "100px", top: "100px"}} />
                  <img src="/steer2.svg" style={{ position: "absolute", width: "250px", right: "100px", bottom: "100px"}} />
                </>
              )}
              {section.title === 'Motor' && (
                <>
                  <p style={{ textAlign: "center" }}>
                    Once you have finished your steering, you will need to position your motor so it's attached
                    to your steering axle / wheels while having enough room to not interfere with other
                    important parts like your batteries.
                  </p>
                  <img src="/motor.svg" style={{ position: "absolute", width: "250px", right: "100px", top: "100px"}} />
                  <img src="/motor2.svg" style={{ position: "absolute", width: "250px", left: "100px", bottom: "100px"}} />
                </>
              )}
              {section.title === 'Battery' && (
                <>
                  <p style={{ textAlign: "center" }}>
                    As you have 2 batteries, you will need to position them to keep the center of mass as close
                    to the middle as possible to prevent leaning too far to one side.
                  </p>
                  <img src="/battery.svg" style={{ position: "absolute", width: "250px", left: "100px", top: "100px"}} />
                  <img src="/battery2.svg" style={{ position: "absolute", width: "250px", right: "100px", bottom: "100px"}} />
                </>
              )}
            </BoxSection>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
}