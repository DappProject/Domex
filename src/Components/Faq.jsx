import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Faq = () => {
  const [expanded, setExpanded] = useState(false); // State to track expanded accordion

  const faqItems = [
    { question: "What can I build with Domex?", answer: "You can build X, Y, Z." },
    { question: "Do I need coding skills to use Domex?", answer: "No coding skills are required." },
    { question: "Can I build non-Web3 projects with Domex?", answer: "Yes, you can." },
    { question: "How does Domex deploy my projects?", answer: "Deployment is automated." },
    { question: "Are the solutions built with Domex secure?", answer: "Yes, they are secure." },
    { question: "Can I modify projects after they are built?", answer: "Yes, modifications are allowed." },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: "#080808", color: "white", py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: "108px",
            textAlign: "center",
            mb: 2,
            background: "linear-gradient(to left, #ffffff, #2267d6)", // Gradient colors
            WebkitBackgroundClip: "text", // For Safari and Chrome
            WebkitTextFillColor: "transparent", // Makes the text transparent to show the gradient
            backgroundClip: "text", // For other browsers
            color: "transparent", // Fallback color
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 4, color: "#cccccc" }}
        >
          Your questions about Domex, answered.
        </Typography>
        <Grid container spacing={2}>
          {faqItems.map((item, index) => (
            <Grid
              item
              xs={12} // Mobile: Full width
              sm={6} // Tablet: Two columns
              key={index}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  backgroundColor: "#101217",
                  color: "white",
                  borderRadius: 1,
                  "&:before": { display: "none" }, // Remove the MUI divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ color: "#7fbdfc" }} />}
                  sx={{ px: 2, py: 1 }}
                >
                  <Typography variant="h6">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, py: 1 }}>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
