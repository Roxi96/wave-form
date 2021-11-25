

function App() {
  return (
    <div className="container">
      <h1>Please Log in</h1>
      <form>
        <div className="form-control">
          <input type="text" required></input>
          <label>Email</label>
        </div>
        <div className="form-control">
          <input type="password" required></input>
          <label>Password</label>
        </div>

        <button className="btn">Login</button>
        <p className="text">Dont have an account?<a href="#">Register</a></p>

      </form>
    </div>
  );
}

export default App;
