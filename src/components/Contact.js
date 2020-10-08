import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const classes = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const align = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 80px 60px 80px',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#29455D'
    },
    homeContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFF',
        width: '85vw',
        height: '70vh',
        borderRadius: '20px'
    },
};

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '', nameValid: null,
            email: '', emailValid: null,
            subject: '', subjectValid: null,
            message: '', messageValid: null,
            formValid: null,
            errorMsg: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    validateForm = () => {

        const { nameValid, emailValid, subjectValid, messageValid } = this.state;

        this.setState({
            formValid: nameValid && emailValid && subjectValid && messageValid
        })
    }

    updateName = (name) => {
        this.setState({ name }, this.validateName)
    }

    validateName = () => {
        const { name } = this.state;
        let nameValid = true;
        let errorMsg = { ...this.state.errorMsg }

        if (name.length < 3 && name.length > 0) {
            nameValid = false;
            errorMsg.name = 'Must be at least 3 characters long'
        } else {
            nameValid = true;
            errorMsg.name = false
        }

        this.setState({ nameValid, errorMsg }, this.validateForm)
    }

    updateEmail = (email) => {
        this.setState({ email }, this.validateEmail)
    }

    validateEmail = () => {
        const { email } = this.state;
        let emailValid = true;
        let errorMsg = { ...this.state.errorMsg }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length > 0) {
            emailValid = false;
            errorMsg.email = 'Invalid email format'
        } else {
            emailValid = true;
            errorMsg.email = null
        }

        this.setState({ emailValid, errorMsg }, this.validateForm)
    }

    updateSubject = (subject) => {
        this.setState({ subject }, this.validateSubject)
    }

    validateSubject = () => {
        const { subject } = this.state;
        let subjectValid = true;
        let errorMsg = { ...this.state.errorMsg }

        if (subject.length < 7 && subject.length > 0) {
            subjectValid = false;
            errorMsg.subject = 'Must be at least 7 characters long'
        } else {
            subjectValid = true;
            errorMsg.subject = null
        }

        this.setState({ subjectValid, errorMsg }, this.validateForm)
    }

    updateMessage = (message) => {
        this.setState({ message }, this.validateMessage)
    }

    validateMessage = () => {
        const { message } = this.state;
        let messageValid = true;
        let errorMsg = { ...this.state.errorMsg }

        if (message.length < 100 && message.length !== 0) {
            messageValid = false;
            errorMsg.message = 'Must be at least 50 characters long'
        } else {
            messageValid = true;
            errorMsg.message = null
        }

        this.setState({ messageValid, errorMsg }, this.validateForm);
    }

    resetForm() {
        this.setState({ name: "", email: "", subject: "", message: "" })
    }

    handleSubmit(e) {
        e.preventDefault()
        const newState = this.state;
        if (this.state !== "") {
            console.log(newState)
            this.resetForm()
        }
    }


    render() {

        //console.log(this.state)

        return (
            <section style={style.container}>
                <div >
                    <form
                        style={style.homeContent}
                        noValidate
                        //autoComplete="off"
                        method="POST"
                        onSubmit={this.handleSubmit}
                    >
                        <div className={classes.root}>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid item xs={6} style={align}>

                                    <TextField
                                        required
                                        id="formName"
                                        value={this.state.name}
                                        label="Name"
                                        name="name"
                                        style={{ margin: 8, width: '38vw', borderRadius: '2px' }}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        helperText={this.state.errorMsg.name}
                                        error={!this.state.nameValid && this.state.nameValid !== null}
                                        onChange={(e) => this.updateName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} style={align}>
                                    <TextField
                                        required
                                        id="formEmail"
                                        value={this.state.email}
                                        label="Email"
                                        name="mail"
                                        style={{ margin: 8, width: '38vw', borderRadius: '2px' }}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        helperText={this.state.errorMsg.email}
                                        error={!this.state.emailValid && this.state.emailValid !== null}
                                        onChange={(e) => this.updateEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} style={align}>
                                    <TextField
                                        required
                                        id="formSubject"
                                        value={this.state.subject}
                                        label="Subject"
                                        name="subject"
                                        style={{ margin: 8, width: '81vw', borderRadius: '2px' }}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        helperText={this.state.errorMsg.subject}
                                        error={!this.state.subjectValid && this.state.subjectValid !== null}
                                        onChange={(e) => this.updateSubject(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} style={align}>
                                    <TextField
                                        required
                                        id="formMessage"
                                        value={this.state.message}
                                        label="Message"
                                        name="message"
                                        style={{ margin: 8, width: '81vw', borderRadius: '2px' }}
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={7}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        helperText={this.state.errorMsg.message}
                                        error={!this.state.messageValid && this.state.messageValid !== null}
                                        onChange={(e) => this.updateMessage(e.target.value)}
                                    />
                                </Grid>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    style={{ margin: '0 auto', height: '5vh' }}
                                    className={classes.margin}
                                >
                                    SUBMIT
                                </Button>

                            </Grid>
                        </div>
                    </form>
                </div>
            </section>
        );
    }

}

export default Contact;