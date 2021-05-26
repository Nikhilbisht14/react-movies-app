import React, {Component} from'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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
                </Modal>
            </div>
        )
    }
}

export default Home;