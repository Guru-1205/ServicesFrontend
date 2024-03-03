import { useState } from 'react';
import './AddServiceMember.css';
import Axios from 'axios';
import Home from '../Home.js';
const URL = process.env.REACT_APP_SERVER_URL;

function AddServiceMember() {
  const [SMname, setSMname] = useState('');
  const [SMnumber, setSMnumber] = useState('');
  const [SMcontact, setSMcontact] = useState('');
  const [SMshift, setSMshift] = useState('1');
  const [SMVDN, setSMVDN] = useState('');
  const [SMVDT, setSMVDT] = useState('');
    const [SMdate, setSMdate] = useState('');
    const submit = () => {
        const SMdata = {
            SMname: SMname,
            SMnumber: SMnumber,
            SMcontact: SMcontact,
            SMshift: SMshift,
            SMVDN: SMVDN,
            SMVDT: SMVDT,
            SMdate: SMdate
        };
        Axios.post(`${URL}/add`, SMdata).then(response => {
            console.log('data sent success', response.data);
        }).catch(error => {
            console.error('error', error);
        });
    }
  return (
    <div>
      <Home></Home>
    <div className="container">
      <h1 className="heading">Add Service Member</h1>
      <div className="form-group">
        <label className="label">Service Member Name:</label>
        <input className="input" type="text" onChange={(e) => setSMname(e.target.value)} value={SMname} />
      </div>
      <div className="form-group">
        <label className="label">Service Member Number:</label>
        <input className="input" type="number" onChange={(e) => setSMnumber(e.target.value)} value={SMnumber} />
      </div>
      <div className="form-group">
        <label className="label">Contact Number:</label>
        <input className="input" type="number" onChange={(e) => setSMcontact(e.target.value)} value={SMcontact} />
      </div>
      <div className="form-group">
        <label className="label">Verification Document Type:</label>
        <select className="select" onChange={(e) => setSMVDT(e.target.value)}>
          <option value="Aadhar card">Aadhar card</option>
          <option value="Voter ID">Voter ID</option>
          <option value="Driving License">Driving License</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">Verification Document Number:</label>
        <input className="input" type="text" onChange={(e) => setSMVDN(e.target.value)} value={SMVDN} />
      </div>
      <div className="form-group">
        <label className="label">Service Date:</label>
        <select className="select" onChange={(e) => setSMdate(e.target.value)}>
          <option value="2023-04-02">2 April 2023</option>
          <option value="2023-04-03">3 April 2023</option>
          <option value="2023-04-04">4 April 2023</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">Service Shift:</label>
        <label className="radio-label">
          <input
            className="radio-input"
            type="radio"
            value="1"
            name="serviceShift"
            checked={SMshift === '1'}
            onChange={(e) => setSMshift(e.target.value)}
          />
          1
        </label>
        <label className="radio-label">
          <input
            className="radio-input"
            type="radio"
            value="2"
              name="serviceShift"
            checked={SMshift === '2'}
            onChange={(e) => setSMshift(e.target.value)}
          />
          2
        </label>
          </div>
          {SMdate}{SMVDT}
          <div>
              <button onClick={submit}>Add</button>
          </div>
      </div>
      </div>
  );
}

export default AddServiceMember;
