import Axios from 'axios';
import { useState } from 'react';
const URL = process.env.REACT_APP_SERVER_URL;

function DeleteServiceMember() {
  const [SMnumber, setSMnumber] = useState('');

  const deleteSM = (SMnumber) => {
    Axios.delete(`${URL}/delete/${SMnumber}`)
      .then((response) => {
        console.log('Service member deleted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting service member:', error);
      });
  };

  return (
    <div className="container">
      <label className="label">Enter the service member ID:</label>
      <input
        className="input"
        type="number"
        value={SMnumber}
        onChange={(e) => setSMnumber(e.target.value)}
      />
      <button className="button" onClick={() => deleteSM(SMnumber)}>
        Delete
      </button>
    </div>
  );
}

export default DeleteServiceMember;
