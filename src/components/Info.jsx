import React from 'react'

export default function Info() {
    return (
        <div id="info">
            <p id="info-title">What is Evolocity?</p>
            <div id="info-cardl" className="info-card">
                <div id="info-content">
                    <p>1 - Plan your build.</p>
                    <p>
                        Start planning out your build, do you want to build
                        a 4 wheel kart, a trike / reverse trike, or even a 
                        2 wheel electric bike.
                    </p>
                </div>
                <img id="info-image" src="/3.jpg" />
            </div>
            <div id="info-cardr" className="info-card">
                <div id="info-content">
                    <p>2 - Start your build!</p>
                    <p>
                        Start making your frame and slowly adding on parts
                        until you have a complete kart with a electric motor
                        and brakes.
                    </p>
                </div>
                <img id="info-image" src="/2.png" />
            </div>
            <div id="info-cardl" className="info-card">
                <div id="info-content">
                    <p>3 - Race your Kart!</p>
                    <p>
                        Bring your kart to the race in November and compete
                        against other schools to prove your kart is the best!
                    </p>
                </div>
                <img id="info-image" src="/4.jpg" />
            </div>
        </div>
    )
}