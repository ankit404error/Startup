import{ useState } from 'react';
import PropTypes from 'prop-types';

const AppointmentForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [barber, setBarber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, barber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <select
        value={barber}
        onChange={(e) => setBarber(e.target.value)}
      >
        <option value="">Select Barber</option>
        <option value="Barber 1">Barber 1</option>
        <option value="Barber 2">Barber 2</option>
      </select>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

AppointmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;
