import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';

export default function Ashs() {
    const { name } = useParams();

    return (
        <>
            <Header />
                <div id="ashs-section">
                    <img src={`/${name}.jpg`}/>
                    <div style={{padding: "70px 0 0 10px"}}>
                        <p style={{fontSize: "2rem", fontWeight: "600", margin: "0"}}>{name.toUpperCase()}</p>
                        <p>this is the description of the kart</p>
                    </div>
                </div>
            <Footer />
        </>
    )
}