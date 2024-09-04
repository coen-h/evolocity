import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

BoxSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

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
    { title: 'Wheels', 
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2023/1/ZI/ZE/EP/152741387/tyre-and-rim-set-500x500.jpg",
        "https://cdn11.bigcommerce.com/s-1yjzn8yn6i/images/stencil/original/products/267/567/MountainBikeWheels__11856.1633026532.jpg?c=1",
        "https://m.media-amazon.com/images/I/71Fl-ZB7FYL._AC_SL1500_.jpg",
        "https://i5.walmartimages.com/asr/d65ab67d-6599-47bd-886a-f965618ffba5.435295df83169d88d2d8dadbdb39608f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      ],
      description: "Most groups use bicycle tyres because of how easy it is to attach to a kart compared to other types of tyres. Using bicycle tyres makes it easier to attach brakes and get a motor working." },
    { title: 'Base',
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2023/1/AJ/AO/VZ/61273661/19-mm-commercial-plyboard-500x500.jpg",
        "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F0434043-01?pgw=1",
        "https://themeshcompany.com/wp-content/uploads/2022/12/0.5mm-mild-steel-sheet-metal-image-600x600.jpg.webp",
        "https://cheshiregardenproducts.co.uk/wp-content/uploads/2023/08/shuttering.jpg"
      ],
      description: "When deciding your base, you will need to discuss if weight is important for your build. A lighter option like plyboard might work better or if weight doesn’t matter a stronger metal sheet may be a better option." },
    { title: 'Frame',
      images: [
        "https://www.wcwelding.com/images/go-kart-weldments.jpg"
      ],
      description: "Frames are most often made of metal pipes because of their lightweight and strength." },
    { title: 'Steering',
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6ba0a95120005.5e8f9bb38ddad.png"
      ],
      description: "Steering is probably the most important part of the kart and it’s the hardest to get right. You will need to figure out how you will attach the steering to the wheels then ensure you have a big enough steering radius and strength for going at fast speeds." },
    { title: 'Motor',
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboNpBoFN3W9GDpB2vSn1aKAJa1nqhv-wmBQ&ss",
        "https://www.driftherousa.com/cdn/shop/products/DH51_1.jpg?v=1699398153",
        "https://m.media-amazon.com/images/I/611dfImJRrL.jpg",
        "https://m.media-amazon.com/images/I/71r5mK1VaDL._AC_UF894,1000_QL80_.jpg"
      ],
      description: "Once you have finished your steering, you will need to position your motor so it’s attached to your steering axle / wheels while having enough room to not interfere with other important parts like your batteries." },
    { title: 'Battery',
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeQZIg-zpFllkbxsfHvmwwSbDcZZH4iygog&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8tzd_mvmkGBatlQnoAnf4JGMpPQ8VnfQnA&s"
      ],
      description: "As you have 2 batteries, you will need to position them to keep the center of mass as close to the middle as possible to prevent leaning too far to one side." }
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
          <div style={{ height: '120vh' }}/>
          <BoxSection key={index} title={section.title} index={index}>
            <div id="image-back">
              {section.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`${section.title} ${imgIndex + 1}`} />
              ))}
            </div>
            <p style={{ textAlign: "center" }}>
              {section.description}
            </p>
          </BoxSection>
        </>
      ))}
    </div>
    <Footer />
    </>
  );
}


// FRAME
      // <img style={{width: "100vw", height: "100vh"}} src="https://www.wcwelding.com/images/go-kart-weldments.jpg" alt="Frame" />
// STEERING
      // <img style={{width: "100vw", height: "100vh"}} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6ba0a95120005.5e8f9bb38ddad.png" alt="Steering Axle" />
// BATTERY
      // <img style={{height: "100vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8tzd_mvmkGBatlQnoAnf4JGMpPQ8VnfQnA&s" alt="Battery" />
