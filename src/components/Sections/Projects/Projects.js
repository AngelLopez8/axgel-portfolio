import React from 'react';

import sortingVisualizer from '../../Images/Projects/sorting.png';
import gameOfLife from '../../Images/Projects/conway.png';
import sudokuSolver from '../../Images/Projects/sudoku.png';

import Project from './Project';

const Projects = () => {

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle-project">A selection of my range of work</p>
            <div className="portfolio">
                <Project
                    title={"Sorting Visualizer"}
                    media={sortingVisualizer}
                    link={"https://github.com/AngelLopez8/Sorting-Algorithm-Visualizer"}
                />

                <Project
                    title={"Conway's Game of Life"}
                    media={gameOfLife}
                    link={"https://github.com/AngelLopez8/Conways-Game-Of-Life"}
                />
                
                <Project
                    title={"Sudoku Solver"}
                    media={sudokuSolver}
                    link={"https://github.com/AngelLopez8/Sudoku-Solver"}
                />
            </div>
        </section>
    );
}

export default Projects;