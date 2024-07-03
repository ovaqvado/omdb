import "./Movie.scss";

function Movie({ movie }) {
  let { Poster, Title, Year } = movie;

  return (
    <div className="box_movies">
      <div className="movie movie-card">
        <img className="movie__poster" src={movie.Poster} />
        <div className="text">
          <h3 className="name">{movie.Title}</h3>
          <p className="subtitle">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
