import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import particalConfig from './config';
const Home = () => {
    return (
        <div>
            <Particles params={particalConfig} className="particles" style={{zindex:-1}}/>
            <div className="hello">Hello I am <p className="name">Karunesh Tripathi</p></div>
            <div className="interest">My Interests include</div>
            <div className="typing">
                <Typed
                    strings={[
                    'Web Development',
                    'Machine Learning',
                    "Deep Learning",
                    "Blockchain"
                ]}
                    typeSpeed={150}
                    backSpeed={40}
                    loop={true}
                />
            </div>
            <a className="homexplore" href="#AboutMe">Explore About Me&nbsp;
            <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
            </a>
        </div>
    )
}

export default Home
