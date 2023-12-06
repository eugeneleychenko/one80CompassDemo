import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Container, Grid, List, ListItem, Paper, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';


function ChatInterface({ messages, onSendClick }) {
  const [inputValue, setInputValue] = useState('');
  const [customJourneyMethods, setCustomJourneyMethods] = useState([]);
  const chatContainerRef = useRef(null);

  // making chat look good
  useEffect(() => {
    if (chatContainerRef.current) {
      const isScrolledToBottom = chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight <= chatContainerRef.current.scrollTop + (chatContainerRef.current.clientHeight * 0.75);
      if (isScrolledToBottom) {
        chatContainerRef.current.scrollBy(0, 40);
      }
    }
  });
  
  const handleCreateJourneyClick = (methods) => {
    setCustomJourneyMethods(methods.split('| '));
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Grid container sx={{ height: '100%' }}>
      <Grid item xs={12} ref={chatContainerRef} sx={{ height: '100%', overflowY: 'auto', paddingBottom: '180px' /* Adjust this value as needed */ }}>
        <List sx={{ padding: 0 }}>
            {messages.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  <Paper elevation={3} sx={{ padding: '10px', maxWidth: '75%', width: '75%', backgroundColor: message.sender === 'user' ? '#e0f7fa' : '#fff', marginLeft: message.sender === 'user' ? 'auto' : 0, marginRight: message.sender === 'friend' ? 'auto' : 0 }}>
                  <Typography variant="body1">{message.text}</Typography>
                  </Paper>
              </ListItem>
              {message.sender === 'friend' && message.details && (
                <ListItem sx={{ justifyContent: 'flex-start' }}>
                  <Button variant="contained" color="secondary" onClick={() => handleCreateJourneyClick(message.details.Methods)}>
                    Create Custom Journey from Answer
                  </Button>
                </ListItem>
              )}
            </React.Fragment>
            ))}
        </List>
      </Grid>
        <Grid item xs={3} sx={{ height: '100%', padding: '10px 0' }}>
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px' }}>
        <TextField
            style={{ backgroundColor: 'white' }}
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === 'Enter' && onSendClick(inputValue)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Button variant="contained" color="primary" onClick={() => onSendClick(inputValue)}>
                        Send
                        </Button>
                    </InputAdornment>
                ),
            }}
            />
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChatInterface;