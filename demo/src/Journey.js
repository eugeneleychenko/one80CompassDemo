import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';


const Journey = () => {
  const [methods, setMethods] = useState([]);
  const [aiResponses, setAiResponses] = useState([]);
  const methodsToFetch = methods.map(method => method.name);

  

  useEffect(() => {
    async function fetchAIResponses() {
      
      const url = 'https://gs.jasonaa.me/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vSmp889ksBKKVVwpaxhlIzpDzXNOWjnszEXBP7SC5AyoebSIBFuX5qrcwwv6ud4RCYw2t_BZRhGLT0u/pubhtml?gid=1980586524&single=true';
    
      try {
        const storedMethods = localStorage.getItem('methods');
        if (storedMethods) {
          setMethods(JSON.parse(storedMethods));
        }
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
  }, [methods]); // Empty dependency array means this effect will only run once after the initial render

  const scrollToMethod = (method) => {
    const element = document.getElementById(method);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <Box sx={{ display: 'flex', marginTop: '90px'  }}>
      <Box sx={{ width: '30%', position: 'fixed', top: '90px', left: '20px' }}>
        {/* Custom Journey Grid from Chat.js */}
        {methodsToFetch.map((method, index) => (
          <Button
            key={index}
            style={{ width: '90%', backgroundColor: 'black', color: 'white', marginBottom: '10px', ml: '20px' }}
            variant="contained"
            onClick={() => scrollToMethod(method)}
          >
            {method}
          </Button>
        ))}
        {/* The topics list will be dynamically generated */}
        {/* Methods and other interactive elements will go here */}
      </Box>
      <Box sx={{  ml: '30%', pr: '20px' }}>
        <Typography variant="h3" align="left">Journey Name</Typography>
        <Typography variant="h4" sx={{ mt: 3 }} align="left">Project Description</Typography>
        {methodsToFetch.map((method, index) => (
          <Box sx={{ display: 'flex', alignItems: 'center', my: 3, pr: '20px' }} key={method} id={method}>
            <Box sx={{ width: '50%' }}>
              <Typography variant="h4" align="left">{method}</Typography>
              <Typography variant="body1" sx={{ mt: 3 }} align="left">
                {aiResponses[index]}
              </Typography>
            </Box>
            <Box sx={{ width: '50%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0', pl: '20px' }}>
              <VideocamIcon sx={{ fontSize: 60 }} />
            </Box>
          </Box>
          
       
        ))}
        
      </Box>
    </Box>
  );
};

export default Journey;
