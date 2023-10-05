import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='menu'>
          <h1>Welcome!</h1>
          <p>Sign up for Adventure</p>
          <div className='campos'>
            <input className='campo-login' type='text' placeholder='Username'></input>
            <input className='campo-login' type='Password' placeholder='Password'></input>
          </div>
          <div>
            <input type="checkbox" className='marcado'></input>
            <label>Remember my Username</label>
          </div>
          <button>LOGIN</button>
        </div>
      </header>
    </div>
  );
}

export default App;
