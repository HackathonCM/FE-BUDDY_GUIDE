import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalContext } from '../../Context/global';
import Layout from '../../Components/Layout';
import { getStorageValue, setStorageValue } from '../../Common/LocalStorage/helpers';
import { LocalStorageKeys } from '../../Common/LocalStorage/interface';

import style from "./login.css"
import { UserRole } from '../../Common/User/interface';

const theme = createTheme();

const useLoginApi = () => {
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const navigate = useNavigate();

    const login = React.useCallback(async (username, password, isKeepAuthChecked) => {
        try {
            const response = await axios.post('http://localhost:8080/account', {
                username,
                password,
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Accept': '*/*'
                    }
                }
            );

            if (response && response.status === 200) {
                setGlobalState({
                    user: response.data
                })
                if (isKeepAuthChecked) {
                    setStorageValue(LocalStorageKeys.LOGIN, response.data);
                }

                if (response.data && response.data.type === UserRole.USER) {
                    navigate('/user');
                }
                else if (response.data && response.data.type === UserRole.GUIDE) {
                    navigate('/guide');
                }
            }
        } catch (err) {
            console.error(err);
        }
    }, [setGlobalState]);

    return { login }
}

export default function Login() {
    const { login } = useLoginApi();

    const [isKeepAuthChecked, setIsKeepAuthChecked] = React.useState(false);

    const renderTitle = () => {
        return (
            <>
                <Avatar sx={{ m: 1, bgcolor: '#6c757d' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </>
        )
    }

    const renderInputs = () => {
        return (
            <>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user_name"
                    label="User name"
                    name="user_name"
                    autoComplete="user_name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </>
        )
    }

    const renderAuthCheckbox = () => {
        return (
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={isKeepAuthChecked} onChange={(event) => { setIsKeepAuthChecked(event.target.checked) }} />} label="Keep me signed in" />
            </FormGroup>
        )
    }

    const renderSubmitButton = () => {
        return (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
        )
    }

    const renderInstructions = () => {
        return (
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        )
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            user_name: data.get('user_name'),
            password: data.get('password'),
        });

        await login(data.get('user_name'), data.get('password'), isKeepAuthChecked)
    };

    return (
        <Layout>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {renderTitle()}
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            {renderInputs()}
                            {renderAuthCheckbox()}
                            {renderSubmitButton()}
                            {renderInstructions()}
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Layout>

    );
}