import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import imageList from '../assets/imagelist'

export default function Kart() {
    return (
        <>
            <Header />
                <div id="images">
                    {imageList.map((image, index) => (
                        <img id="image" key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                </div>
            <Footer />
        </>
    )
}