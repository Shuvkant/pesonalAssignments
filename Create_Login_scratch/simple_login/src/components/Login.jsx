import React from "react";
const Login = () => {

  return (
    <>
      <div>
        <div >
          Login Dashboard
        </div>
        <div className="flex flex-col ">
          <div>

            <label for="first-name">Enter email: </label><input id="first-name" name="first-name" type="text" required placeholder="shuvkantphanait@gmail.com" />
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  )
}

export default Login
