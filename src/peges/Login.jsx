import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <from>
                <TextField label="username" variant="outlined" />
                <TextField label="e-mail" variant="outlined" />
                <TextField label="password" variant="outlined" type="password" />
                <Button variant="contained">Registration</Button>
            </from>
        </div>
    );
};

export default Login;