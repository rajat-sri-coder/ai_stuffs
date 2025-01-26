import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button } from '@mui/material';

const Preferences = () => {
  const [interests, setInterests] = useState({
    nlp: false,
    computerVision: false,
    reinforcementLearning: false,
  });

  const handleChange = (event) => {
    setInterests({ ...interests, [event.target.name]: event.target.checked });
  };

  const savePreferences = () => {
    localStorage.setItem('interests', JSON.stringify(interests));
    alert('Preferences saved!');
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Select Your Interests
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={interests.nlp} onChange={handleChange} name="nlp" />}
        label="Natural Language Processing (NLP)"
      />
      <FormControlLabel
        control={<Checkbox checked={interests.computerVision} onChange={handleChange} name="computerVision" />}
        label="Computer Vision"
      />
      <FormControlLabel
        control={<Checkbox checked={interests.reinforcementLearning} onChange={handleChange} name="reinforcementLearning" />}
        label="Reinforcement Learning"
      />
      <Button variant="contained" color="primary" onClick={savePreferences}>
        Save
      </Button>
    </div>
  );
};

export default Preferences;