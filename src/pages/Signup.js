import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;