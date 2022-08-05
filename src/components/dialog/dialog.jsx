import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import './dialog.scss';
import UserService from '../../services/user-service';
import CustomLoader from "../../components/customLoader/customLoader";
import Skeleton from '@mui/material/Skeleton';
import { TextareaAutosize, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NoteEdit(props) {
  const [note, setNote] = React.useState({title:'',id:'',description:''});
  const [loader, setLoader] = React.useState(false);
  const userService = new UserService();
  React.useEffect(() => {
    setNote({title:'',id:'',description:''})
    if (props.noteId) {
      fetchNote();
    }
  }, [props.noteId])

  const fetchNote = () => {
    setLoader(true);
    userService.fetchNoteById(props.noteId).then(res => {
      setNote(res.data)
      setLoader(false);
    })
      .catch(err => {
        setLoader(false);

      })
  }

  const updateNote = () => {
    let payload = {
      "title":note.title,
      "description":note.description
    }
    userService.updateNoteById(props.noteId,payload).then(res => {
        console.log(res);
    })
      .catch(err => {

      })
  }

  const closeDialog = () => {
    updateNote()
    props.closeNote()
  }

  const handleChangeTitle = (value) => {
    setNote({...note,title:value})
  }
  const handleChangeDesc = (value) => {
    setNote({...note,description:value})
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
      > {
          note.title ?
            <div className='dialog-main'>
              {/* <Button onClick={closeDialog}>close</Button> */}
              <TextareaAutosize
                className='title-field'
                placeholder="title"
                value={note.title}
                minRows={1}
                onChange={(event)=>handleChangeTitle(event.target.value)}
              />
              <TextareaAutosize
                className='description-field'
                minRows={8}
                value={note.description}
                placeholder="description"
                onChange={(event)=>handleChangeDesc(event.target.value)}
              />
            </div>
            :
            <div className='dialog-main'>
              <Skeleton>
                <Typography className='title-field' >.</Typography>
              </Skeleton>
              <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '30%' }} />
              </Skeleton>


            </div>
        }
        {/* <CustomLoader open={loader} /> */}
      </Dialog>
    </>
  );
}