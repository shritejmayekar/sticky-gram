import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './dialog.scss';
import UserService from '../../services/user-service';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NoteEdit(props) {
    const [note,setNote] = React.useState('');
    const userService = new UserService();
    React.useEffect(()=>{
        setNote('')
        userService.fetchNoteById(props.noteId).then(res=>{
            setNote(res.data)
        })
    },[props.noteId])

    const closeDialog = () => {
        props.closeNote()
    }

  return (
    <>
     
      <Dialog
      className='note-dialog'
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        onClose={(event, reason) => {
            closeDialog();
            // if (reason !== 'backdropClick') {
            //     closeDialog();
            // }
        }}
      >
        <div className='dialog-main'>
            <Button onClick={closeDialog}>close</Button>
           <div className='title'>
               {props.noteId}
               {note.title}
           </div>
        </div>        
      </Dialog>
    </>
  );
}