import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllReservationsApi } from '../redux/reservationsSlice';
import Reservation from './Reservation';
import './displayReservations.css';

const DisplayReservations = () => {
  const dispatch = useDispatch();
  const apiError = useSelector((state) => state.reservations.error);
  const apiData = useSelector((state) => state.reservations.reservations);
  const apiStatus = useSelector((state) => state.reservations.status);
  const user = useSelector((store) => store.users.current_user);
  const userId = user.id;

  const history = useNavigate();

  const handleBackToMain = () => {
    // Navigate to http://localhost:3001/add_reservation.
    setTimeout(() => history('/add-reservation'), 1000);
  };

  useEffect(() => {
    dispatch(getAllReservationsApi(userId));
  }, [dispatch, userId]);

  return (
    <div className="reservation-list-container">
      {apiStatus === 'loading' && <p>Loading...</p>}

      {apiData.map((reservation) => (
        <Reservation key={reservation.id} reservation={reservation} />
      ))}

      {apiStatus === 'failed' && (
        <p className="error-message">
          Error:
          {apiError}
        </p>
      )}

      <button type="button" className="back-button" onClick={handleBackToMain}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
        Back to Main
      </button>
    </div>
  );
};

export default DisplayReservations;
