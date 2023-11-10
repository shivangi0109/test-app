import { useState } from 'react';
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const { decodedToken } = useJwt(token);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', { email, password })
      .then((response) => {
        console.log(response);
        const jwtToken = response.data.token;
        setToken(jwtToken);
        navigate("/");
      })
      .catch((error) => console.log(error))
  }

  const fetchDogs = () => {
    axios.get('http://localhost:8080/dogs', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log('Dogs response:', response)
      })
      .catch((error) => console.log(error))
  }

  return ( 
    <>
      <h1>Login</h1>

      { !decodedToken && (
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" 
            />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            class="form-control"
            id="exampleInputPassword1"
          />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      )}

      { decodedToken && (<>
        <h1>Dogs should appear here 🐶</h1>
        <button onClick={fetchDogs}>Fetch dogs!</button>
      </>) }

    </>
   );
}
 
export default Login;