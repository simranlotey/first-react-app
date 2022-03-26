import React from "react";
import { data } from "../data";
import { v4 as uuidv4 } from "uuid";


function Mobile() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {data.map(data =>
            <div key={uuidv4()} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card shadow-lg">
                <img className="card-img-top" src={data.imgSrc} alt="Mobile" />
                <div className="card-body">
                  <h3 className="text-danger">{data.price}</h3>
                  <h4 className="card-title">{data.mName}</h4>
                  <p className="card-text">{data.detail}</p>
                  <div className="text-center">
                    <a href="/" className="btn btn-success">{data.btn1}</a><br />
                    <a href="/" className="btn btn-success mt-2">{data.btn2}</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mobile;
