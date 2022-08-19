import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  header: {
    background: 'blue',
    // width: '100%',
    height: '100px',

  }
});

export default function Test() {
  const classes = useStyles();
  return <div>
    <Box className={classes.header}>
      <Button className={classes.root}>Styled with Hook API</Button>
      <Typography component={'span'}> abc xysadi asj db</Typography>
      <Button >Styled with Hook API</Button>
    </Box>
  </div>
}
