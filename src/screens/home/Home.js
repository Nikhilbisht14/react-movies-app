import React, {Component} from'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import geners from '../../common/genres'
import artists from '../../common/artists';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
 });

 class Home extends Component {

    constructor(){
        super();
        this.state = {
            movieName : "",
            geners: [],
            artists: []

        }
    }


    movieNameChangeHnadler = (event) => {
        this.setState({movieName: event.target.value})
    }

    genreSelectHandler = (event) => {
        this.setState({geners: event.target.value})
    }

    artistSelectHandler = (event) => {
        this.setState({artists: event.target.value})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}> 
                    {
                        moviesData.map(movie => (
                            <GridListTile key= {movie.id}>
                                <img className="movie-poster" src={movie.poster_url} alt={movie.title}></img>
                                <GridListTileBar title={movie.title}></GridListTileBar>
                            </GridListTile>
                        ))
                    }
                </GridList>

                <div className="flex-container">
                    <div className="left">
                        <GridList ellHeight={350} cols={4} className={classes.gridListMain}>
                            {
                                moviesData.map(movie => (
                                        <GridListTile className="released-movie-grid-item" key={"grid" + movie.id}>
                                                <img src={movie.poster_url} className="movie-poster" alt={movie.title}></img>
                                                <GridListTileBar title={movie.title} subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}></GridListTileBar>
                                        </GridListTile>
                                    ))
                            }
                        </GridList>
                    </div>
                    <div className='right'>
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color='textSecondary'>
                                        FIND MOVIE BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='movieName'>Movie Name</InputLabel>
                                    <Input id='movieName' onChange={this.movieNameChangeHnadler}></Input>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='select-multiple-checkbox'>Genre</InputLabel>
                                    <Select 
                                    multiple
                                    input ={<Input id="select-multiple-checkbox>"/>}
                                    renderValue={selected => selected.join(',')}
                                    value = {this.state.geners} 
                                    onChange ={this.genreSelectHandler}>
                                        <MenuItem vlaue = "0">
                                            None
                                        </MenuItem>
                                        {
                                            geners.map(genre => (
                                                <MenuItem id={genre.id} value = {genre.name}>
                                                    <Checkbox checked={this.state.geners.indexOf(genre.name) > -1}></Checkbox>
                                                    <ListItemText primary = {genre.name}></ListItemText>
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='select-multiple-checkbox'>Artist</InputLabel>
                                    <Select 
                                    multiple
                                    input ={<Input id="select-multiple-checkbox>"/>}
                                    renderValue={selected => selected.join(',')}
                                    value = {this.state.artists} 
                                    onChange ={this.artistSelectHandler}>
                                        <MenuItem vlaue = "0">
                                            None
                                        </MenuItem>
                                        {
                                            artists.map(artist => (
                                                <MenuItem id={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                    <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1}></Checkbox>
                                                    <ListItemText primary = {artist.first_name + " " + artist.last_name}></ListItemText>
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                    id = "releasedDateStart"
                                    label = "Release Date Start"
                                    type='date'
                                    defaultValue=""
                                    InputLabelProps={{shrink: true}}>
                                    </TextField>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                    id = "releasedDateEnd"
                                    label = "Release Date End"
                                    type='date'
                                    defaultValue=""
                                    InputLabelProps={{shrink: true}}>
                                    </TextField>
                                </FormControl>
                            </CardContent>
                        </Card> 
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);