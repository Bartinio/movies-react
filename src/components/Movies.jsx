import { Movie } from './Movie';
function Movies(props) {
  const { movies } = props;

  return (
    <div className='movies'>
      {movies.map((movie) => (
        <Movie key={Movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export { Movies };
