import React from "react";
import { handleLogin } from "./service";


const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    localStorage.getItem("user_email") && (window.location.href = "/dashboard");
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin({ email, password });
    };
    
    return (
        
    <React.Fragment>
        <form method="POST" onSubmit={(event) => handleFormSubmit(event)}>
        <h1>Login</h1>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    </React.Fragment>
    )

};


export default Login