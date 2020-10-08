import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

class AboutPage extends React.Component{

    render(){
        
        return(
            <div className="aboutPage">
                <Header background="#FFF" color="#29455D" />
                <About background="#29455D" />
                <Footer background="#FFF" color="#29455D" />
            </div>
        );
    }
}

export default AboutPage;