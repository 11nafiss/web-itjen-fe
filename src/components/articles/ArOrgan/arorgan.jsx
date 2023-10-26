// Import Library
import {
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tree, TreeNode } from "react-organizational-chart";
import { Link } from "react-router-dom";

// Import Assets
import { 
    BoxIrjen, 
    BoxSekre, 
    BoxIrtor1, 
    BoxIrtor2, 
    BoxIrtor3, 
    BoxIrtor4, 
    BoxIrtor5, 
    BoxIrtor6, 
    BoxIrtor7, 
    BoxIrtorBi, 
    BoxBkkh, 
    BoxBoahp, 
    BoxBpk, 
    BoxBsdm, 
    BoxBsip, 
    BoxBuk 
} from "../../organizes/organizes";

const ArOrgan = () => {
  const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "30px 50px 150px 50px",
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
      direction:"ltr"
    },
  }));

  return (
    <ContentBox>
      <CustomTitle>Struktur Organisasi Itjen kemenkeu RI</CustomTitle>
      <Orgchart>
        <Tree lineWidth={"3px"} lineHeight={"30px"} lineColor={"black"} lineBorderRadius={"10px"} label={<Link to="/profil/pejabat/irjen" className="link"><BoxIrjen /></Link>}>
          <TreeNode label={<BoxSekre />}>
            <TreeNode label={<BoxBkkh />} />
            <TreeNode label={<BoxBoahp />} />
            <TreeNode label={<BoxBpk/>} />
            <TreeNode label={<BoxBsdm />} />
            <TreeNode label={<Link to="/profil/organisasi/bsip" className="link"><BoxBsip /></Link>} />
            <TreeNode label={<BoxBuk />} />
          </TreeNode>
          <TreeNode label={<BoxIrtor1 />}>
            <TreeNode label={<BoxIrtor2 />}>
              <TreeNode label={<BoxIrtor3 />}>
                <TreeNode label={<BoxIrtor4 />}>
                  <TreeNode label={<BoxIrtor5 />}>
                    <TreeNode label={<BoxIrtor6 />}>
                      <TreeNode label={<BoxIrtor7 />}>
                        <TreeNode label={<BoxIrtorBi />} />
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </Tree>
      </Orgchart>
    </ContentBox>
  );
};

export default ArOrgan;
