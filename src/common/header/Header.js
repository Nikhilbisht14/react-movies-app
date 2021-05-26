import React, {Component} from'react';
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
        <Typography component="div" style={{padding:0}}>
            {props.children}
        </Typography>
    );
}

class Home extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen: false,
            value: 0
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
                </header>
                <Modal 
                ariaHideApp = {false} 
                isOpen={this.state.modalIsOpen} 
                contentLabel="Login"
                onRequestClose={this.onRequestCloseHandler} 
                style={customeStyle}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text"></Input>
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password"></Input>
                        </FormControl>
                    </TabContainer>
                </Modal>
            </div>
        )
    }
}

export default Home;