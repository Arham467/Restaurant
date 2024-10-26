import React, { useState } from 'react';
import table from '../assets/table.jpg'

const BookTablePage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !date || !time || guests < 1) {
            setMessage('Please fill in all the details.');
            return;
        }

        setMessage(`Table booked successfully for ${name} on ${date} at ${time} for ${guests} guest(s)!`);

        setName('');
        setDate('');
        setTime('');
        setGuests(1);
    };

    return (
        <div style={{ background: `url(${table})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }} className="mt-[6vw] w-full h-[750px]  relative">
            <div className="w-full h-full flex justify-center items-center bg-[#0000006a]">
                <div className="w-[450px] p-10 bg-white rounded-lg border-2 absolute transition-opacity opacity-90">
                    <h2 className="text-2xl font-bold text-center mb-6">Book a Table</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block font-medium mb-1" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-btn"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block font-medium mb-1" htmlFor="date">Select Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-btn text-gray-400"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label className="block font-medium mb-1" htmlFor="time">Select Time</label>
                            <input
                                type="time"
                                id="time"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-btn text-gray-400"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        {/* Guests */}
                        <div>
                            <label className="block font-medium mb-1" htmlFor="guests">Number of Guests</label>
                            <input
                                type="number"
                                id="guests"
                                min="1"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-btn text-gray-400"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full mt-4 px-4 py-2 bg-btn text-white font-semibold rounded-full hover:bg-btn-hover"
                            >
                                Book Table
                            </button>
                        </div>
                    </form>

                    {/* Display Message */}
                    {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                </div>
            </div>
        </div>

    );
};

export default BookTablePage;