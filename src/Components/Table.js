import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddata } from "../Redux/feature/formSlice";
import "./style/form.css";

function Table() {
  
  var data = useSelector((state) => state.formdata.formarray);
  const dispatch =  useDispatch()
  
  useEffect(() => {
    dispatch(adddata (JSON.parse(localStorage.getItem("formdata"))))
  },[]);


 

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          { data?.map((item, index) => (
            <tr key={index}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
