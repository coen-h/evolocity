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
                    <img src={`/${name}.jpg`} alt="Group Kart Image" />
                    <div style={{padding: "70px 5px 0 10px"}}>
                        <p style={{fontSize: "2rem", fontWeight: "600", margin: "0"}}>{name.toUpperCase()}</p>
                        { name === 'wheeli' && (
                            <div id="ashs-info">
                                <p>
                                    This is my group for Evolocity, We started making our kart at the start of the year
                                    like the other two more complete groups. At first, we decided to make a reverse trike
                                    as we felt it would have the most power with one big back wheel while being stable
                                    enough. As we built our kart up, we realised this one back wheel won't be enough to
                                    keep our kart from tipping so we had to make it a 4 wheeler. It's taking us a lot
                                    longer than we first thought because of the many issues we've found and had to fix
                                    using problem solving. I felt like I've learnt a alot from taking Evolocity,
                                    especially working as a team working towards a goal. As you can see we haven't completed
                                    our build yet but we are getting closer everyday.
                                </p>
                                <div style={{padding: "0 0 45px 0"}}>
                                    <h2>Pros:</h2>
                                    <p>Lightweight</p>
                                    <p>Agile</p>
                                    <h2>Cons:</h2>
                                    <p>Average turning radius</p>
                                    <p>Bad braking <span style={{fontStyle: "italic"}}>(for now)</span></p>
                                </div>
                            </div>
                        )}
                        { name === 'tank' && (
                            <div id="ashs-info">
                                <p>
                                    This is info about the tank!
                                </p>
                                <div style={{padding: "0 0 45px 0"}}>
                                    <h2>Pros:</h2>
                                    <p>Strongly built</p>
                                    <p>Big</p>
                                    <h2>Cons:</h2>
                                    <p>Heavy</p>
                                    <p>Slow</p>
                                </div>
                            </div>
                        )}
                        { name === 'spark-plug' && (
                            <div id="ashs-info">
                                <p>
                                    This is info about spark-plug, the veterans.
                                </p>
                                <div style={{padding: "0 0 45px 0"}}>
                                    <h2>Pros:</h2>
                                    <p>Good design</p>
                                    <p>Suprisingly good turning</p>
                                    <h2>Cons:</h2>
                                    <p>Long</p>
                                    <p>other</p>
                                </div>
                            </div>
                        )}
                        { name === 'other' && (
                            <div id="ashs-info">
                                <p>
                                    This is info for the other groups.
                                </p>
                                <div style={{padding: "0 0 45px 0"}}>
                                    <h2>Pros:</h2>
                                    <p>none</p>
                                    <p>none</p>
                                    <h2>Cons:</h2>
                                    <p>none</p>
                                    <p>none</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            <Footer />
        </>
    )
}