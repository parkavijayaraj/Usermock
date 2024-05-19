import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get("https://6645d235b8925626f893552f.mockapi.io/api/User")
      .then((res) => setuser(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {user.map((element, index) => {
          return (
            <div key={index}>
             
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h1>{element.id}</h1>
                      <h1>{element.user_name}</h1>
                    </div>
                    <img
                      src={element.user_profile}
                      className="card-img-top"
                      alt="profile"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.user_qualification}</h5>
                      <p className="card-text">
                        {element.user_city}<br></br>
                        {element.user_address}
                      </p>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
