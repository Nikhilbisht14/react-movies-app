import React, {Component} from'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookShow/BookShow';

const customeStyle = {
    content: {
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%, -50%)'
    }
}

const TabContainer = function(props){
    return (
        <Typography component="div" style={{padding:0, textAlign:'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes =  {
    children: PropTypes.node.isRequired
}

class Home extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,

            username:"",
            usernameRequired:"dispNone",

            loginPassword: "",
            loginPasswordRequired: "dispNone",
            
            firstname: "",
            firstnameRequired: "dispNone",
            
            lastname: "",
            lastnameRequired: "dispNone",
            
            email: "",
            emailRequired: "dispNone",
            
            registerPassword: "",
            registerPasswordRequired: "dispNone",
            
            contact: "",
            contactRequired: "dispNone",
            
        }
    }

    openModalHandler =() => {
        this.setState({modalIsOpen : true})
    }

    onRequestCloseHandler = () => {
        this.setState({modalIsOpen : false})
    }

    tabChangeHandler = (e, value) =>{
        this.setState({value})
    }

    /*----------------------Login Form Validation---------------*/ 
    inputUsernameChangeHandler = (event) =>{
        this.setState({username : event.target.value})
    }

    inputLoginPasswordChangeHandler = (event) =>{
        this.setState({loginPassword : event.target.value})
    }

    loginClickHandler = () =>{
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.loginPassword === "" ? this.setState({loginPasswordRequired: "dispBlock"}) : this.setState({loginPasswordRequired: "dispNone"});
    }

    /*----------------------Register Form Validation---------------*/ 

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.registerPassword === "" ? this.setState({ registerPasswordRequired: "dispBlock" }) : this.setState({ registerPasswordRequired: "dispNone" });
        this.state.contact === "" ? this.setState({ contactRequired: "dispBlock" }) : this.setState({ contactRequired: "dispNone" });
    }

    inputFirstNameChangeHandler = (event) =>{
        this.setState({firstname : event.target.value})
    }

    inputLastNameChangeHandler = (event) =>{
        this.setState({lastname : event.target.value})
    }

    inputEmailChangeHandler = (event) =>{
        this.setState({email : event.target.value})
    }

    inputRegisterPasswordChangeHandler = (event) =>{
        this.setState({registerPassword : event.target.value})
    }

    inputContactChangeHandler = (event) =>{
        this.setState({contact : event.target.value})
    }

    bookshowHandler =() => {
        ReactDOM.render(
            <BookShow></BookShow>,
            document.getElementById('root')
          );
    }


    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className='app-logo' alt='logo'></img>
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                    {
                    this.props.showBookShowButton === "true" ? 
                        <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.bookshowHandler}>BOOK SHOW</Button>
                        </div> : ""
                    }
                </header>
                <Modal 
                ariaHideApp = {false} 
                isOpen={this.state.modalIsOpen} 
                contentLabel="Login"
                onRequestClose={this.onRequestCloseHandler} 
                style={customeStyle}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" loginpassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler}></Input>
                            <FormHelperText className={this.state.loginPasswordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>

                        <Button variant='contained' color='primary' onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>
                    }

                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler}></Input>
                            <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler}></Input>
                            <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                            <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" loginpassword={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler}></Input>
                            <FormHelperText className={this.state.registerPasswordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>
                        <FormControl required>
                            <InputLabel htmlFor="contact">Contact No.</InputLabel>
                            <Input id="contact" type="text" contact={this.state.contact} onChange={this.inputContactChangeHandler}></Input>
                            <FormHelperText className={this.state.contactRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br></br> <br></br>

                        <Button variant='contained' color='primary' onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                    }   
                </Modal>
            </div>
        )
    }
}

export default Home;