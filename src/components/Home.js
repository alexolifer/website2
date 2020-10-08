import React from 'react';

const style = {
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 80px 60px 80px',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
    },
    homeContent:{
        display:'grid',
        gridTemplateColumns:'1fr 2fr',
        background: '',
        width: '80vw',
        height: '70vh',
        borderRadius: '20px'
    },
    figure:{
        width: '300px',
        height:'300px',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 0 10px 0 rgba(0,0,0,1)',
        margin: 'auto'
    },
    text:{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-evenly',
        paddingLeft: '5vw',
        margin: 'auto',
        lineHeight: '1.25'
    },
    h1:{
        color: '#3F6B90',
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '2.5em',
        marginBottom: '60px'
    },
    description:{
        color: '#0A2945',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2em'
    }
}

class Home extends React.Component{
    render(){
        
        return(
            <section style={style.container}>
                    <div style={style.homeContent}>
                        <figure style={style.figure}>
                            <img src="assets/img/3-normal.jpg" />
                        </figure>
                        <div style={style.text}>
                            <h1 style={style.h1}>Hello!</h1>
                            <p style={style.description}>My name is Alexandre Ferreira, I'm a Lisbon-based Junior Web Developer and hiring for my first job.</p>
                        </div>
                    </div>            
            </section>

        );
    }
}

export default Home;