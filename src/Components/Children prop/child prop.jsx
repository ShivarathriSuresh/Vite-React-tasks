

const LoginComponent =(prop)=>{
       const {loginPage=true}=prop;
    return (
        <div>
         {/* {children} */}
         {loginPage?<h2>Welcome Admin</h2>:<h2>Welcome User</h2>}
        </div>
    )
}

export default LoginComponent