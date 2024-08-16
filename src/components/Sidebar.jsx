import React from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import {DashboardIcon, PeopleIcon, ShoppingCartIcon} from '@mui/icons-material';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <Drawer variant='permanent' sx={{ width: 240, flexShrink: 0 }}>
        <Toolbar />
        <List>
          <ListItem button component={Link} to='/'>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button component={Link} to='/users'>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="users" />
          </ListItem>

          <ListItem button component={Link} to='/products'>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="products" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}