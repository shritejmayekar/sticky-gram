import React from "react";
import './note.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

const Note = (props) => {
 
    return (
        <div className="card-main" onClick={()=>{props.openNote(props.id)}}>
            <div className="card-title title-black">
                <p>{props.title}</p>
            </div>
            <div className="card-subtitle title-black">
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