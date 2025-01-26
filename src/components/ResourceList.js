import React from 'react';
import { List, ListItem, ListItemText, Link } from '@mui/material';

const resources = [
  {
    title: 'Deep Learning Specialization by Andrew Ng',
    url: 'https://www.coursera.org/specializations/deep-learning',
    type: 'course',
  },
  {
    title: 'Fast.ai Practical Deep Learning',
    url: 'https://course.fast.ai/',
    type: 'course',
  },
  {
    title: 'Deep Learning with PyTorch',
    url: 'https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html',
    type: 'tutorial',
  },
  {
    title: 'Deep Learning Book by Ian Goodfellow',
    url: 'https://www.deeplearningbook.org/',
    type: 'book',
  },
  {
    title: 'TensorFlow Tutorials',
    url: 'https://www.tensorflow.org/tutorials',
    type: 'tutorial',
  },
];

const ResourceList = () => {
  return (
    <List>
      {resources.map((resource, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={<Link href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</Link>}
            secondary={`Type: ${resource.type}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ResourceList;