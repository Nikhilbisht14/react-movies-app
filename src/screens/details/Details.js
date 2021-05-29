import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';


class Details extends Component {
    constructor() {
        console.log("Contructor method")
        super();
        this.state = {
            movie: {}
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log("Mount method")
    }

    render() {
        let movie = this.state.movie;
        console.log("Render method")
        return (
            <div className="details">
                <Header></Header>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title}></img>
                    </div>
                    <div className="middleDetails">
                        <div><Typography variant="headline" component="h2">{movie.title}</Typography></div>
                        <div>
                            <Typography><span className="bold">Genre: </span>{movie.genres.join(", ")}</Typography>
                        </div>
                    </div>
                    <div className="rightDetails">

                    </div>
                </div>
            </div>
        )
    }
}

export default Details;