import React, { Fragment } from 'react';
import loading_cube from '../../assets/images/loading_cube.gif';
import {CircularProgress} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Spinner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress
                color='primary'
                style={{
                    width: '40px',
                    marginTop: '15%',
                    marginLeft:'50%',
                    // marginBottom: '50%',
                    // marginRight: '50%',
                    display: 'block',
                    opacity: 0.5,
                    zIndex: 9999
                }}/>
        </div>
    )
}

export default Spinner;
