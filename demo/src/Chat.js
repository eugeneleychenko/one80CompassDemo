import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Container, Grid, List, ListItem, Paper, TextField, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import './App.css';

function Chat() {
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);
  const [methods, setMethods] = useState([]);
  const [messages, setMessages] = useState([]);

  // making chat look good
  useEffect(() => {
    if (chatContainerRef.current) {
      const isScrolledToBottom = chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight <= chatContainerRef.current.scrollTop + (chatContainerRef.current.clientHeight * 0.75);
      if (isScrolledToBottom) {
        chatContainerRef.current.scrollBy(0, 40);
      }
    }
  });

  const handleSendClick = async (inputValue) => {
    if (inputValue.trim()) {
      // Add the user's message
      const newUserMessage = {
        sender: 'user',
        text: inputValue
      };

      // Add the friend's welcome message
      const newFriendMessage = {
        sender: 'friend',
        text: 'Welcome to the world'
      };

      // Update the messages state with the new messages
      setMessages(prevMessages => [...prevMessages, newUserMessage, newFriendMessage]);

      // Clear the input field
      setInputValue('');

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

      // Fetch the descriptions for the methods
      
    }
  };

  return (
    <Container maxWidth="false" sx={{ height: '100vh', position: 'relative', overflow: 'hidden', padding: 0, margin: 0 }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={3} style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
          <h3>CUSTOM JOURNEY</h3>
          {methods.map((method, index) => (
            <React.Fragment key={index}>
              <Divider style={{ backgroundColor: 'grey', marginTop: '10px' }} />
              <Accordion>
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
          ))}
        </Grid>
        <Grid item xs={9} ref={chatContainerRef} sx={{ height: '100%', overflowY: 'auto', paddingBottom: '180px' /* Adjust this value as needed */ }}>
          <List sx={{ padding: 0 }}>
              {messages.map((message, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <Paper elevation={3} sx={{ padding: '10px', maxWidth: '75%', width: '75%', backgroundColor: message.sender === 'user' ? '#e0f7fa' : '#fff', marginLeft: message.sender === 'user' ? 'auto' : 0, marginRight: message.sender === 'friend' ? 'auto' : 0 }}>
                    <Typography variant="body1">{message.text}</Typography>
                    </Paper>
                </ListItem>
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
