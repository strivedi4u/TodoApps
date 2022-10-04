import React, { useState } from 'react';
import swal from 'sweetalert';
import './css/add.css';
function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Pending");
  const [author, setAuthor] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/task', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
        author: author,
      }),
    })
      .then((res) => {

        setTitle("");
        setDescription("");
        setAuthor("");
        setTag("Pending");
        swal("Good job!", "Your task is successfully stored!", "success");
      })
      .catch((err) => alert("Details Upload Error"));
  };


  return (
    <>
      <div className="signup-form">
        <form>
          <h2>Add Task</h2>
          <p>Please fill in this form to create a Task!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user"></i></span>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" name="title" placeholder="Enter title here!" required="required" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
              <input type="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" name="description" placeholder="Enter description here!" required="required" />
            </div>
          </div>
          <input type="hidden" value="Pending" className="form-control" name="tag" placeholder="Tag" required="required" />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
                <i className="fa fa-check"></i>
              </span>
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" name="author" placeholder="Enter author name here!" required="required" />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Add Task</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
