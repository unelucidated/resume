import React from 'react';
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Homepage = () => {
    const github = <FontAwesomeIcon icon={faGithub} className="fa-2x" />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
    const email = <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
    return (
        <div className="columns">
            <div className="column is-half">
                <h1 class="title has-text-white">
                    Hi! I'm Douglas
                </h1>
                <h6 class="subtitle has-text-white mt-4">
                    I am a Singaporean based {' '}
                    <span>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={['business graduate', 'front-end web developer', 'digital marketer', 'crypto trader']}
                        />
                    </span>
                </h6>
                <div className="columns">
                    <div className="column is-1">
                        <a href="https://github.com/unelucidated" target="_blank" className="has-text-white" rel="noreferrer">
                            {github}
                        </a>
                    </div>
                    <div className="column is-1">
                        <a href="https://www.linkedin.com/in/douglastan49/" target="_blank" className="has-text-white" rel="noreferrer">
                            {linkedin}
                        </a>
                    </div>
                    <div className="column is-1">
                        <a href="mailto:tan.douglas@u.nus.edu" target="_blank" className="has-text-white" rel="noreferrer">
                            {email}
                        </a>
                    </div>
                    <div className="column is-1">
                        <a href="resume.pdf" download>
                            <button className="button is-small is-light is-outlined">Download resume</button>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Homepage;