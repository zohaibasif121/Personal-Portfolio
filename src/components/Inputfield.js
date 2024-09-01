import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Inputfield(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField  label={props.label} variant="outlined" 
      value={props.value} onChange={props.onChange} className="m-12 " sx={{ width: '100%' }} />
      
    </Box>
  );
}
