import logo from './logo.svg';
import './App.css';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [student, setStudent] = useState('Iain');
  const [address, setAddress] = useState('Govan');

  const handleClick = (event) => {
    const identity = {student, address}
    console.log(identity)
    fetch("http://localhost:8080/employee/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(student),
    }).then(() => {
    console.log("New student Added")
  });
}

  return (
    <div className="App">
      <div>
        <div>Hello</div>
        <div className='form'>
          <TextField
            value={student}
            id="outlined-name"
            label="Name"
            onChange={(event) => setStudent(event.target.value)}
          />
          <TextField
            value={address}
            id="outlined-uncontrolled"
            label="Address"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <Button label="Button" variant="contained" onClick={handleClick} >Click me</Button>
      </div>
      {student}
      {address}
    </div>
  );
}

export default App;
