import React from "react";
import './login.scss';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import MonochromePhotosRoundedIcon from '@mui/icons-material/MonochromePhotosRounded';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Link } from "react-router-dom";
import UserService from "../../services/user-service";

const Login = (props) => {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('')
    const [emailError,setEmailError] = React.useState('')
    const [passwordError,setPasswordError] = React.useState('')
    const userService = new UserService();
    const validateEmail = (value) => {
        if(value.length === 0) {
            setEmailError("Email Required");
            return true;
        }
        else {
            setEmailError("");
            return false;
        }
    }
    const validatePassword = (value) => {
        if(value.length === 0) {
            setPasswordError("Password Required");
            return true;
        }
        else {
            setPasswordError("");
            return false;
        }
    }
    const handleChangeEmail = (event) => {
        validateEmail(event.target.value)
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        validatePassword(event.target.value)
        setPassword(event.target.value);
    }

    const submitReg = () => {
        if (!validateEmail(email) && !validatePassword(password)) {
            let data = {
                "email": email,
                "password": password
            }
            userService.login(data).then(res=>{
                console.log(res)
            })
        }
    }
    return (
        <div className="main-login">
            <div className="login-container">
                <div className="logo">
                <StickyNote2Icon sx={{ fontSize: '120px',color:'#702203c7' }} />
                <CameraAltIcon sx={{ fontSize: '120px',color:'#d32f45' }} />
                </div>
                <TextField
                    error={emailError.length > 0 ? true:false}
                    className={emailError.length > 0 ? "text-field-error": "text-field"}
                    label="Email"
                    id="outlined-name"
                    type="text"
                    size="medium"
                    value={email}
                    placeholder="type here email"
                    onChange={handleChangeEmail}
                    onBlur={(event)=>{validateEmail(event.target.value)}}
                    helperText={emailError}
                />
                 <TextField
                    className={passwordError.length > 0 ? "text-field-error": "text-field"}
                    error={passwordError.length > 0 ? true:false}
                    label="Password"
                    id="outlined-name"
                    type="password"
                    size="medium"
                    placeholder="type here password"
                    value={password}
                    onChange={handleChangePassword}
                    onBlur={(event)=>{validatePassword(event.target.value)}}
                    helperText={passwordError}
                />
                <Button variant="contained"  onClick={submitReg} className="submit-btn">
                    Submit
                </Button>
                <div className="link-go-to">
                    Not Registered Yet ? <Link to="/register" >Sign Up Here</Link>
                </div>

            </div>

        </div>
    )
}

export default Login;