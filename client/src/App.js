import React, {useCallback, useEffect, useState} from 'react';

function App() {

  const API_KEY = "4c61b270f69a9186e3fb5ed85b49925b";
  const API_URL = "api.openweathermap.org/data/2.5/weather?q=";

  const [location, setLocation] = useState('');

  const locationHandler = (event) => {
    setLocation(event.target.value)
    console.log(location);
  }

  const submitHandler = (event) => {
    event.preventDefault();

  } 

  return (
    <div>
      <form>
        <input value={location} onChange={locationHandler}></input>
        <button type="submit" onClick={submitHandler}>submit</button>
      </form>
    </div>

  );
}

export default App;
