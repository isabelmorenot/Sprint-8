import React, {useState, useEffect} from "react";
import { Container } from "./userStyes";

export const LogIn = () => {
    
    return(
        <Container>
                <div className="sub-main">
                    <div className="box">
                        <div>
                            <h3>LOG IN</h3>
                        </div>
                        <div>
                            <input 
                                className="firstInput"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <input 
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <br/><br/>
                        <button className="submit" >CONTINUE</button>
                    </div>
                </div> 
            </Container>
    )
}

export const SignUp = () => {
    
    const[storage, setStorage] = useState(localStorage.getItem('storage'))

    const[user, setUser] = useState(
        {
            name:"",
            lastName:"",
            email:"",
            password:""
        }
    );

    useEffect(()=>{
        try{
         setStorage(storage)
         localStorage.setItem('storage', storage)
        } catch (error){
            console.error(error)
        }
    },[storage])

    const clickUser = () => {
        setStorage({user});
    }

    console.log(storage);

    return(
            <Container>
                <div className="sub-main">
                    <div className="box">
                        <div>
                            <h3>CREATE YOUR ACCOUNT</h3>
                        </div>
                        <div>
                            <input 
                                type="text"
                                placeholder="Name"
                                value={user.name}
                                onChange={(e)=> setUser({...user, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <input 
                                type="text"
                                placeholder="Last Name"
                                value={user.lastName}
                                onChange={(e)=> setUser({...user, lastName: e.target.value})}
                            />
                        </div>
                        <div>
                            <input 
                                type="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={(e)=> setUser({...user, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <input 
                            type="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={(e)=> setUser({...user, password: e.target.value})} 
                            />
                        </div>
                        <br/><br/>
                        <button className="submit" onClick={clickUser}>Create Account</button>
                    </div>
                </div>
            </Container>

    )

}
