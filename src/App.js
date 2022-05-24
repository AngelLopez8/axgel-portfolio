import React from 'react';

// Page Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import './components/styles.css';

const App = () => {

    return (
        <section>
            <NavBar />
            <Home />
            <Footer />
        </section>
    );
};

export default App;