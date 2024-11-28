// src/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const RegistrationForm = ({ fetchData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    dob: '',
    nationality: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    occupation: '',
    maritalStatus: '',
    language: '',
    education: '',
    highestQualification: '',
    skills: '',
    interests: '',
    preferredContact: '',
    socialMediaLinks: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    healthCondition: '',
    allergies: '',
    dietaryRestrictions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('Registration Successful!');
      fetchData(); // Fetch the updated data after successful registration
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} value={formData.gender} />
        <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} value={formData.dob} />
        <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} value={formData.nationality} />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} value={formData.country} />
        <input type="text" name="state" placeholder="State" onChange={handleChange} value={formData.state} />
        <input type="text" name="city" placeholder="City" onChange={handleChange} value={formData.city} />
        <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} value={formData.zip} />
        <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} value={formData.occupation} />
        <input type="text" name="maritalStatus" placeholder="Marital Status" onChange={handleChange} value={formData.maritalStatus} />
        <input type="text" name="language" placeholder="Language" onChange={handleChange} value={formData.language} />
        <input type="text" name="education" placeholder="Education" onChange={handleChange} value={formData.education} />
        <input type="text" name="highestQualification" placeholder="Highest Qualification" onChange={handleChange} value={formData.highestQualification} />
        <input type="text" name="skills" placeholder="Skills" onChange={handleChange} value={formData.skills} />
        <input type="text" name="interests" placeholder="Interests" onChange={handleChange} value={formData.interests} />
        <input type="text" name="preferredContact" placeholder="Preferred Contact" onChange={handleChange} value={formData.preferredContact} />
        <input type="text" name="socialMediaLinks" placeholder="Social Media Links" onChange={handleChange} value={formData.socialMediaLinks} />
        <input type="text" name="emergencyContactName" placeholder="Emergency Contact Name" onChange={handleChange} value={formData.emergencyContactName} />
        <input type="tel" name="emergencyContactPhone" placeholder="Emergency Contact Phone" onChange={handleChange} value={formData.emergencyContactPhone} />
        <input type="text" name="healthCondition" placeholder="Health Condition" onChange={handleChange} value={formData.healthCondition} />
        <input type="text" name="allergies" placeholder="Allergies" onChange={handleChange} value={formData.allergies} />
        <input type="text" name="dietaryRestrictions" placeholder="Dietary Restrictions" onChange={handleChange} value={formData.dietaryRestrictions} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
