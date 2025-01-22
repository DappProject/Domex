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
    { question: "What can I build with Domex?", answer: "You can build your own AI tool." },
    { question: "Do I need coding skills to use Domex?", answer: "No coding skills are required to use Domex. The platform is designed to be user-friendly and accessible, allowing anyone to build their own AI tools effortlessly. With intuitive interfaces, pre-built templates, and easy customization options, you can create powerful AI tool without any programming knowledge." },
    { question: "Can I build non-Web3 projects with Domex?", answer: "Yes, you can build non-web3 projects." },
    { question: "How does Domex deploy my projects?", answer: "Deployment with Domex is fully automated, ensuring a seamless and hassle-free process. Once your project is ready, Domex handles everything from setting up the infrastructure to making your AI tool live, allowing you to focus on building and refining your tool without worrying about technical complexities." },
    { question: "Are the solutions built with Domex secure?", answer: "Yes, solutions built with Domex are secure. The platform prioritizes data privacy and implements robust security measures to protect your projects and user information, ensuring a safe and reliable environment for your AI tools." },
    { question: "Can I modify projects after they are built?", answer: "Yes, modifications are allowed." },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id="FAQs">
    <Box sx={{ backgroundColor: "#080808", color: "white", py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            background: "linear-gradient(to left, #ffffff, #2267d6)", // Gradient colors
            WebkitBackgroundClip: "text", // For Safari and Chrome
            WebkitTextFillColor: "transparent", // Makes the text transparent to show the gradient
            backgroundClip: "text", // For other browsers
            color: "transparent", // Fallback color
          }}
        >
          <h1 className="font-bold sm:text-9xl">
          FAQ
          </h1>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 4, color: "#cccccc" }}
        >
          Your questions about Domex, answered.
        </Typography>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            // <Grid
            //   item
            //   xs={12} // Mobile: Full width
            //   sm={6} // Tablet: Two columns
            //   key={index}
            // >
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
                  <Typography variant="h6" sx={{fontSize : "17px"}}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, py: 1 }}>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            // {/* </Grid> */}
          ))}
        </div>
      </Container>
    </Box>
    </section>
  );
};

export default Faq;
