import React, { useState, useRef } from 'react';
import { Box, Fade, Button, Container, Grid, List, ListItem, Paper, TextField, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import './App.css';
import DOMPurify from 'dompurify';
import { useNavigate } from 'react-router-dom';


function Chat() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);
  const [methods, setMethods] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleCreateJourneyClick = () => {
    const newTab = window.open('/journey', '_blank');
    newTab.focus();
  };

  const handleSendClick = (inputValue) => {
    if (inputValue.trim()) {
      // Add the user's message
      const newUserMessage = {
        sender: 'user',
        text: inputValue
      };

      // Update the messages state with the new user message
      setMessages(prevMessages => [...prevMessages, newUserMessage]);

      // Clear the input field
      setInputValue('');

      // Prepare the friend's message
      const friendMessageText = `<strong>For your project, you can approach it through the following:</strong><br>
<br style="line-height: 0">
<em>Statement Starters</em>
<div style="line-height: 0; font-size: 75%">Announce the driving question using Statement Starters</div><br style="line-height: 0">
<em>Abstraction Laddering</em>
<div style="line-height: 0; font-size: 75%">Validate that you truly understand the problem</div><br style="line-height: 0">
<m>Stakeholder Mapping</em>
<div style="line-height: 0; font-size: 75%">Focus on people using Stakeholder Mapping</div><br style="line-height: 0">
<em>Interviewing</em>
<div style="line-height: 0; font-size: 75%">Refine understanding by hearing directly from experts using Interviewing.</div><br style="line-height: 0">
<em>Contextual inquiry</em>
<div style="line-height: 0; font-size: 75%">Watch the user in real-time to understand the problem</div><br style="line-height: 0">
<em>Rose, Thorn, Bud</em>
<div style="line-height: 0; font-size: 75%">Document Contextual Inquiry and Interview results with Rose, Thorn, Bud</div><br style="line-height: 0">
<em>Affinity Clustering</em>
<div style="line-height: 0; font-size: 75%">Group related insights from the Interview</div>`;

      // Add the friend's message
      setMessages(prevMessages => [...prevMessages, {
        sender: 'friend',
        text: (
          <div dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(friendMessageText)
          }} />
        ),
        key: Date.now() // Use a unique key to force the update
      }]);

      // Set the methods to be displayed
      setMethods([
        {
          name: 'Statement Starters',
          description: "The 'Statement Starter' method in Product Thinking is a technique used to spark innovative and collaborative discussions about a product or service."
        },
        {
          name: 'Abstraction Laddering',
          description: "Abstraction Laddering in Product Thinking is a method that facilitates a deeper understanding of product issues by exploring them at different levels of abstraction. "
        },
        {
          name: 'Stakeholder Mapping',
          description: "Stakeholder Mapping in Product Thinking is a strategic method for identifying and organizing all relevant individuals or groups involved with a product, such as customers, team members, investors, and suppliers. "
        },
        {
          name: 'Interviewing',
          description: "Interviewing is a key method for gathering qualitative insights, where structured or semi-structured conversations are held with users or potential customers to understand their needs, experiences, and perceptions. "
        },
        {
          name: 'Contextual inquiry',
          description: "Contextual Inquiry in Product Thinking is a research approach where user behavior is observed and analyzed in their natural environment, providing genuine insights into how they interact with a product or service in real-life situations."
        },
        {
          name: 'Rose, Thorn, Bud',
          description: "The 'Rose, Thorn, Bud' method in Product Thinking is a straightforward approach for evaluating products, where 'Rose' represents the positive aspects or what's working well, 'Thorn' identifies the challenges or areas needing improvement, and 'Bud' signifies potential opportunities or ideas for growth."
        },
        {
          name: 'Affinity Clustering',
          description: "Affinity Clustering in Product Thinking is a method used to organize and interpret large volumes of qualitative data by grouping similar items to reveal patterns and themes."
        }
      ]);
    }
  };

  return (
    <Container maxWidth="false" sx={{ height: '100vh', position: 'relative', overflow: 'hidden', padding: 0, margin: 0 }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={3} style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
          <h3>CUSTOM JOURNEY</h3>
          {methods.map((method, index) => (
            // <Fade in={true} timeout={500 + index * 500} key={index}>
            <React.Fragment key={index}>
              
              <Divider style={{ backgroundColor: 'grey', marginTop: '10px' }} />
              <Accordion className="fade-in">
                <AccordionSummary
                 
                >
                  <Typography>{method.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  {method.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
            </React.Fragment>
            // </Fade>
          ))}
        </Grid>
        <Grid item xs={9} ref={chatContainerRef} sx={{ height: '100%', overflowY: 'auto', paddingBottom: '180px' /* Adjust this value as needed */ }}>
          <List sx={{ padding: 0 }}>
          {messages.map((message, index) => (
            <React.Fragment key={message.key || index}>
              {message.sender === 'friend' ? (
                <Fade in={true} timeout={5000}>
                  <ListItem sx={{ justifyContent: 'flex-start' }}>
                    <Paper elevation={3} sx={{ padding: '10px', maxWidth: '75%', width: '75%', backgroundColor: '#fff', marginRight: 'auto' }}>
                      <Typography variant="body1" component="div">
                        {message.text}
                      </Typography>
                    </Paper>
                  </ListItem>
                </Fade>
              ) : (
                <ListItem sx={{ justifyContent: 'flex-end' }}>
                  <Paper elevation={3} sx={{ padding: '10px', maxWidth: '75%', width: '75%', backgroundColor: '#e0f7fa', marginLeft: 'auto' }}>
                    <Typography variant="body1" component="div">
                      {typeof message.text === 'string' ? (
                        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message.text) }} />
                      ) : (
                        message.text
                      )}
                    </Typography>
                  </Paper>
                </ListItem>
              )}
              {message.sender === 'friend' && index === messages.length - 1 && (
                <Fade in={true} timeout={5000}>
                  <ListItem sx={{ justifyContent: 'left' }}>
                    <Button variant="contained" color="primary" onClick={handleCreateJourneyClick}>
                      Create Custom Journey from Answer
                    </Button>
                  </ListItem>
                </Fade>
              )}
            </React.Fragment>
          ))}
          </List>
        </Grid>
          <Grid item xs={12} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px', paddingLeft: '400px' }}>
          <TextField
              style={{ backgroundColor: 'white' }}
              fullWidth
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendClick(inputValue)}
              InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                          <Button variant="contained" color="primary" onClick={() => handleSendClick(inputValue)}>
                          Send
                          </Button>
                      </InputAdornment>
                  ),
              }}
              />
          </Grid>
        </Grid>
      </Container>
    );
}

export default Chat;

