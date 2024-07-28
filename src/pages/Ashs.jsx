import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function Ashs() {
    const sections = [
        { title: 'Wheeli' },
        { title: 'Tank' },
        { title: 'Spark-Plug' },
        { title: 'other' }
      ];

    return (
        <>
            <Header />
                <div style={{display: "flex", flexWrap: "wrap", width: "100vw", height: "100vh"}}>
                    {sections.map((section) => (
                        <Link to={`/ashs/${section.title.toLowerCase()}`} id="ashs-box">
                            <p>{section.title}</p>
                        </Link>
                    ))}
                </div>
            <Footer />
        </>
    )
}