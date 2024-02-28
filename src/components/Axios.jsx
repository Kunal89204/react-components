import React, { useState } from 'react';

const MultipleInputsExample = () => {
  // State to manage input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // You can perform further actions here, like sending the data to a server
  };

  return (
    <div>
      <h2>Multiple Inputs Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {/* Button to submit form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleInputsExample;
