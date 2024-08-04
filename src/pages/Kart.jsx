import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

function BoxSection({ title, children, index }) {
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
        <h1>{title}</h1>
        {children}
      </div>
    </motion.div>
  );
}

export default function Kart() {
  const sections = [
    { title: 'Wheels' },
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
                  <div id="image-back">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/ZI/ZE/EP/152741387/tyre-and-rim-set-500x500.jpg" alt="Tyre" />
                    <img src="https://cdn11.bigcommerce.com/s-1yjzn8yn6i/images/stencil/original/products/267/567/MountainBikeWheels__11856.1633026532.jpg?c=1" alt="Tyre" />
                    <img src="https://m.media-amazon.com/images/I/71Fl-ZB7FYL._AC_SL1500_.jpg" alt="Tyre" />
                    <img src="https://i5.walmartimages.com/asr/d65ab67d-6599-47bd-886a-f965618ffba5.435295df83169d88d2d8dadbdb39608f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="Tyre" />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Most groups use bicycle tyres because of how easy it is to attach to a kart compared to 
                    other types of tyres. Using bicycle tyres makes it easier to attach brakes and get a motor working.
                  </p>
                </>
              )}
              {section.title === 'Base' && (
                <>
                  <div id="image-back">
                   <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/AJ/AO/VZ/61273661/19-mm-commercial-plyboard-500x500.jpg" alt="Plyboard" />
                   <img src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F0434043-01?pgw=1" alt="Sheet Metal" />
                   <img src="https://themeshcompany.com/wp-content/uploads/2022/12/0.5mm-mild-steel-sheet-metal-image-600x600.jpg.webp" alt="Sheet Metal" />
                   <img src="https://cheshiregardenproducts.co.uk/wp-content/uploads/2023/08/shuttering.jpg" alt="Plyboard" />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    When deciding your base, you will need to discuss if weight is important for your build. 
                    A lighter option like plyboard might work better or if weight doesn’t matter a stronger
                    metal sheet may be a better option.
                  </p>
                </>
              )}
              {section.title === 'Frame' && (
                <>
                  <div id="image-back" style={{opacity: "0.8", filter: "blur(4px)"}}>
                    <img style={{width: "100vw", height: "100vh"}} src="https://www.wcwelding.com/images/go-kart-weldments.jpg" alt="Frame" />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Frames are most often made of metal pipes because of their lightweight and strength.
                  </p>
                </>
              )}
              {section.title === 'Steering' && (
                <>
                  <div id="image-back" style={{opacity: "0.6", filter: "blur(5px)"}}>
                    <img style={{width: "100vw", height: "100vh"}} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6ba0a95120005.5e8f9bb38ddad.png" alt="Steering Axle" />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Steering is probably the most important part of the kart and it's the hardest to get right.
                    You will need to figure out how you will attach the steering to the wheels then ensure
                    you have a big enough steering radius and strength for going at fast speeds.
                  </p>  
                </>
              )}
              {section.title === 'Motor' && (
                <>
                  <div id="image-back">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboNpBoFN3W9GDpB2vSn1aKAJa1nqhv-wmBQ&ss" alt="Motor" />
                    <img src="https://www.driftherousa.com/cdn/shop/products/DH51_1.jpg?v=1699398153" alt="Motor" />
                    <img src="https://m.media-amazon.com/images/I/611dfImJRrL.jpg" alt="Motor" />
                    <img src="https://m.media-amazon.com/images/I/71r5mK1VaDL._AC_UF894,1000_QL80_.jpg" alt="Motor" />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Once you have finished your steering, you will need to position your motor so it's attached
                    to your steering axle / wheels while having enough room to not interfere with other
                    important parts like your batteries.
                  </p>
                </>
              )}
              {section.title === 'Battery' && (
                <>
                  <div id="image-back">
                    <img style={{height: "100vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeQZIg-zpFllkbxsfHvmwwSbDcZZH4iygog&s" alt="Battery" />
                    <img style={{height: "100vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8tzd_mvmkGBatlQnoAnf4JGMpPQ8VnfQnA&s" alt="Battery" />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    As you have 2 batteries, you will need to position them to keep the center of mass as close
                    to the middle as possible to prevent leaning too far to one side.
                  </p>
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