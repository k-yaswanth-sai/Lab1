import { useState } from 'react';
import './App.css';

function App2() {
  const [val, setVal] = useState('');     // username
  const [p, setP] = useState('');         // password
  const [value, setValue] = useState(''); // "valid" or "not valid"

  // Logout handler
  function logout() {
    setVal('');
    setP('');
    setValue(''); // reset login status
  }

  // Login handler
  function login(e) {
    e.preventDefault();

    if (val === 'admn' && p === 'admn9684') {
      setValue('valid');
    } else {
      setValue('not valid');
    }
  }
function profile(){
  return (
    <div>
      <p>name :admn</p>
      <br/>
      <p>id:896</p>
    </div>
  )
  
}
  // Conditional rendering based on value
  if (value === 'valid') {
    return (
      <div>
        <h1>Web page</h1>
        <p> login details</p>
        
        <button onClick={profile}>Profile</button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <label>Username </label>
        <input
          type="text"
          placeholder="Enter username"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          placeholder="Enter password"
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
        <p>{value}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App2;
