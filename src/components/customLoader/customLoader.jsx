import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";


const CustomLoader = (props) => {
    const [open, setOpen] = React.useState(props.open)

    const ChangeState = () => {
        if (open !== props.open)
            setOpen(props.open)
    }

    React.useEffect(() => {
        ChangeState()
    }, [props.open])

    return (
        <div>
            <Backdrop style={{ zIndex: 1300, color: props.color ? props.color : "#fc1995" }} className="backDrop" open={open}>
                <CircularProgress color="inherit" />

                {props.message ?
                    <p className="loaderMessage" style={{ color: props.color ? props.color : "#fc1995" }}>{props.message}</p>
                    :
                    null
                }
            </Backdrop>
        </div>	
    );

}
export default CustomLoader; 