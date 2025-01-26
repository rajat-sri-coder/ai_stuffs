import React from 'react';
import { List, ListItem, ListItemText, Link } from '@mui/material';

const jobs = [
  {
    title: 'Deep Learning Engineer at XYZ Company',
    location: 'Bangalore',
    url: 'https://example.com',
  },
  {
    title: 'AI Research Scientist at ABC Labs',
    location: 'Hyderabad',
    url: 'https://example.com',
  },
  {
    title: 'Machine Learning Intern at PQR Startup',
    location: 'Remote',
    url: 'https://example.com',
  },
];

const JobsInIndia = () => {
  return (
    <List>
      {jobs.map((job, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={<Link href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</Link>}
            secondary={`Location: ${job.location}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default JobsInIndia;