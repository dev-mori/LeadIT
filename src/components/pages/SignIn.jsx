import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    container: {
        width: '300px',
        margin: '0 auto'
    },
    from: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const SignIn = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <h1>SignIn</h1>
            <from>
                <TextField label="username" variant="outlined" />
                <TextField label="e-mail" variant="outlined" />
                <TextField label="password" variant="outlined" type="password" />
                <Button variant="outlined" color="secondary">
                    SignIn
</Button>
            </from>
            <Link to="/signup">アカウントをお持ち出ない方</Link>
        </div>
    );
};

export default SignIn;