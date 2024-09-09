import { useNavigate } from "react-router-dom"


export const LoginPage=()=>{

        const homeNavGate= useNavigate()

        const homeHandler=(event)=>{

             event.preventDefault();
             homeNavGate("/Home")
        }

    return(
        <>
        <div className="container mt-3">
        <fieldset>
  <h2><u>Login form :</u></h2>
  <form action="/action_page.php">
    <div className="mb-3 mt-3">
      <label htmlFor="name">UserName</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter UserName"
        name="name"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="mail">E-mail:</label>
      <input
        type="email"
        className="form-control"
        id="mail"
        placeholder="Enter email"
        name="email"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Password:</label>
      <input
        type="password"
        className="form-control"
        id="pwd"
        placeholder="Enter password"
        name="pswd"
      />
    </div>
    <div className="form-check mb-3">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" />{" "}
        Remember me
      </label>
    </div>
    <button onClick={homeHandler} className="sub-btn"> Submit  </button>
  
  </form>
  </fieldset>
</div>

        </>
    )
}