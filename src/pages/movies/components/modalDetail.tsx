import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

function ModalDetailPopularMovie(props: any) {
  const movie = props?.data;

  const formatNumber = (num: number) =>
    new Intl.NumberFormat('en-US').format(num);

  return (
    <Modal show={props.modal} onHide={props.hideModal} size="lg" centered>
      <Modal.Header closeButton className="bg-light">
        <Modal.Title className="fw-bold text-dark fs-3">
          🎬 {movie?.title || 'Movie Detail'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex gap-4">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
              alt={movie?.title}
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                maxHeight: '100%',
              }}
            />
            <div className="w-100">
              <ul className="list-group list-group-flush text-sm">
                <li className="list-group-item">
                  <strong>Release Date:</strong>{' '}
                  {movie?.release_date
                    ? moment(movie.release_date).format('DD MMM YYYY')
                    : '-'}
                </li>
                <li className="list-group-item">
                  <strong>Tagline:</strong> {movie?.tagline || '-'}
                </li>
                <li className="list-group-item">
                  <strong>Genre:</strong>{' '}
                  {Array.isArray(movie?.genres)
                    ? movie.genres.map((g: any) => g?.name).join(', ')
                    : '-'}
                </li>
                <li className="list-group-item">
                  <strong>Rating:</strong>{' '}
                  {movie?.vote_average?.toFixed(1) || '-'} / 10
                </li>
                <li className="list-group-item">
                  <strong>Vote Count:</strong>{' '}
                  {movie?.vote_count ? formatNumber(movie.vote_count) : '-'}
                </li>
                <li className="list-group-item">
                  <strong>Runtime:</strong> {movie?.runtime || '-'} min
                </li>
                <li className="list-group-item">
                  <strong>Language:</strong>{' '}
                  {movie?.original_language?.toUpperCase() || '-'}
                </li>
                <li className="list-group-item">
                  <strong>Popularity:</strong>{' '}
                  {movie?.popularity ? Math.round(movie.popularity) : '-'}
                </li>
                <li className="list-group-item">
                  <strong>Status:</strong> {movie?.status || '-'}
                </li>
                <li className="list-group-item">
                  <strong>Revenue:</strong>{' '}
                  {movie?.revenue ? '$' + formatNumber(movie.revenue) : '-'}
                </li>
                <li className="list-group-item">
                  <strong>Production:</strong>{' '}
                  {Array.isArray(movie?.production_companies)
                    ? movie.production_companies
                        .map((p: any) => p?.name)
                        .join(', ')
                    : '-'}
                </li>
              </ul>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h5 className="fw-bold mb-2">📝 Overview</h5>
            <p className="text-muted">
              {movie?.overview || 'No overview available.'}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalDetailPopularMovie;
