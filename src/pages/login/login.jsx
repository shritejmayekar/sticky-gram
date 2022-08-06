import React from "react";
import './login.scss';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Link } from "react-router-dom";
import UserService from "../../services/user-service";
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CustomLoader from "../../components/customLoader/customLoader";
import useAnalyticsEventTracker from "../../components/analytics/useAnalyticsEventTracker";
import usePageTracking from "../../components/usePageTracking/usePageTracking";
import ReactGA from "react-ga";
import { Category } from "@mui/icons-material";
import CustomSnackbar from "../../components/custom-Snackbar/CustomSnackbar";
import { SnackBarState } from "../../config/snackBarState";
import messages from "../../config/messages";

const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')
    const [loader, setLoader] = React.useState(false);
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const [snackbar, setSnackbar] = React.useState({
        isOpen: false,
        message: '',
        type: ''
    })
    const openSnackBar = (message, type) => {
        setSnackbar({
            isOpen: true,
            message: message,
            type: type
        })
        setTimeout(() => {
            closeSnackbar()

        }, 6000);
    }
    const closeSnackbar = () => {
        setSnackbar({
            isOpen: false,
            message: "",
            type: ""
        })

    }
    const eventTrack = (category, action, label) => {
        console.log("GA event:", category, ":", action, ":", label);
        ReactGA.event({
          category: category,
          action: action,
          label: label,
        })
      }
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const userService = new UserService();
    let navigate = useNavigate();

    const validateEmail = (value) => {
        if (value.length === 0) {
            setEmailError("Email Required");
            return true;
        }
        else {
            setEmailError("");
            return false;
        }
    }
    const validatePassword = (value) => {
        if (value.length === 0) {
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

    const keyPressed = (event) => {

        if (event.charCode === 13 || event.code === "Enter") {
            submitReg()
        }
    }

    const submitReg = () => {

        if (!validateEmail(email) && !validatePassword(password)) {
            let data = {
                "email": email,
                "password": password
            }
            setLoader(true);
            userService.login(data).then(res => {
                console.log(res.data.token)
                localStorage.setItem('stickyGram', res.data.token)
                openSnackBar(messages.LOGIN_SUCCESS_MSG, SnackBarState.SUCCESS)
                setTimeout(() => {
                    navigate('/');
                    setLoader(false);
                }, 1000);

            })
                .catch(err => {
                    console.log(err)
                    setLoader(false);
                    openSnackBar(messages.LOGIN_FAILURE_MSG, SnackBarState.ERROR)
                })
        }
    }
    usePageTracking();
    return (
        <div className="main-login">
            <div className="login-container">
                <div className="logo">
                    <StickyNote2Icon sx={{ fontSize: '120px', color: '#702203c7' }} />
                    <CameraAltIcon sx={{ fontSize: '120px', color: '#d32f45' }} />
                </div>
                <TextField
                    error={emailError.length > 0 ? true : false}
                    className={emailError.length > 0 ? "text-field-error" : "text-field"}
                    label="Email"
                    type="text"
                    size="medium"
                    value={email}
                    placeholder="type here email"
                    onChange={handleChangeEmail}
                    onBlur={(event) => { validateEmail(event.target.value) }}
                    helperText={emailError}
                    onKeyPress={keyPressed}
                />
                <TextField
                    className={passwordError.length > 0 ? "text-field-error" : "text-field"}
                    error={passwordError.length > 0 ? true : false}
                    label="Password"
                    type={values.showPassword ? 'text' : 'password'}
                    size="medium"
                    placeholder="type here password"
                    value={password}
                    onChange={handleChangePassword}
                    onBlur={(event) => { validatePassword(event.target.value) }}
                    helperText={passwordError}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">

                                <IconButton onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}


                                </IconButton>
                            </InputAdornment>
                        )
                    }}

                    onKeyPress={keyPressed}

                />
                <Button variant="contained" onClick={()=>{submitReg();eventTrack.bind(this, "Sign Up Screen", "Sign Up Button", "Button")}} className="submit-btn">
                    Submit
                </Button>
                <div className="link-go-to">
                    Not Registered Yet ? <Link to="/register" >Sign Up Here</Link>
                </div>

            </div>
            <CustomLoader open={loader} />
            <CustomSnackbar open={snackbar.isOpen} close={closeSnackbar} message={snackbar.message} vertical='bottom' horizontal='right' type={snackbar.type} />

        </div>
    )
}

export default Login;