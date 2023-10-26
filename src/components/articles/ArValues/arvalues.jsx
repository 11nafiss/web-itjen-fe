// Import Library
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { AccordionGroup, Accordion, AccordionDetails, AccordionSummary } from "@mui/joy";
import { accordionClasses } from "@mui/joy/Accordion";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import { accordionDetailsClasses } from "@mui/joy/AccordionDetails";
import { styled } from "@mui/material/styles";

// Import Assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Main Declaration
const ArValues = () => {
  const [index, setIndex] = React.useState(0);

  // MUI Styling CSS
  const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
    padding: "30px 50px 150px 50px",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      padding: "50px 30px",
    },
  }));

  const CustomTitle = styled(Typography)(() => ({
    fontSize: "32px",
    fontWeight: "700",
    textTransform: "capitalize",
    marginBottom: "50px",
  }));

  const SubTitle = styled(Typography)(() => ({
    fontSize: "28px",
    fontWeight: "600",
    textTransform: "capitalize",
    marginBottom: "20px",
    marginLeft: "20px",
  }));

  const CustomText = styled(Typography)(() => ({
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "full-width",
    margin: "20px",
  }));

  // Main Code
  return (
    <ContentBox>
      <CustomTitle>Nilai-nilai Itjen kemenkeu RI</CustomTitle>
      <AccordionGroup
        variant="outlined"
        transition="0.2s"
        sx={{
          maxWidth: "100%",
          borderRadius: "lg",
          [`& .${accordionClasses.root}`]: {
            marginTop: "0.5rem",
            transition: "0.2s ease",
            '& button:not([aria-expanded="true"])': {
              transition: "0.2s ease",
              paddingBottom: "0.625rem",
            },
            "& button:hover": {
              background: "transparent",
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: "background.level1",
            borderRadius: "md",
            borderBottom: "1px solid",
            borderColor: "background.level2",
          },
          [`& .${accordionSummaryClasses.button}:hover`]: {
            bgcolor: "transparent",
          },
          [`& .${accordionDetailsClasses.content}`]: {
            boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
            [`&.${accordionDetailsClasses.expanded}`]: {
              paddingBlock: "0.75rem",
            },
          },
        }}
      >
        <Accordion
          expanded={index === 0}
          onChange={(event, expanded) => {
            setIndex(expanded ? 0 : null);
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <SubTitle>1. Integritas</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <CustomText paragraph>Berpikir, berkata, berperilaku dan bertindak dengan baik dan benar serta memegang teguh kode etik dan prinsip mora.</CustomText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={index === 1}
          onChange={(event, expanded) => {
            setIndex(expanded ? 1 : null);
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <SubTitle>2. Profesionalisme</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <CustomText paragraph>Bekerja tuntas dan akurat atas dasar kompetensi terbaik dengan penuh tanggung jawab dan komitmen yang tinggi.</CustomText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={index === 2}
          onChange={(event, expanded) => {
            setIndex(expanded ? 2 : null);
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <SubTitle>3. Sinergi</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <CustomText paragraph>Membangun dan memastikan hubungan kerjasama internal yang produktif serta kemitraan yang harmonis dengan para pemangku kepentingan, untuk menghasilkan karya yang bermanfaat dan berkualitas.</CustomText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={index === 3}
          onChange={(event, expanded) => {
            setIndex(expanded ? 3 : null);
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <SubTitle>4. Pelayanan</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <CustomText paragraph>Memberikan layanan yang memenuhi kepuasan pemangku kepentingan yang dilakukan dengan sepenuh hati, transparan, cepat, akurat dan aman.</CustomText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={index === 4}
          onChange={(event, expanded) => {
            setIndex(expanded ? 4 : null);
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <SubTitle>5. Kesempurnaan</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <CustomText paragraph>Senantiasa melakukan upaya perbaikan di segala bidang untuk menjadi dan memberikan yang terbaik.</CustomText>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </ContentBox>
  );
};

// Export Code
export default ArValues;
