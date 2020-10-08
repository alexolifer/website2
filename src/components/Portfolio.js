import React from 'react';

const style = {
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 80px 60px 80px',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#29455D'
    },
    homeContent:{
        display:'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFF',
        width: '85vw',
        height: '70vh',
        borderRadius: '20px'
    },
    
    h1:{
        color: '#3F6B90',
        //fontFamily: 'Roboto Mono, monospace',
        fontSize: '2.5em',
        marginBottom: '60px'
    },

    description:{
        color: '#0A2945',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2em'
    }
};


class Portfolio extends React.Component{
    render(){
        
        return(
            <section style={style.container}>
                    <div style={style.homeContent}>
                            <h1 style={style.h1}>SORRY!</h1>
                            <p style={style.description}>I'm still working on it.</p>
                    </div>
            </section>
        );
    }
}

export default Portfolio;