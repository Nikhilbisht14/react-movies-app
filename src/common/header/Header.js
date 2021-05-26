import React, {Component} from'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Home extends Component {
    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className='app-logo' alt='logo'></img>
                    <div className="login-button">
                        <Button variant="contained" color="default">
                            Login
                        </Button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Home;