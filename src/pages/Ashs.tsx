import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function Ashs() {
    useEffect(() => {
        document.title = 'ASHS - Evolocity';
    }, []);
    
    const sections = [
        { title: 'Wheeli', image: '/wheeli.jpg' },
        { title: 'Tank', image: '/tank.jpg' },
        { title: 'Spark-Plug', image: '/spark-plug.jpg' },
        { title: 'Other', image: '/other.jpg' }
      ];

    return (
        <>
            <Header />
                <div style={{display: "flex", flexWrap: "wrap", width: "100vw", height: "100vh"}}>
                    {sections.map((section) => (
                        <Link to={`/ashs/${section.title.toLowerCase()}`} id="ashs-box" key={section.title}>
                            <p id="ashs-box-title">{section.title}</p>
                            <img src={section.image} id="ashs-box-image" alt="Group Kart Image" />
                        </Link>
                    ))}
                </div>
            <Footer />
        </>
    )
}