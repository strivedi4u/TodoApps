import React from 'react';
import './css/nav.css';
function Nav() {
  return (
    <>
   <nav className="navbar navbar-default navbar-expand-lg navbar-light">
	<div className="navbar-header">
		<a className="navbar-brand" href="/">ToDo<b>App</b></a>  		
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
			<span className="navbar-toggler-icon"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		</button>
	</div>
	<div id="navbarCollapse" className="collapse navbar-collapse">
		<ul className="nav navbar-nav">
			<li><a href="/add">Add Task</a></li>
			<li><a href="/view">View All Tasks</a></li>		
            <li><a href="/complete">View Complete Tasks</a></li>
            <li><a href="/pending">View Pending Tasks</a></li>			
		</ul>	
	</div>
</nav>
    </>
  );
}

export default Nav;
