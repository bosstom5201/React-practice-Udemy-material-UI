import React from 'react'

import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <div>
      <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography varient="h6">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
