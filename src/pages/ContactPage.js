import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';



class ContactPage extends React.Component{

    render(){

        return(
            <div className="contactPage">
                <Header background="#FFF" color="#29455D"  />
                <Contact />
                <Footer background="#FFF" color="#29455D" />
            </div>
        );
    }
}

export default ContactPage;