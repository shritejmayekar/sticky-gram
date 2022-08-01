import React, { useEffect, useState } from "react";
import './header.scss';
import NoteIcon from '@mui/icons-material/Note';
import DescriptionIcon from '@mui/icons-material/Description';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    let navigate = useNavigate();
    const [text, setText] = useState('Free up Your Mind');
    const [moodList,setMoodList] = useState(['blink','double-blink','grin','sad','up','down'])
    const [mood,setMood] = useState([''])
    const logout = () => {
        localStorage.removeItem('stickyGram');
        navigate('/login')
    }
    useEffect(()=>{
        setMood(moodList[Math.floor(Math.random()*6)])
    },[])
    return (
        <header className="header">
            <div>

                <div className="note">
                    <div className="top" >
                        <div className="wrap">
                            <div className={'eye ' + mood}></div>
                            <div className={ 'eye '+ mood}></div>
                        </div>
                    </div>
                    <div className="text">
                        <textarea name="note" value={text} readOnly />
                    </div>



                </div>


            </div>
            <div>
                <IconButton onClick={logout}>
                    <LogoutIcon className="logout" />
                </IconButton>
            </div>


        </header>
    )
}

export default Header;