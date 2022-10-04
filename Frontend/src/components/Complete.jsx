import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/table.css';
function Complete() {
    const [data, getData] = useState([])
    var URL = 'http://localhost:5000/api/task/Complete';
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
            .then((response) => {
                console.log(response);
                getData(response);
            })
    }

    const deleteData = (name) => {
        var  URL = 'http://localhost:5000/api/task/' + name;
        axios.delete(URL).then((res)=>{
            console.log(res.data);
            window.location.reload(false);
        }).catch(err=>{
            console.log(err.message)
        })
       };

    
      const updatePending = async (id, status) => {
        var  URL = 'http://localhost:5000/api/task/' + id;
        try {
          let res = await fetch(URL, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                tag: "Pending",
            }),
          });
          if (res.status === 200) {
            window.location.reload(false);
            console.log("Details updated successfully");
          } else {
            console.log(res.body);
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <>
    <div className="container">
    <div className="table-responsive">
        <div className="table-wrapper">			
            <div className="table-title">
                <div className="row">
                    <div className="col-xs-4">
											
					</div>
					<div className="col-xs-4">
						<h2 style={{color: "black"}} className="text-center">Complete Task <b>Details</b></h2>
					</div>
                    <div className="col-xs-4">                       
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title <i className="fa fa-sort"></i></th>
                        <th>Description</th>
                        <th>Author <i className="fa fa-sort"></i></th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.author}</td>
                        <td>{item.tag}</td>
                        <td>{item.date}</td>
                        <td>
                        &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"green"}}  onClick={() => {  updatePending(item._id , item.tag); }} className="edit" title="Pending" data-toggle="tooltip"><i className="material-icons">pending_actions</i></span>
                        &nbsp; &nbsp; &nbsp;<span  style={{cursor: "pointer", color:"red"}} onClick={() => {  deleteData(item._id); }} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></span>
                       </td>
                    </tr> 
                        ))} 
                </tbody>
                
            </table>
           
        </div>
    </div>        
</div>     
    </>
  );
}

export default Complete;
