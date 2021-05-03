
import React, { useState } from 'react';
import API from "../utils/API";

const AllBook = ({ data }) => {  
  const [save, setSave] = useState();  
  const handleBookSave = () => {    
    const Book = {
      title: data.title,
      author: data.authors[0],
      description: data.description,
      imageurl: data.image,
      link: data.link
    }
    
    const check = API.saveBook(Book);    
    if (check) {
      setSave("Saved")
    }
  }
  return (
    
    <div className="container">
      <div className="container" style={{ border: "0.3px solid black", marginTop: "10px", marginBottom: "10px", backgroundColor: "#527ffa" }}>
        <div className="row">
          <div className="col-lg-12">
            <label id="alert" style={{ display: "block", textAlign: "center", fontSize: "30px", backgroundColor: "lightgreen", color: "red" }}>{save}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11">
            <label style={{ fontSize: "40px", fontWeight: 'bold' }}>{data.title}</label>
          </div>
          <div className="col-lg-1">
            <button className="btn btn success" data-toggle="modal" data-target="#exampleModal" onClick={handleBookSave} style={{ backgroundColor: "#527ffa", marginTop: "13px" }}><i className="fa fa-upload"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={data.image} />
          </div>
          <div className="col-lg-10">
            <div className="card" style={{ marginBottom: "10px" }}>
              <div className="card-body">
                <h4 className="card-title"><span style={{ fontWeight: "bold" }}>Author:</span> {data.authors}</h4>
                <p className="card-text">{data.description}</p>
                <a href={data.link} target="_blank">view</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//export the AllBook
export default AllBook;