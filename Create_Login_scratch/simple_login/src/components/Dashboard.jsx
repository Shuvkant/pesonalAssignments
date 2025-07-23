import React from "react";
const Dashboard = ({ name }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h4>You have successfully loggedin.</h4>
        Welcome to Dashboard <strong className="font-bold text-red-300 font-serif ">{name || User}</strong>
      </div>
    </>
  )
}

export default Dashboard
