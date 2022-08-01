import React from "react";
import './note.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TextField } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Note = (props) => {
    return (
        <div className="card-main">
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