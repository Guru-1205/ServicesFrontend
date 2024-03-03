import Axios from 'axios';
import { useState } from 'react';

function DeleteServiceMember() {
  const [SMnumber, setSMnumber] = useState('');

  const deleteSM = (SMnumber) => {
    Axios.delete(`http://localhost:3035/delete/${SMnumber}`)
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
