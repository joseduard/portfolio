import React from 'react'
import "./realisations.scss"

export default function Realisations() {
    return (
        <div className='realisations' id='realisations'>
            <h1>Réalisations</h1>
            <ul>
                <li className='active'>Wireframes</li>
                <li> Html Css</li>
                <li> javaScript</li>
                <li>React</li>
                <li> Api REST</li>

            </ul>
            <div className="container">
                <div className="item">
                   <img src="/assets/bikers.png" alt="bikers blog"/>
                   <h3>Item title</h3>
                </div>
                <div className="item">
                   <img src="/assets/bikers.png" alt="bikers blog"/>
                   <h3>Item title</h3>
                </div>
                <div className="item">
                   <img src="/assets/bikers.png" alt="bikers blog"/>
                   <h3>Item title</h3>
                </div>
                <div className="item">
                   <img src="/assets/bikers.png" alt="bikers blog"/>
                   <h3>Item title</h3>
                </div>
                <div className="item">
                   <img src="/assets/bikers.png" alt="bikers blog"/>
                   <h3>Item title</h3>
                </div>
                <div className="item">
                   <img src="/assets/bikers.png" alt="bikers blog"/>
                   <h3>Item title</h3>
                </div>
            </div>
        </div>
    )
}
