import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Appbar from '../../../src/components/appbar/index';
export default function BasicButtons() {
  return (
    <>
    <Appbar></Appbar>
    <Stack spacing={2} direction="row">
      <Button variant="text" className="bg-red-500 hover:bg-red-600">Text</Button>
      <Button variant="contained" disableElevation>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
  );
}