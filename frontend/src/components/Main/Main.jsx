
import axios from "axios";
import { useState, useEffect } from 'react';

const Main = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("/dogs").then((res) => {
      console.log(res);
      // setPets(res.data.data);
    });
  }, []);

  return ( 
    <>
      <h1>Welcome to my test app</h1>
      <h3>Display Dogs</h3>
    </>
   );
}
 
export default Main;