import React, {Component} from'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Home extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen: false
        }
    }

    openModalHandler =() => {
        this.setState({modalIsOpen : true})
    }

    onRequestCloseHandler = () => {
        this.setState({modalIsOpen : false})
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
                <Modal ariaHideApp = {false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                onRequestClose={this.onRequestCloseHandler}></Modal>
            </div>
        )
    }
}

export default Home;