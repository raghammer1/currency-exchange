import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Value({ exchangeNow }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="Convert" onClick={exchangeNow}>
        Convert Now
      </Button>
    </Stack>
  );
}
