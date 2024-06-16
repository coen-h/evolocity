import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Signup from '../components/Signup'
import Footer from '../components/Footer'

export default function Home() {
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