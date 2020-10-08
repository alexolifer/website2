import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';


class PortfolioPage extends React.Component{

    render(){
        
        return(
            <div className="portfolioPage">
                <Header background="#FFF" color="#29455D" />
                <Portfolio background="#29455D" />
                <Footer background="#FFF" color="#29455D" />
            </div>
        );
    }
}

export default PortfolioPage;