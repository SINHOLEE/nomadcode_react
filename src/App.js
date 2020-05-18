import React from 'react';
import Axios from 'axios';
import MovieComponent from './Movie';
// import PropTypes from 'prop-types';

class App extends React.Component{
  add = () =>{
    console.log("add");
    this.setState(curr=>({count: curr.count + 1}));
  }
  minus = () =>{
    console.log("minus");
    this.setState(curr=>({count: curr.count - 1}));
    
  }
  constructor(props){
    super(props);
    console.log("i am a constructor");
  }
  
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  }

  getMovies = async () =>{
    const url = "https://yts-proxy.now.sh/list_movies.json?limit=50&sort_by=rating";
    try {
      const {data:{data:{movies}}} = await Axios.get(url);
      this.setState({isLoading: false, movies})

    } catch(err){
      console.error(err)
    }
  }

  componentDidMount(){
    console.log("i am a componentDidMount", this.state);
    // fetch 는 여기서!
    this.getMovies();
    console.log("i am a componentDidMount and change isLoading", this.state);
  }

  componentDidUpdate(){
    console.log("i am a componentDidUpdate");
  
  }

  render(){
    console.log("i am a render", this.state);
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? 
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        : <div className="movies">
          {movies.map(movie=>{
          return <MovieComponent 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              rating={movie.rating} 
              genres={movie.genres}
              />
        }) }
          </div>}
      </section >
    )
  }
}


export default App;
