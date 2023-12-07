import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const Journey = () => {
  const [aiResponses, setAiResponses] = useState([]);
  const methodsToFetch = [
    'Statement Starters',
    'Abstraction Laddering',
    'Stakeholder Mapping',
    'Interviewing',
    'Contextual Inquiry',
    'Rose, Thorn, Bud',
    'Affinity Clustering'
  ];

  useEffect(() => {
    async function fetchAIResponses() {
      const url = 'https://gs.jasonaa.me/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vSmp889ksBKKVVwpaxhlIzpDzXNOWjnszEXBP7SC5AyoebSIBFuX5qrcwwv6ud4RCYw2t_BZRhGLT0u/pubhtml?gid=1980586524&single=true';
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        // Create a map for easy lookup of AI Responses by method name
        const aiResponseMap = new Map(data.map(item => [item.Uniques, item['AI Response']]));
        // Map over methodsToFetch and get the corresponding AI Response
        const orderedAiResponses = methodsToFetch.map(method => aiResponseMap.get(method) || 'No response found');
        setAiResponses(orderedAiResponses);
      } catch (error) {
        console.error('Error fetching AI Responses:', error);
      }
    }
  
    fetchAIResponses();
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <Box sx={{ display: 'flex', marginTop: '90px'  }}>
      <Box sx={{ width: '30%', position: 'fixed', top: '90px', left: 0 }}>
        {/* Custom Journey Grid from Chat.js */}
        <Button style={{width: '90%'}} variant="contained" color="primary">
          New Topic
        </Button>
        {/* The topics list will be dynamically generated */}
        {/* Methods and other interactive elements will go here */}
      </Box>
      <Box sx={{ width: '70%', ml: '30%' }}>
        <Typography variant="h3" align="left">Journey Name</Typography>
        <Typography variant="h4" sx={{ mt: 3 }} align="left">Project Description</Typography>
        {methodsToFetch.map((method, index) => (
          <Box sx={{ my: 3 }} key={method}>
            <Typography variant="h4" align="left">{method}</Typography>
            <Typography variant="body1" sx={{ mt: 3 }} align="left">
              {aiResponses[index]}
            </Typography>
          </Box>
        ))}
        
      </Box>
    </Box>
  );
};

export default Journey;
