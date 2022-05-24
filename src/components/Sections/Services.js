import React from 'react';

const Services = () => {
    return (
        <section className="my-services" id="services">
            <h2 className="section-title section-title-services">What I do</h2>
            <div className="services">
            <div className="service">
                    <h3>Languages</h3>
                    <div>C++</div>
                    <div>Python</div>
                    <div>JavaScript</div>
                </div>
                <br/>
                <div className="service">
                    <h3>Front-End Development</h3>
                    <div>HTML/CSS</div>
                    <div>React.js</div>
                </div>
                <br/>
                <div className="service">
                    <h3>Back-End Development</h3>
                    <div>Express.js</div>
                    <div>Django</div>
                </div>
                <br/>
                <div className="service">
                    <h3>Dev-Ops</h3>
                    <div>Docker</div>
                    <div>AWS</div>
                </div>
            </div>
            <a href="#projects" className="btn">My Work</a>
        </section>
    );
}

export default Services;