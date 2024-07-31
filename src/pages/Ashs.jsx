import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function Ashs() {
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
                        <Link to={`/ashs/${section.title.toLowerCase()}`} id="ashs-box">
                            <p style={{position: "absolute", alignSelf: "center", zIndex: "1111", fontSize: "2.5rem", fontWeight: "500"}}>{section.title}</p>
                            <img src={section.image} style={{width: "50vw", height: "50vh", objectFit: "cover", opacity: "0.5", filter: "blur(5px)"}}/>
                        </Link>
                    ))}
                </div>
            <Footer />
        </>
    )
}