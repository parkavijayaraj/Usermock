import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
  const [createData, setCreateData] =useState ({
    id: "",
    user_name: "",
    user_qualification: "",
    user_city: "",
    user_address: "",
  });
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData=async()=>{
    await axios
    .get(`https://6645d235b8925626f893552f.mockapi.io/api/User/${id}`)
    .then((res)=>setCreateData(res.data))
    .catch((error)=>console.log(error))
  }
  const handleChange = (e) => {
    //e.target.value
    const { name, value } = e.target; //e.target.name e.target.value
    setCreateData((preData) => ({
      ...preData,
      [name]: value, //product_name:iphone
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://6645d235b8925626f893552f.mockapi.io/api/User/${id}`, createData )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/user");
  };
    return (
        <div className="m-5">
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              User Id:
              <input
                type="text"
                name="user_id"
                value={createData.id}
                onChange={handleChange}
              />
            </label>
          </p>
          <br />
          <br />
          <p>
            <label>
              User Name:
              <input
                type="text"
                name="user_name"
                value={createData.user_name}
                onChange={handleChange}
              />
            </label>
          </p>
  
          <br />
          <br />
          <p>
            <label>
              User Image:
              <input
                type="text"
                name="user_image"
                value={createData.user_profile}
                onChange={handleChange}
              />
            </label>
          </p>
  
          <br />
          <br />
          <p>
            <label>
              Qualification
              <input
                type="text"
                name="qualification"
                value={createData.user_qualification}
                onChange={handleChange}
              />
            </label>
          </p>
  
          <br />
          <br />
          <p>
            <label>
              User City:
              <input
                type="text"
                name="City"
                value={createData.user_city}
                onChange={handleChange}
              />
            </label>
          </p>
          <br />
          <br />
          <p>
            <label>
              User Address:
              <input
                type="text"
                name="Address"
                value={createData.user_address}
                onChange={handleChange}
              />
            </label>
          </p>
          <br />
          <br />
          <p>
            <button className="btn btn-danger " type="submit">
              Update
            </button>
          </p>
        </form>
      </div>
    );
};

export default Create;