import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './ViewServiceMember.css';
import SearchComponent from '../SearchComponent';
import Home from '../Home';
const URL = process.env.REACT_APP_SERVER_URL;
function ViewServiceMember() {
  const [SMlist, setSMlist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedContact, setEditedContact] = useState('');
  const [editedShift, setEditedShift] = useState('');
  const [editedVDN, setEditedVDN] = useState('');
  const [editedVDT, setEditedVDT] = useState('');
  const [editedDate, setEditedDate] = useState('');

  useEffect(() => {
    Axios.get(`${URL}/read`)
      .then((response) => {
        setSMlist(response.data);
      })
      .catch((error) => {
        console.error('Error fetching service members:', error);
      });
  }, []);

  const deleteMember = (SMnumber) => {
    Axios.delete(`${URL}/delete/${SMnumber}`)
      .then((response) => {
        console.log('Service member deleted successfully:', response.data);
        const updatedList = SMlist.filter((member) => member.ID !== SMnumber);
        console.log('Updated list after deletion:', updatedList);
        setSMlist(updatedList);
        setSearchResults(updatedList);
      })
      .catch((error) => {
        console.error('Error deleting service member:', error);
      });
  };

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const startEdit = (SMnumber,member) => {
    setEditingMember(SMnumber);
    setEditedName(member.Name);
    setEditedContact(member.Contact);
    setEditedShift(member.Shift);
    setEditedDate(member.date);
    setEditedVDN(member.VDN);
    setEditedVDT(member.VDT);
  };

  const saveEdit = (SMnumber) => {
    const editedData = {
      Name: editedName,
      Contact: editedContact,
      Shift: editedShift,
      date: editedDate,
      VDT: editedVDT,
      VDN:editedVDN
    }
    console.log(editedData)
    Axios.put(`${URL}/update/${SMnumber}`,editedData)
      .then((response) => {
        console.log(editedData)
        console.log('Service member updated successfully:', response.data);
        const updatedList = SMlist.map((member) =>
          member.ID === SMnumber ? { ...member, ...editedData } : member
        );
        console.log('Updated list after edit:', updatedList);
        setSMlist(updatedList);
        setSearchResults(updatedList);
        setEditingMember(null);
      })
      .catch((error) => {
        console.error('Error updating service member:', error);
      });
  };

  return (
    <div>
      <Home></Home>
      <SearchComponent data={SMlist} searchKey="ID" setSearchResults={handleSearch} />
      <table className="table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Service Number</th>
            <th>Contact Number</th>
            <th>Shift</th>
            <th>Verification Document Type</th>
            <th>Verification Document Number</th>
            <th>Service Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((val) => (
            <tr key={val.ID}>
              <td>
                {editingMember === val.ID ? (
                  <input
                    type="text"
                    defaultValue={val.Name}
                    onChange={(e)=> setEditedName(e.target.value)}
                  />
                ) : (
                  val.Name
                )}
              </td>
              <td>{val.ID}</td>
              <td>
                {editingMember === val.ID ? (
                  <input
                    type="text"
                    defaultValue={val.Contact}
                    onChange={(e)=> setEditedContact(e.target.value)}
                  />
                ) : (
                  val.Contact
                )}
              </td>
              <td>
                {editingMember === val.ID ? (
                  <input
                    type="text"
                    defaultValue={val.Shift}
                    onChange={(e)=> setEditedShift(e.target.value)}
                  />
                ) : (
                  val.Shift
                )}
              </td>
              <td>
                {editingMember === val.ID ? (
                  <input
                    type="text"
                    defaultValue={val.VDT}
                    onChange={(e)=> setEditedVDT(e.target.value)}
                  />
                ) : (
                  val.VDT
                )}
              </td>
              <td>
                {editingMember === val.ID ? (
                  <input
                    type="text"
                    defaultValue={val.VDN}
                    onChange={(e)=> setEditedVDN(e.target.value)}
                  />
                ) : (
                  val.VDN
                )}
              </td>
              <td>
                {editingMember === val.ID ? (
                  <input
                    type="text"
                    defaultValue={val.date}
                    onChange={(e)=> setEditedDate(e.target.value)}
                  />
                ) : (
                  val.date
                )}
              </td>
              <td>
                {editingMember === val.ID ? (
                  <button onClick={() => saveEdit(val.ID)}>Save</button>
                ) : (
                  <button onClick={() => startEdit(val.ID,val)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteMember(val.ID)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default ViewServiceMember;
