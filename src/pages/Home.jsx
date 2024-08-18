import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Signup from '../components/Signup'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(() => {
        document.title = 'Home - Evolocity';
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Info />
            <Signup />
            <Footer />
        </>
    )
}