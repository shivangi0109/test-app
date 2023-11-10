import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', { email, password })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  return ( 
    <>
      <h1>Login</h1>

      { !token && (
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

    </>
   );
}
 
export default Login;