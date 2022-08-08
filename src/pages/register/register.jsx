import React from "react";
import './register.scss';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Link } from "react-router-dom";

const Register = (props) => {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('')
    const [userName,setUserName] = React.useState('')
    const [nameError,setNameError] = React.useState('')
    const [emailError,setEmailError] = React.useState('')
    const [passwordError,setPasswordError] = React.useState('')

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
    const validateUsername = (value) => {
        if(value.length === 0) {
            setNameError("Username Required");
            return true;
        }
        else {
            setNameError("");
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
    const handleChangeUserName = (event) => {
        validateUsername(event.target.value)
        setUserName(event.target.value);
    };
    const handleChangePassword = (event) => {
        validatePassword(event.target.value)
        setPassword(event.target.value);
    }
    const submitReg = () => {
    }
    return (
        <div className="main-register">
            <div className="register-container">
                <div className="logo">
                <StickyNote2Icon sx={{ fontSize: '120px',color:'#702203c7' }} />
                <CameraAltIcon sx={{ fontSize: '120px',color:'#d32f45' }} />
                </div>
                <TextField
                    error={nameError.length > 0 ? true:false}
                    className={nameError.length > 0 ? "text-field-error": "text-field"}
                    label="UserName"
                    type="text"
                    size="medium"
                    value={userName}
                    placeholder="type here email"
                    onChange={handleChangeUserName}
                    onBlur={(event)=>{validateUsername(event.target.value)}}
                    helperText={nameError}
                />
                <TextField
                    error={emailError.length > 0 ? true:false}
                    className={emailError.length > 0 ? "text-field-error": "text-field"}
                    label="Email"
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
                    type="password"
                    size="medium"
                    placeholder="type here password"
                    value={password}
                    onChange={handleChangePassword}
                    onBlur={(event)=>{validatePassword(event.target.value)}}
                    helperText={passwordError}
                />
                <Button variant="contained" className="submit-btn" onClick={submitReg}>
                    Submit
                </Button>
                <div className="link-go-to">
                     Already Registered ? <Link to="/login"  >Login Here</Link>
                </div>

            </div>

        </div>
    )
}

export default Register;