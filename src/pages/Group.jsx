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
                        { name === 'wheeli' && (
                            <p>
                                This is my group for Evolocity, more info about.
                            </p>
                        )}
                        { name === 'tank' && (
                            <p>
                                This is info about the tank!
                            </p>
                        )}
                        { name === 'spark-plug' && (
                            <p>
                                This is info about spark-plug, the veterans.
                            </p>
                        )}
                        { name === 'other' && (
                            <p>
                                This is info for the other groups.
                            </p>
                        )}
                    </div>
                </div>
            <Footer />
        </>
    )
}