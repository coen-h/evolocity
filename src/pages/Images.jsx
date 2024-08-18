import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import imageList from '../assets/imagelist'

export default function Kart() {
    useEffect(() => {
        document.title = 'Images - Evolocity';
    }, []);

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