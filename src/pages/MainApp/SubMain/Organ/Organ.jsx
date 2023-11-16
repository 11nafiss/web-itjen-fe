// Import Library
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Tree, TreeNode } from "react-organizational-chart";
import { Grid, Container, Box, Typography } from "@mui/material";
import { Avatar, Button } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getPlacemAllTake } from "../../../../features/actions/placem.action";
import { BASE_URL } from "../../../../services/api";

// Import Assets
import { ImgIrjen } from "../../../../assets/assets";

// Import Assets
import { BoxIrjen, BoxSekre, BoxIrtor1, BoxIrtor2, BoxIrtor3, BoxIrtor4, BoxIrtor5, BoxIrtor6, BoxIrtor7, BoxIrtorBi, BoxBkkh, BoxBoahp, BoxBpk, BoxBsdm, BoxBsip, BoxBuk } from "../../../../components/components";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#F05023",
  color: "#fff",
}));

const BoxBg = styled(Box)(() => ({
  backgroundColor: "#fff",
  color: "#252525",
  borderRadius: "45px 45px 0px 0px",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  gap: theme.spacing(5),
  padding: "50px 0px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const GridCenter = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  margin: "10px",
  marginLeft: "60px",
  color: "#08347C",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px",
    marginLeft: "0px",
  },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "65px",
  fontWeight: "700",
  margin: "50px 0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "45px",
  },
}));

const Orgchart = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    overflowX: "auto",
    direction: "ltr",
  },
}));

const BgHorizontal = styled(Button)(() => ({
  display: "flex",
  height: "90px",
  width: "260px",
  backgroundColor: "#041D44",
  alignItems: "start",
  borderColor: "#041D44",
  borderRadius: "15px",
  borderWidth: "5px",
  padding: "5px",
  margin: "auto",
}));

const ProfileBox = styled(Box)(() => ({
  display: "flex",
  padding: "10px",
  height: "90%",
  width: "100%",
  backgroundColor: "#fff",
  alignItems: "center",
  borderRadius: "15px",
}));

const NbHorizontal = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  marginLeft: "15px",
}));

const Pfposition = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "700",
}));

const Pfname = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "500",
}));

const BgVertical = styled(Button)(() => ({
  display: "flex",
  height: "200px",
  width: "90px",
  backgroundColor: "#F05023",
  alignItems: "start",
  borderColor: "#F05023",
  borderRadius: "15px",
  borderWidth: "5px",
  padding: "5px",
  margin: "auto",
}));

const NbVertical = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "15px",
  width: "100%",
}));

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

// Main Declaration
const Organ = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const take = 20;

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    dispatch(getPlacemAllTake({ take, page }));
  }, [dispatch, take, searchParams]);

  const dataPlacem = useAppSelector((state) => state.placem.placemAllTake.dataPlacem);
  const Eselon2 = dataPlacem.filter((item) => item.eselon === 2);
  const Eselon3 = dataPlacem.filter((item) => item.eselon === 3);

  if(dataPlacem.length === 0) {
    return null
  } 

  // Main Code
  return (
    <Background>
      <main style={{ paddingTop: "90px" }}>
        <Background>
          <CustomContainer>
            <Grid container spacing={1}>
              <GridCenter item xs={12}>
                <CustomTitle>Organisasi</CustomTitle>
              </GridCenter>
            </Grid>
          </CustomContainer>
        </Background>
        <BoxBg>
          <CustomContainer>
            <SubText>Struktur Organisasi</SubText>
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ justifyContent: "center" }}>
              <GridCenter item>
                <ContentBox>
                  <Orgchart>
                    <Tree
                      lineWidth={"3px"}
                      lineHeight={"30px"}
                      lineColor={"black"}
                      lineBorderRadius={"10px"}
                      label={
                        <Link to={`/pejabat/${dataPlacem[0].id}`} className="link">
                          <BgHorizontal color="warning">
                            <ProfileBox>
                              <Avatar alt="inspektorat jenderal" src={`${BASE_URL}images/${dataPlacem[0].pathGambar}`} size="lg" />
                              <NbHorizontal>
                                <Pfposition>{dataPlacem[0].jabatan}</Pfposition>
                                <Pfname>{dataPlacem[0].nama}</Pfname>
                              </NbHorizontal>
                            </ProfileBox>
                          </BgHorizontal>
                        </Link>
                      }
                    >
                      <TreeNode label={<BoxSekre />}>
                        <TreeNode label={<BoxBkkh />} />
                        <TreeNode label={<BoxBoahp />} />
                        <TreeNode label={<BoxBpk />} />
                        <TreeNode label={<BoxBsdm />} />
                        <TreeNode
                          label={
                            <Link to="/profil/organisasi/bsip" className="link">
                              <BoxBsip />
                            </Link>
                          }
                        />
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
              </GridCenter>
            </Grid>
          </CustomContainer>
        </BoxBg>
      </main>
    </Background>
  );
};

// Export Code
export default Organ;
