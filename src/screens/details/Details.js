import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';
import Home from '../../screens/home/Home';
import ReactDom from 'react-dom';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Grid } from '@material-ui/core';
import artists from '../../common/artists';


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

    backToHomeHandler = () => 
    {
        ReactDom.render(<Home></Home>, document.getElementById('root'))
    }

    artistClickHandler = (wikiUrl) => {
        window.location = wikiUrl;
    }

    render() {
        let movie = this.state.movie;

        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }

        console.log("Render method")
        return (
            <div className="details">
                <Header></Header>
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>
                        &#60; Back to Home
                    </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title}></img>
                    </div>
                    <div className="middleDetails">
                        <div><Typography variant="headline" component="h2">{movie.title}</Typography></div><br />
                        <div>
                            <Typography><span className="bold">Genres: </span>{movie.genres.join(", ")}</Typography>
                        </div>

                        <div>
                            <Typography><span className="bold">Duration: </span>{movie.duration}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date: </span>{new Date(movie.release_date).toDateString()}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Rating: </span>{movie.critics_rating}</Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot: </span><a href={movie.wiki_url}>(Wiki Link)</a>{movie.storyline}</Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer: </span></Typography>
                            <YouTube videoId={movie.trailer_url.split("?v=")[1]}
                            opts={opts}
                            onReady={this._onReady}></YouTube>
                        </div>
                    </div>
                    <div className="rightDetails">
                    <div className="bold marginBottom16 marginTop16">
                            <Typography>
                                <span className="bold">Artists:</span>
                            </Typography>
                            <div className="paddingRight">
                                <GridList cellHeight={160} cols={2}> 
                                    {
                                        movie.artists != null && movie.artists.map(artist => (
                                            <GridListTile className="gridTile" id={artists.id} onClick={() => this.artistClickHandler(artist.wiki_url)}>
                                                <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name}></img>
                                                <GridListTileBar title={artist.first_name + " " + artist.last_name}></GridListTileBar>
                                            </GridListTile>                
                                        ))
                                    }
                                </GridList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;