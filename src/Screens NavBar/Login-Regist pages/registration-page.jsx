import { useNavigate } from "react-router-dom"


export const RegistrationComponent=()=>{

     const navLogin = useNavigate()

     const pageHandler=(event)=>{

           event.preventDefault();
          navLogin("/")
     }

    return(
        <>
         <form action="/action_page.php">
         <fieldset>
  <div className="container">
    <h1><u>Register :</u></h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="name">
      <b>UserName : </b>
    </label>
    <input
      type="text"
      placeholder="Enter UserName"
      name="name"
      id="name"
      required=""
    /><br/><br/>
    <label htmlFor="email">
      <b>Email :</b>
    </label>
    <input
      type="text"
      placeholder="Enter Email"
      name="email"
      id="email"
      required=""
    /><br/><br/>
    <label htmlFor="psw">
      <b>Password :</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      id="psw"
      required=""
    /><br/><br/>
    <label htmlFor="psw-repeat">
      <b>Repeat Password :</b>
    </label>
    <input
      type="password"
      placeholder="Repeat Password"
      name="psw-repeat"
      id="psw-repeat"
      required=""
    />
    <hr />
    <p>
      By creating an account you agree to our{" "}
      <a href="#">Terms &amp; Privacy</a>.
    </p>
    <button onClick={pageHandler} className="regi-btn">  Register </button>
  </div>
  <div className="container signin">
    <p>
      Already have an account? <a href="#">Sign in</a>.
    </p>
  </div>
  </fieldset>
</form>

        </>
    )
}
