import React from 'react';

import DEFAULT from '../../Images/Certificates/default.gif';
import CPP from '../../Images/Certificates/cppcertificate.jpg';
import DJANGO from "../../Images/Certificates/djangocertificate.png";
import MYSQL from "../../Images/Certificates/mysqlcertificate.jpg";
import DOCKER from '../../Images/Certificates/dockercertificate.jpg';

import Certificate from './Certificate';

const Certificates = () => {
    return (
        <section className="projects" id="certificates">
            <h2 className="section-title">Certificates</h2>
            <p className="section-subtitle-project">Earned Certificates</p>
            <div className="portfolio">
                <Certificate
                    title={"Beginning C++ Programming - From Beginner to Beyond"}
                    media={CPP}
                    link={"https://www.udemy.com/certificate/UC-2a0d230d-d43e-4e70-ab9f-a1ddf54bb73b/"}
                />
                <Certificate
                    title={"Become a Django Developer"}
                    media={DJANGO}
                    link={"https://www.linkedin.com/in/angel-lopez-a93a43156/"}
                />
                <Certificate
                    title={"The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert"}
                    media={MYSQL}
                    link={"https://www.udemy.com/certificate/UC-78f96d2c-982e-4244-9d6a-50016e9c353c/"}
                /> 
                <Certificate
                    title={"Docker and Kubernetes: The Complete Guide"}
                    media={DOCKER}
                    link={"https://www.udemy.com/certificate/UC-94caee4e-0d85-404a-873a-f5dbf8585f6d/"}
                />
            </div>
            <p className="section-subtitle-project">In Progress Certificates</p>
            <div className="portfolio">
                <Certificate
                    title={"Ultimate AWS Certified Developer Associate 2022"}
                    media={DEFAULT}
                    link={""}
                />
                <Certificate
                    title={"React - The Complete Guide (incl Hooks, React Router, Redux)"}
                    media={DEFAULT}
                    link={""}
                />
                <Certificate
                    title={"MATLAB Programming for Engineers and Scientists Specialization"}
                    media={DEFAULT}
                    link={""}
                />
            </div>
        </section>
    );
}

export default Certificates;