// Import Library
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tree, TreeNode } from "react-organizational-chart";
import { Grid, Container, Box, Typography } from "@mui/material";
import { Avatar, Button } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getPlacemData } from "../../../../features/actions/placem.action";
import { BASE_URL } from "../../../../services/api";

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
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    direction: "ltr",
  },
}));

const BgHorizontal = styled(Button)(() => ({
  display: "flex",
  height: "150px",
  width: "300px",
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
  height: "150px",
  width: "100%",
  backgroundColor: "#fff",
  alignItems: "center",
  borderRadius: "15px",
}));

const NbHorizontal = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  marginLeft: "10px",
  gap: "5px",
}));

const Pfposition = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "700",
  color: "#fff",
}));

const Pfname = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "500",
  color: "#252525",
}));

const BgVertical = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  minHeight: "240px",
  width: "150px",
  backgroundColor: "#F05023",
  alignItems: "center",
  borderColor: "#F05023",
  borderRadius: "15px",
  borderWidth: "5px",
  padding: "5px",
  paddingBottom: "30px",
  margin: "auto",
  gap: "15px",
}));

const NbVertical = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "10px",
  width: "100%",
  height: "100%",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "30px 50px 150px 50px",
  height: "100%",
  width: "100%",
  backgroundColor: "#fff",
  alignItems: "left",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "50px 30px",
  },
}));

// Main Declaration
const Organ = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlacemData());
  }, [dispatch]);

  const dataPlacem = useAppSelector((state) => state.placem.placemAll.dataPlacem);
  const pejabatEs1 = dataPlacem.filter((item) => item.eselon === 1);
  const pejabatEs2 = dataPlacem.filter((item) => item.eselon === 2);

  if (dataPlacem.length === 0) {
    return null;
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
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ justifyContent: "center", overflowX: { sm: "scroll", lg: "visible" } }}>
              <GridCenter item>
                <ContentBox>
                  <Orgchart>
                    {pejabatEs1.map((p1) => (
                      <Tree
                        key={p1.id}
                        lineWidth={"3px"}
                        lineHeight={"30px"}
                        lineColor={"black"}
                        lineBorderRadius={"10px"}
                        label={
                          <Link to={`/pejabat/${p1.id}`} className="link">
                            <BgHorizontal color="warning">
                              <ProfileBox sx={{ height: "90%" }}>
                                <Avatar alt={p1.jabatan} src={`${BASE_URL}images/${p1.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                <NbHorizontal>
                                  <Pfposition sx={{ color: "#252525", fontSize: "16px" }}>{p1.jabatan}</Pfposition>
                                  <Pfname sx={{ fontSize: "16px" }}> {p1.nama}</Pfname>
                                </NbHorizontal>
                              </ProfileBox>
                            </BgHorizontal>
                          </Link>
                        }
                      >
                        {pejabatEs2
                          .filter((p2) => p2.atasanId === p1.id)
                          .map((p2) => {
                            if (p2.hasSubJabatan) {
                              return (
                                <TreeNode
                                  key={p2.id}
                                  label={
                                    <Link to={`/organisasi/${p2.eselon}/${p2.id}`} className="link">
                                      <BgVertical color="warning">
                                        <ProfileBox>
                                          <NbVertical>
                                            <Avatar alt={p2.jabatan} src={`${BASE_URL}images/${p2.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                            <Pfname>{p2.nama}</Pfname>
                                          </NbVertical>
                                        </ProfileBox>
                                        <Pfposition>{p2.jabatan}</Pfposition>
                                      </BgVertical>
                                    </Link>
                                  }
                                />
                              );
                            } else {
                              return (
                                <TreeNode
                                  key={p2.id}
                                  label={
                                    <Link to={`/pejabat/${p2.id}`} className="link">
                                      <BgVertical color="warning">
                                        <ProfileBox>
                                          <NbVertical>
                                            <Avatar alt={p2.jabatan} src={`${BASE_URL}images/${p2.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                            <Pfname>{p2.nama}</Pfname>
                                          </NbVertical>
                                        </ProfileBox>
                                        <Pfposition>{p2.jabatan}</Pfposition>
                                      </BgVertical>
                                    </Link>
                                  }
                                />
                              );
                            }
                          })}
                      </Tree>
                    ))}
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
