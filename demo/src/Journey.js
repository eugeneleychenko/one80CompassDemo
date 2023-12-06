import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const Journey = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: '90px'  }}>
        {/* <Box sx={{ paddingRight: '90px', width: '100%' }}> */}
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
        <Box sx={{ my: 3 }}>
          <Typography variant="h4" align="left">Journaling</Typography>
          <Typography variant="body1" sx={{ mt: 3 }} align="left">
            "Problem Tree Analysis is a method used in Product Thinking to break down and understand complex problems by visualizing their causes and effects in a tree-like structure. This technique helps identify the root causes of a problem and its various consequences, thereby enabling a more structured approach to problem-solving. Here's how it typically unfolds:
            <ol>
              <li>Identifying the Core Problem: The process begins with defining the central problem, which is placed at the center or trunk of the tree.</li>
              <li>Mapping Causes (Roots): Below the core problem, you map out the root causes – factors that lead to the problem. This helps in understanding the underlying reasons behind the issue.</li>
              <li>Mapping Effects (Branches): Above the core problem, you identify the effects or consequences that stem from it. This illustrates the impact of the problem.</li>
              <li>Analyzing Relationships: By examining the connections between the roots, trunk, and branches, you can see how various factors interrelate and contribute to the problem.</li>
              <li>Developing Solutions: The final step involves using insights from the tree to formulate targeted solutions that address the root causes and mitigate the effects.</li>
            </ol>
            Problem Tree Analysis is particularly useful in product development for systematically dissecting complex issues and formulating effective, root-cause solutions"
          </Typography>
        </Box>
        <Paper elevation={3} sx={{ backgroundColor: 'action.hover', p: 3 }}>
          <Typography variant="h4" align="left">Statement Starters</Typography>
          <Typography variant="body1" sx={{ mt: 3 }} align="left">
            "Statement Starter in Product Thinking
            Statement Starter is a method used in Product Thinking to initiate productive discussions and brainstorming sessions about a product or service. It involves beginning conversations with carefully crafted statements that are open-ended and thought-provoking. These statements are designed to spark ideas, encourage creative thinking, and open up new perspectives on the product's features, user needs, or potential improvements.
            Key aspects of the Statement Starter method include:
            <ol>
              <li>Open-Ended Questions: The statements typically start with phrases like “How might we...”, “What if we...”, or “Imagine if...”. These open-ended questions foster a collaborative environment where team members feel encouraged to think freely and propose innovative solutions.</li>
              <li>Focus on Possibilities: The method emphasizes exploring a wide range of possibilities, rather than immediately seeking solutions. It's about expanding the thinking space and considering various aspects of a product from different angles.</li>
              <li>Collaborative Ideation: Statement Starters are particularly effective in group settings, promoting collective brainstorming and leveraging diverse viewpoints to enrich the discussion.</li>
            </ol>
            By using Statement Starters, teams can effectively kick-start the ideation process, leading to more innovative and user-centered product development strategies."
          </Typography>
        </Paper>
      </Box>
    </Box>
    // </Box>
  );
};

export default Journey;
