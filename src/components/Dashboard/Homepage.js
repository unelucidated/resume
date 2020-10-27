import React from 'react';
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

const Homepage = () => {
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
            </div>
        </div>
    );
}

export default Homepage;