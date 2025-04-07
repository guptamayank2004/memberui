import React, { useState } from 'react';

const MemberRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/memberapp/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Member registered successfully!');
        setFormData({ name: '', email: '', phoneNumber: '' });
      } else {
        alert('Failed to register member.' + response.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the member.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Member</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default MemberRegistrationForm;