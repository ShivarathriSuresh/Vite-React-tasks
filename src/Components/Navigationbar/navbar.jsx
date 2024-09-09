import { Link, NavLink } from "react-router-dom"


export const NavBarComponent=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
    <li className="nav-item">
        <NavLink to={"/register"} className="links">Registration</NavLink>
      </li>
    <li className="nav-item">
        <NavLink to={"/login"} className="links">Login</NavLink>
      </li>
      <li className="nav-item">
       <NavLink to={"/Home"} className="links">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/Categories"} className="links">Categories</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/About"}  className="links">About</NavLink>
      </li>
       
      
    </ul>
  </div>
</nav>

        </>
    )
}