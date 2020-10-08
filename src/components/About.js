import React from 'react';
import { Paper } from '@material-ui/core';

const style = {

    homeContent:{
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        background: '',
        width: '80vw',
        height: '70vh',
        borderRadius: '20px'
    },

    paper:{
        display: 'flex-inline',
        padding: '10px 20px',
        width: '80%',
        height: '100%',
        overflow: 'hidden',
        margin: '0 auto',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
        borderRadius: '20px'
    },

    h2:{
    textAlign: 'center',
    fontSize:'1.5vw'
    },

    text:{
        color: '#000',
        fontSize: '1.1vw',
        textAlign: 'justify',
        textAlignLast: 'left',
    }
}

class About extends React.Component{
    render(){

        const aboutColor = {
            container:{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '80px 80px 60px 80px',
                height: '100vh',
                overflow: 'hidden',
                background: this.props.background
            },
        }
        
        
        return(
            <section style={aboutColor.container}>
                    <div style={style.homeContent}>
                    <Paper style={style.paper}>
                        <h2 style={style.h2}>Web Development</h2>
                        <img style={{height: '180px', margin: '10px auto', borderRadius: '10px 50px 10px'}} src="assets/img/coding.jpg" />
                        <p style={style.text}>
                            After some years of planning I've iniciated my studies in web development at ETIC - Lisbon (19/20).
                            <br /> <br />
                            I'm excited about the possibility of making this dream come true and immersing myself into the coding world.
                        </p>
                    </Paper>
                    <Paper style={style.paper}>
                        <h2 style={style.h2}>Professional</h2>
                        <img style={{height: '180px', margin: '10px auto', borderRadius: '10px 10px'}} src="assets/img/cogwheel-sm.jpg" />
                        <p style={style.text}>
                            I like to work in groups, I'm friendly and fun. I believe that having a good working environment is one of the steps to improve the performance of the entire group.
                            <br /> <br />
                            I seek a workplace to grow and learn, seeking to grow as a whole with my co-workers.
                        </p>
                    </Paper>
                    <Paper style={style.paper}>
                        <h2 style={style.h2}>Hobbies</h2>
                        <img style={{height: '180px', margin: '10px auto', borderRadius: '50px 10px 50px'}} src="assets/img/kid.jpg" />
                        <p style={style.text}>
                            I love playing sports like football, brazilian jiu-jitsu, and gym. 
                            <br /> <br />
                            I also like esports (CSGO specialy) and learn about new technologies.
                        </p>
                    </Paper>
                </div>
            </section>
        );
    }
    
}


export default About;