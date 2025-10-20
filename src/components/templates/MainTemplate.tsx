import React from 'react';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import Services from '../organisms/Service';
import Projects from '../organisms/Projects';
import Footer from '../organisms/Footer';

const MainTemplate: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Footer />
        </div>
    );
};

export default MainTemplate;
