import React from 'react';
import { AppBar, Toolbar, Typography, TextField, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import NewsFeed from './components/NewsFeed';
import ResourceList from './components/ResourceList';
import BusinessOpportunities from './components/BusinessOpportunities';
import JobsInIndia from './components/JobsInIndia';

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      {/* App Bar with Search Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Deep Learning Hub
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            InputProps={{
              startAdornment: <SearchIcon style={{ color: 'white', marginRight: '8px' }} />,
            }}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '4px' }}
          />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => setActiveSection('home')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => setActiveSection('resources')}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button onClick={() => setActiveSection('business')}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Business Opportunities" />
          </ListItem>
          <ListItem button onClick={() => setActiveSection('jobs')}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Jobs in India" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ padding: '16px' }}>
        {activeSection === 'home' && (
          <>
            <Typography variant="h5" gutterBottom>
              Latest in Deep Learning
            </Typography>
            <NewsFeed />
          </>
        )}

        {activeSection === 'resources' && (
          <>
            <Typography variant="h5" gutterBottom>
              Deep Learning Resources
            </Typography>
            <ResourceList />
          </>
        )}

        {activeSection === 'business' && (
          <>
            <Typography variant="h5" gutterBottom>
              Business Opportunities
            </Typography>
            <BusinessOpportunities />
          </>
        )}

        {activeSection === 'jobs' && (
          <>
            <Typography variant="h5" gutterBottom>
              Jobs in India
            </Typography>
            <JobsInIndia />
          </>
        )}
      </div>
    </div>
  );
};

export default App;