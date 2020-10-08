import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = ['Home', 'About', 'Portfolio', 'Contact']

const style = {

    nav:{
        height: '100%',
        width: '100%',
    },
    
    ul:{
        fontFamily: 'Cambria, serif',
        fontSize: '20px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 120px',
        listStyle: 'none'
    },

    menuItem:{
        listStyle: 'none',
        margin: '0 auto'
    }
}


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            headerColor: this.props.color,
            headerBackground: this.props.background
        }
    }

    hoverOn = (e) => {
        e.target.style.fontWeight = '600';
        e.target.style.color = '#1C84DD';
    }
    
    hoverOff = (e) => {
        e.target.style.fontWeight = '500';
        e.target.style.color = this.state.headerColor;
    }

    render(){
        
        const headerStyle = {
            header:{
                position: 'absolute',
                top: '0',
                width: '100%',
                height: '80px',
                background: this.state.headerBackground,
                boxShadow: '0 0 20px 0 rgba(0,0,0,0.5)',
            },

            linkStyle:{
                textDecoration: 'none',
                color: this.state.headerColor,
                fontWeight: '500',
                fontSize: "26px"
            },
        }
        
        return(
            <header style={headerStyle.header}>
                <nav style={style.nav}>
                    <ul style={style.ul}>
                        {menuItems.map
                            ((page =>
                                <li>
                                    <Link
                                        style={headerStyle.linkStyle}
                                        to={page}
                                        onMouseEnter={this.hoverOn}
                                        onMouseLeave={this.hoverOff}
                                    >
                                        {page}
                                    </Link>
                                    
                                </li>
                            ))}
                    </ul>
                </nav>
            </header>
        );
    }
    
}


export default Header;