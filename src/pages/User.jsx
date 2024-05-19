import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({setId}) => {
  const [user, setuser] = useState([])
  const [deleteData,setdeleteData]=useState([])
  const nav=useNavigate()
  useEffect(() => {
    fetchdata();
  }, [deleteData]);

  const fetchdata = async () => {
    await axios
      .get("https://6645d235b8925626f893552f.mockapi.io/api/User")
      .then((res) => setuser(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit=(id)=>{
    setId(id)
    nav(`/edit/${id}`)
  }
  const handleDelete=async(id)=>{
await axios.delete(`https://6645d235b8925626f893552f.mockapi.io/api/User/${id}`)
.then((res) => setdeleteData(res.data))
.catch((error) => console.log(error));
  }
    return (
        <div>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">profile</th>
      <th scope='col'>qualification</th>
      <th scope="col">city</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
  {user.map((element, index)=> {
return(
  
     <tr  key={index}>
      <th scope="row">{element.id}</th>
      <td >{element.user_name}</td>
      <td>{element.user_profile}</td>
      <td>{element.user_qualification}</td>
      <td>{element.user_city}</td>
      <td>{element.user_address}</td>
      <td><button className='btn btn-danger' onClick={()=>{handleEdit(element.id)}}>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=>{handleDelete(element.id)}}>Delete</button></td>
    </tr>
   
)
  })}
  
  </tbody>
</table>
<button className='btn btn-danger' onClick={()=>{nav('/create')}}>Create</button>
        </div>
    );
};

export default User;