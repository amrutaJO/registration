// src/Report.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const Report = () => {
  const [registrations, setRegistrations] = useState([]);

  // Fetch the registration data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/report');
      setRegistrations(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="report-container">
      <h2>Registration Report</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Nationality</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>ZIP Code</th>
            <th>Occupation</th>
            <th>Marital Status</th>
            <th>Language</th>
            <th>Education</th>
            <th>Highest Qualification</th>
            <th>Skills</th>
            <th>Interests</th>
            <th>Preferred Contact</th>
            <th>Social Media Links</th>
            <th>Emergency Contact Name</th>
            <th>Emergency Contact Phone</th>
            <th>Health Condition</th>
            <th>Allergies</th>
            <th>Dietary Restrictions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td>{registration.name}</td>
              <td>{registration.email}</td>
              <td>{registration.phone}</td>
              <td>{registration.address}</td>
              <td>{registration.gender}</td>
              <td>{registration.dob}</td>
              <td>{registration.nationality}</td>
              <td>{registration.country}</td>
              <td>{registration.state}</td>
              <td>{registration.city}</td>
              <td>{registration.zip}</td>
              <td>{registration.occupation}</td>
              <td>{registration.maritalStatus}</td>
              <td>{registration.language}</td>
              <td>{registration.education}</td>
              <td>{registration.highestQualification}</td>
              <td>{registration.skills}</td>
              <td>{registration.interests}</td>
              <td>{registration.preferredContact}</td>
              <td>{registration.socialMediaLinks}</td>
              <td>{registration.emergencyContactName}</td>
              <td>{registration.emergencyContactPhone}</td>
              <td>{registration.healthCondition}</td>
              <td>{registration.allergies}</td>
              <td>{registration.dietaryRestrictions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
