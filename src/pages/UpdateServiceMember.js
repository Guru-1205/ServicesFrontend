import React, { useState } from 'react';
import Axios from 'axios';
import './UpdateServiceMember.css'; // Import your CSS file

function UpdateServiceMember() {
  const [SMid, setSMid] = useState('');
  const [SMname, setSMname] = useState('');
  const [SMnumber, setSMnumber] = useState('');
  const [SMshift, setSMshift] = useState('');
  const [SMdate, setSMdate] = useState('');
  const [SMdocumentType, setSMdocumentType] = useState('');
  const [SMdocumentNumber, setSMdocumentNumber] = useState('');

  const updateSM = () => {
    const data = {
      name: SMname,
      number: SMnumber,
      shift: SMshift,
      date: SMdate,
      documentType: SMdocumentType,
      documentNumber: SMdocumentNumber,
    };

    Axios.put(`http://localhost:3035/update/${SMid}`, data)
      .then((response) => {
        console.log('Service member updated successfully:', response.data);
        // Handle response if needed
      })
      .catch((error) => {
        console.error('Error updating service member:', error);
        // Handle error if needed
      });
  };

  return (
    <div className="container">
      <h2 className="heading">Update Service Member</h2>
      <div className="form-group">
        <label className="label">Service Member ID:</label>
        <input
          type="number"
          className="input"
          value={SMid}
          onChange={(e) => setSMid(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Name:</label>
        <input
          type="text"
          className="input"
          value={SMname}
          onChange={(e) => setSMname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Number:</label>
        <input
          type="text"
          className="input"
          value={SMnumber}
          onChange={(e) => setSMnumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Shift:</label>
        <input
          type="text"
          className="input"
          value={SMshift}
          onChange={(e) => setSMshift(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Date:</label>
        <input
          type="text"
          className="input"
          value={SMdate}
          onChange={(e) => setSMdate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Document Type:</label>
        <input
          type="text"
          className="input"
          value={SMdocumentType}
          onChange={(e) => setSMdocumentType(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Document Number:</label>
        <input
          type="text"
          className="input"
          value={SMdocumentNumber}
          onChange={(e) => setSMdocumentNumber(e.target.value)}
        />
      </div>
      <button className="button" onClick={updateSM}>Update</button>
    </div>
  );
}

export default UpdateServiceMember;
