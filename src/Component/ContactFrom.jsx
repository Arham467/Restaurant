import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here, e.g., sending data to a backend or an API
  };

  return (
    <div className="w-[650px] flex border-[#737865] shadow rounded-3xl justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-9 pt-6 pb-8 mb-4 w-full">
        <div className="flex gap-6">
          <div className="mb-4 w-[320px]">
            <label className="block text-prh2 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded-full w-full py-3 px-3 text-[#737865] leading-tight focus:outline-none focus:shadow-outline font-serif"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 w-[330px]">
            <label className="block text-prh2 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded-full w-full py-3 px-3 text-[#737865] leading-tight focus:outline-none focus:shadow-outline font-serif"
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-prh2 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="appearance-none border rounded-full w-full py-3 px-3 text-[#737865] leading-tight focus:outline-none focus:shadow-outline font-serif"
            id="subject"
            name="subject"
            type="text"
            placeholder="Write a subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-prh2 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-serif"
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="w-full bg-btn border border-btn hover:text-black font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline font-serif hover:bg-transparent text-white transition duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
