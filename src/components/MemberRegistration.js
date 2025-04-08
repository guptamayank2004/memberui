import React, { useState, useEffect } from 'react';
import './../css/screen.css'; // Importing screen.css

const MemberRegistration = () => {
  const [newMember, setNewMember] = useState({ name: '', email: '', phoneNumber: '' });
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewMember({ ...newMember, [id]: value });
  };

  const registerMember = () => {
    // Simulate registration logic
    if (newMember.name && newMember.email && newMember.phoneNumber) {
      setMembers([...members, { ...newMember, id: members.length + 1 }]);
      setMessages({ type: 'success', text: 'Member registered successfully!' });
      setNewMember({ name: '', email: '', phoneNumber: '' });
    } else {
      setMessages({ type: 'error', text: 'All fields are required!' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMember.name && newMember.email && newMember.phoneNumber)
    {
      try {
        const response = await fetch('http://localhost:8080/memberapp/members', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMember),
        });
        if (response.ok) {
          alert('Member registered successfully!');
          setNewMember({ name: '', email: '', phoneNumber: '' });
          setMembers([...members, { ...newMember, id: members.length + 1 }]);
          setMessages({ type: 'success', text: 'Member registered successfully!' });
        } else {
          alert('Failed to register member.' + response.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while registering the member.');
      }
    }
    else {
      setMessages({ type: 'error', text: 'All fields are required!' });
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:8080/memberapp/members');
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        } else {
          alert('Failed to fetch members.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching members.');
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h1>Welcome to JBoss!</h1>
      <div>
        <p>You have successfully deployed a Java EE Enterprise Application.</p>
      </div>

      <form id="reg">
        <h2>Member Registration</h2>
        <p>Enforces annotation-based constraints defined on the model class.</p>
        <div className="panel-grid">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={newMember.name}
            onChange={handleInputChange}
          />
          {messages.type === 'error' && !newMember.name && (
            <span className="invalid">Name is required</span>
          )}
          <p></p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={newMember.email}
            onChange={handleInputChange}
          />
          {messages.type === 'error' && !newMember.email && (
            <span className="invalid">Email is required</span>
          )}
          <p></p>
          <label htmlFor="phoneNumber">Phone #:</label>
          <input
            type="text"
            id="phoneNumber"
            value={newMember.phoneNumber}
            onChange={handleInputChange}
          />
          {messages.type === 'error' && !newMember.phoneNumber && (
            <span className="invalid">Phone number is required</span>
          )}
        </div>
        <p></p>
        <div className="panel-grid">
          <button type="button" onClick={handleSubmit} className="register">
            Register
          </button>
          {messages.text && (
            <div className={`messages ${messages.type}`}>
              {messages.text}
            </div>
          )}
        </div>
      </form>

      <h2>Members</h2>
      {members.length === 0 ? (
        <em>No registered members.</em>
      ) : (
        <table className="simpletablestyle">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone #</th>
              <th>REST URL</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phoneNumber}</td>
                <td>
                  <a href={`http://localhost:8080/memberapp/members/${member.id}`}>
                    /memberapp/members/{member.id}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">
                REST URL for all members:{' '}
                <a href="http://localhost:8080/memberapp/members">/memberapp/members</a>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default MemberRegistration;