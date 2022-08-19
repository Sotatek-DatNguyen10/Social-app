import { Typography, Box, TextField, Button, Link, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";
import Image from './../../assets/images/bg-image.svg'
// import isEmpty from "validator/lib/isEmpty"

function SignIn() {

  const isEmpty = (param: string) => {
    if (param.length > 0) return false
    else return true;
  }

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMsg, setValidationMsg] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const msg = {
    email: '',
    password: ''
  }
  const validateAll = () => {
    if (isEmpty(email)) {
      msg.email = "Please enter your email!";
    }
    if (isEmpty(password)) {
      msg.password = "Please enter your password!"
    }
  }
  const handleClickSignIn = () => {
    validateAll();
    console.log(msg.email);
    console.log(msg.password);
  };


  return (
    <Box sx={{
      width: '100%',
      height: '619px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <Box
        component={'img'}
        src={Image}
        sx={{
          width: '40%'
        }}>

      </Box>

      <Box sx={{
        width: "400px",
        background: "#FFF",
        boxShadow: "0px 8px 50px rgba(150, 140, 169, 0.1)",
        padding: "77px 74px",
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ marginBottom: '10px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 39,
              color: "#000"
            }}>
              Sign In
            </Typography>
            <Typography component="span" sx={{
              fontWeight: 400,
              fontSize: 14,
              color: "#4D4D4D"
            }}>
              Don't have account?
              <Link href="/signup" sx={{
                fontWeight: 600,
                fontSize: 14,
                color: "#5487F5",
                marginLeft: "6px",
                textDecoration: 'none'
              }}>
                Sign up
              </Link>
            </Typography>
          </Box>
          <Box sx={{ margin: '10px 0px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#4D4D4D",
            }}>
              Email address
            </Typography>
            <TextField fullWidth id="email" sx={{ marginTop: "5px" }} onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <Typography component={'p'} sx={{
              color: 'red',
            }} > {msg.email} </Typography>
          </Box>
          <Box sx={{ margin: '10px 0px' }}>
            <Typography component="div" sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "#4D4D4D",
            }}>
              Password
            </Typography>
            <TextField fullWidth
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ marginTop: "5px" }} />


            <Typography component={'p'} sx={{
              color: 'red',
            }} > {msg.password} </Typography>
          </Box>
          <Button fullWidth sx={{
            background: "#C18FF5",
            boxShadow: "0px 8px 25px rgba(114, 56, 207, 0.15)",
            borderRadius: "10px",
            marginTop: "15px",
            marginBottom: "20px",
            textTransform: 'none',
            color: "#FFF",
            fontWeight: 700,
            fontSize: 14,
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:hover': {
              background: "#C080F0"
            }
          }}
            onClick={handleClickSignIn}
          >Sign In</Button>
          <Link href="#" sx={{
            fontWeight: 600,
            fontSize: 14,
            color: "#5487F5",
            textDecoration: 'none'
          }}>
            Forgot your password?
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SignIn

