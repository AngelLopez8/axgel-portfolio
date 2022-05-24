import React, { useState } from 'react';

const Project = ({ title, media, link }) => {

    const [redirect, setRedirect] = useState(false);

    // On-Click redirect to project Github directory
    const handleClick = () => {
        setRedirect(!redirect);
    };

    if (redirect) {
        window.location.href = link;
    }

    return (
        <section className="portfolio-item" onClick={handleClick}>
            <h3>{title}</h3>
            <img className="portfolio-img" src={media} alt={title} />
        </section>
    );
}

export default Project;