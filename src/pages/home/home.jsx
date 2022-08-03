import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import Note from "../../components/note/note";
import UserService from "../../services/user-service";
import './home.scss';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CustomLoader from "../../components/customLoader/customLoader";
import NoteEdit from "../../components/dialog/dialog";

const Home = (props) => {
    const [notes, setNotes] = React.useState([]);
    const [searchNote, setSearchNote] = React.useState('');
    const [loader, setLoader] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [noteId, setNoteId] = React.useState('');

    const openNote = (id) => {
        setOpen(true);
        setNoteId(id);
    }   
    const closeNote = () => {
        setOpen(false);
    }   
    const userService = new UserService();
    React.useEffect(() => {
        setLoader(true);
        userService.fetchNotes().then(res => {
            setNotes(res.data.results)
            setLoader(false)
        })
        .catch(err=>{
            setLoader(false)
        })
    }, [])

    const handleChangeSearch = (event) => {
        setSearchNote(event.target.value)
    }
    const clearFields = () => {
        setSearchNote('')
    }

    return (
        <div className="home-container-main">
            <Header />
            <div className="search-bar" >
                <TextField
                    autoComplete="off"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    placeholder="type note title here"
                    label="Search"
                    value={searchNote}
                    onChange={handleChangeSearch}
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="start">
                            <IconButton onClick={clearFields}>
                                <ClearIcon />
                            </IconButton>
                            </InputAdornment>

                        )
                    }}

                />
            </div>
            <div className="home-main">

                {
                    notes.filter((note) => {
                        if (searchNote === "") {
                            return note;
                        } else if (note.title.toLowerCase().includes(searchNote.toLocaleLowerCase())) {
                            return note;
                        }
                    }).map((note, index) => (
                        <Note openNote={openNote}  key={index.toString()} id={note.id} title={note.title} description={note.description} />

                    ))
                }


            </div>
            <Box sx={{ '& > :not(style)': { m: 1 } }} className='fab-icon'>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
            <NoteEdit open={open} closeNote={closeNote} noteId={noteId} />
            <CustomLoader open={loader} />
        </div>
    )
}

export default Home;