import React from 'react';
import PropTypes from 'prop-types';

function MovieComponent({id, year, title, summary, poster, rating, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title}></img>
            <div className="movie__data">
                <h3 className="movie__data__title">title: {title}</h3>
                <h5>
                    <span className="movie__data__rating">rating: {rating} </span>
                    <span className="movie__data__year">year: {year}</span>
                </h5>
                <ul className="movie__data__genres">
                    {genres.map((genre, idx)=>{
                        return <li key={idx} className="movie__data__genres__genre">{genre}</li>
                    })}
                </ul>
                <h5 className="movie__data__summary">summary: {summary}</h5>
            </div>
        </div>
    );
}

MovieComponent.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default MovieComponent;