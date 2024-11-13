import { useState } from 'react';

const BookAppointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [barber, setBarber] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    console.log('Booking appointment on', date, 'at', time, 'with', barber);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleBooking}>
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
    </div>
  );
};

export default BookAppointment;
