import React from "react";
import './note.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

const Note = (props) => {
 
    return (
        <div className="card-main">
            <div className="card-title title-black" onClick={()=>{props.openNote(props.id)}}>
                <p>{props.title}</p>
            </div>
            <div className="card-subtitle title-black" onClick={()=>{props.openNote(props.id)}}>
                <p>{props.description}</p>
            </div>
            <div className="action-btn">
                <IconButton className="align-right">
                    <DeleteIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Note;