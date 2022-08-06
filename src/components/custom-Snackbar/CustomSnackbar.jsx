import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = (props) => {
    const [open, setOpen] = React.useState(props.open);

    const ChangeState = () => {

        if (open !== props.open)
            setOpen(props.open)
    }

    React.useEffect(() => {
        ChangeState()

    }, [props.open])



    const handleClose = (event, reason) => {
        props.close();
        setOpen(!open)
    };






    return (

        <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }} >
            <Alert onClose={handleClose} severity={props.type}>
                {props.message}
            </Alert>
        </Snackbar>

    )

}
export default CustomSnackbar;