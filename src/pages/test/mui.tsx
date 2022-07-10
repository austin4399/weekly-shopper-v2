import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Appbar from '../../../src/components/appbar/index';
export default function BasicButtons() {
  return (
    <>
    <Appbar></Appbar>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
  );
}