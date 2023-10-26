// Import Library
import * as React from 'react';
import { Box, List, ListItemText, Typography } from "@mui/material";
import { AccordionGroup, Accordion, AccordionDetails, AccordionSummary } from "@mui/joy";
import { accordionClasses } from "@mui/joy/Accordion";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import { accordionDetailsClasses } from "@mui/joy/AccordionDetails";
import { styled } from "@mui/material/styles";

// Import Assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Main Declaration
const ArVision = () => {
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
    marginLeft: "20px"
  }));

  const CustomText = styled(Typography)(() => ({
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "full-width",
    margin: "20px",
  }));

  const SubText = styled(Typography)(() => ({
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "full-width",
    margin: "20px",
  }));

  const SubList = styled(ListItemText)(() => ({
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "full-width",
    marginBottom: "10px",
    marginLeft: "20px",
    padding: "0px",
  }));

  // Main Code
  return (
    <ContentBox>
      <CustomTitle>inspektorat jenderal kemenkeu RI</CustomTitle>
      <AccordionGroup
        variant="outlined"
        transition="0.2s"
        sx={{
          maxWidth: "100%",
          borderRadius: "lg",
          [`& .${accordionClasses.root}`]: {
            marginTop: '0.5rem',
            transition: '0.2s ease',
            '& button:not([aria-expanded="true"])': {
              transition: '0.2s ease',
              paddingBottom: '0.625rem',
            },
            '& button:hover': {
              background: 'transparent',
            },
          },
          [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
            bgcolor: 'background.level1',
            borderRadius: 'md',
            borderBottom: '1px solid',
            borderColor: 'background.level2',
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
            <SubTitle>Visi</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <CustomText paragraph>
              Menjadi Trusted Advisor Dalam Rangka Mendukung Visi Kementerian Keuangan Menjadi Pengelola Keuangan Negara untuk Mewujudkan Perekonomian Indonesia yang Produktif, Kompetitif, Inklusif, dan Berkeadilan.
            </CustomText>
          </AccordionDetails>
        </Accordion>
        <Accordion
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <SubTitle>Misi</SubTitle>
          </AccordionSummary>
          <AccordionDetails>
            <SubText>Inspektorat Jenderal mendukung seluruh Misi Kementerian Keuangan dengan cara memberikan asurans, advis, dan wawasan yang berbasis risiko dan objektif dalam bidang:</SubText>
            <List>
              <SubList>1. Tata Kelola: Mewujudkan sistem pengendalian internal, manajemen risiko dan tata kelola yang baik.</SubList>
              <SubList>2. Efisiensi dan Efektivitas: Mendorong efisiensi dan efektivitas pengelolaan Kementerian Keuangan.</SubList>
              <SubList>3. Kepatuhan: Mendorong ketaatan terhadap peraturan perundang-undangan.</SubList>
              <SubList>4. Akuntabilitas: Mewujudkan pengelolaan keuangan yang berkualitas, transparan dan dapat dipertanggungjawabkan.</SubList>
              <SubList>5. Pelayanan: Mendukung reformasi birokrasi untuk meningkatkan pelayanan publik.</SubList>
              <SubList>6. Integritas: Mencegah dan menindak penyimpangan dan penyalahgunaan wewenang.</SubList>
            </List>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </ContentBox>
  );
};

// Export Code
export default ArVision;
