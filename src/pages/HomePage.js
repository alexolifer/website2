import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Home from '../components/Home';

class HomePage extends React.Component{

    render(){

        return(
            <div className="homePage">
                <Header background="#29455D" color="#FFF" />
                <Home />
                <Footer background="#29455D" color="#FFF" />
            </div>
        );
    }
}

export default HomePage;