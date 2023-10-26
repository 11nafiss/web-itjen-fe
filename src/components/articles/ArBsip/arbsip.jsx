// Import Library
import {
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tree, TreeNode } from "react-organizational-chart";

// Import Components
import { 
    BoxKaBsip, 
    BoxSubOti, 
    BoxSubPdki, 
    BoxSubPkti, 
    BoxSubPsi 
} from "../../organizes/organizes";
import { BackButton } from "../../atoms/atoms";

const ArBsip = () => {
  const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "50px 50px 150px 50px",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "left",
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

  const Orgchart = styled(Box)(({ theme }) => ({
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      overflowX: "auto",
      direction: "ltr",
    },
  }));

  const BoxButton = styled(Box)(() => ({
    marginTop: "100px"
  }));

  return (
    <ContentBox>
      <CustomTitle>Struktur Organisasi Itjen kemenkeu RI</CustomTitle>
      <Orgchart>
        <Tree lineWidth={"3px"} lineHeight={"30px"} lineColor={"black"} lineBorderRadius={"10px"} label={<BoxKaBsip />}>
          <TreeNode label={<BoxSubPkti />} />
          <TreeNode label={<BoxSubPsi />} />
          <TreeNode label={<BoxSubOti />} />
          <TreeNode label={<BoxSubPdki />} />
        </Tree>
      </Orgchart>
      <BoxButton>
        <BackButton />
      </BoxButton>
    </ContentBox>
  );
};

export default ArBsip;
