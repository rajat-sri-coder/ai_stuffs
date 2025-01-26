import React from 'react';
import { List, ListItem, ListItemText, Link } from '@mui/material';

const opportunities = [
  {
    title: 'AI-Powered Healthcare Solutions',
    description: 'Startups using deep learning for disease diagnosis and drug discovery.',
    url: 'https://example.com',
  },
  {
    title: 'Autonomous Vehicles',
    description: 'Companies developing self-driving cars using deep learning.',
    url: 'https://example.com',
  },
  {
    title: 'AI in Agriculture',
    description: 'Deep learning applications for crop monitoring and yield prediction.',
    url: 'https://example.com',
  },
];

const BusinessOpportunities = () => {
  return (
    <List>
      {opportunities.map((opportunity, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={<Link href={opportunity.url} target="_blank" rel="noopener noreferrer">{opportunity.title}</Link>}
            secondary={opportunity.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BusinessOpportunities;