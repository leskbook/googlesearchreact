import React from 'react';
import API from "../utils/API";

const SavedBooks = ({ data }) => {
        const handleBookDelete = () => {        
        const check = API.deleteBook(data.title);
        if (check) {
            document.getElementById("alert").style.display = "block";
            window.location.href = "/save";

        }
    }
    return (       
        <div>
            <div className="container" style={{ border: "1px solid black", marginTop: "10px", marginBottom: "10px", backgroundColor: "#527ffa" }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="alert" style={{ display: "none", textAlign: "center", fontSize: "20px", backgroundColor: "lightgreen", color: "red" }}>Successfully Deleted</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-11">
                        <label style={{ fontSize: "40px", fontWeight: 'bold' }}>{data.title}</label>
                    </div>
                    <div className="col-lg-1">
                        <button className="btn btn success" onClick={handleBookDelete} style={{ backgroundColor: "yellow", marginTop: "13px" }}><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <img src={data.imageurl} />
                    </div>
                    <div className="col-lg-10">
                        <div class="card" style={{ marginBottom: "10px" }}>
                            <div class="card-body">
                                <h4 class="card-title"><span style={{ fontWeight: "bold" }}>Author:</span> {data.author}</h4>
                                <p class="card-text">{data.description}</p>
                                <a href={data.link} target="_blank">view</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
//export the SavedBooks
export default SavedBooks;