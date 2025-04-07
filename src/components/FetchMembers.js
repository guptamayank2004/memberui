import React, { useState, useEffect } from 'react';

const FetchMembers = () => {
  const [members, setMembers] = useState([]);

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
      <h2>Members List</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.email} - {member.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchMembers;