// Import Library
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Tree, TreeNode } from "react-organizational-chart";
import { Grid, Container, Box, Typography } from "@mui/material";
import { Avatar, Button } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getPlacemData } from "../../../../features/actions/placem.action";
import { BASE_URL } from "../../../../services/api";
import { BackButton, Header } from "../../../../components/components";

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
  height: "150px",
  width: "320px",
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
  marginLeft: "20px",
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
  [theme.breakpoints.down("md")]: {
    padding: "50px 30px",
  },
}));

// Main Declaration
const OrganSub = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { eselon } = useParams();
  const eselonId = parseInt(eselon);

  console.log("ini id", id);

  useEffect(() => {
    dispatch(getPlacemData());
  }, [dispatch]);

  const dataPlacem = useAppSelector((state) => state.placem.placemAll.dataPlacem);
  const pejabatEs2 = dataPlacem.filter((item) => item.eselon === 2);
  const pejabatEs3 = dataPlacem.filter((item) => item.eselon === 3);
  const pejabatEs4 = dataPlacem.filter((item) => item.eselon === 4);

  if (dataPlacem.length === 0) {
    return null;
  }

  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="white" />
      </div>
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
                      {eselonId === 2
                        ? pejabatEs2
                            .filter((p2) => p2.id === parseInt(id))
                            .map((p2) => (
                              <Tree
                                key={p2.id}
                                lineWidth={"3px"}
                                lineHeight={"30px"}
                                lineColor={"black"}
                                lineBorderRadius={"10px"}
                                label={
                                  <Link to={`/pejabat/${p2.id}`} className="link">
                                    <BgHorizontal color="warning">
                                      <ProfileBox sx={{ height: "90%" }}>
                                        <Avatar alt={p2.jabatan} src={`${BASE_URL}images/${p2.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                        <NbHorizontal>
                                          <Pfposition sx={{ color: "#252525", fontSize: "16px" }}>{p2.jabatan}</Pfposition>
                                          <Pfname sx={{ fontSize: "16px" }}> {p2.nama}</Pfname>
                                        </NbHorizontal>
                                      </ProfileBox>
                                    </BgHorizontal>
                                  </Link>
                                }
                              >
                                {pejabatEs3
                                  .filter((p3) => p3.atasanId === p2.id)
                                  .map((p3) => {
                                    if (p3.hasSubJabatan) {
                                      return (
                                        <TreeNode
                                          key={p3.id}
                                          label={
                                            <Link to={`/organisasi/${p3.eselon}/${p3.id}`} className="link">
                                              <BgVertical color="warning">
                                                <ProfileBox>
                                                  <NbVertical>
                                                    <Avatar alt={p3.jabatan} src={`${BASE_URL}images/${p3.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                                    <Pfname>{p3.nama}</Pfname>
                                                  </NbVertical>
                                                </ProfileBox>
                                                <Pfposition>{p3.jabatan}</Pfposition>
                                              </BgVertical>
                                            </Link>
                                          }
                                        />
                                      );
                                    } else {
                                      return (
                                        <TreeNode
                                          key={p3.id}
                                          label={
                                            <Link to={`/pejabat/${p3.id}`} className="link">
                                              <BgVertical color="warning">
                                                <ProfileBox>
                                                  <NbVertical>
                                                    <Avatar alt={p3.jabatan} src={`${BASE_URL}images/${p3.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                                    <Pfname>{p3.nama}</Pfname>
                                                  </NbVertical>
                                                </ProfileBox>
                                                <Pfposition>{p3.jabatan}</Pfposition>
                                              </BgVertical>
                                            </Link>
                                          }
                                        />
                                      );
                                    }
                                  })}
                              </Tree>
                            ))
                        : pejabatEs3
                            .filter((p3) => p3.id === parseInt(id))
                            .map((p3) => (
                              <Tree
                                key={p3.id}
                                lineWidth={"3px"}
                                lineHeight={"30px"}
                                lineColor={"black"}
                                lineBorderRadius={"10px"}
                                label={
                                  <Link to={`/pejabat/${p3.id}`} className="link">
                                    <BgHorizontal color="warning">
                                      <ProfileBox sx={{ height: "90%" }}>
                                        <Avatar alt={p3.jabatan} src={`${BASE_URL}images/${p3.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                        <NbHorizontal>
                                          <Pfposition sx={{ color: "#252525", fontSize: "14px" }}>{p3.jabatan}</Pfposition>
                                          <Pfname sx={{ fontSize: "16px" }}> {p3.nama}</Pfname>
                                        </NbHorizontal>
                                      </ProfileBox>
                                    </BgHorizontal>
                                  </Link>
                                }
                              >
                                {pejabatEs4
                                  .filter((p4) => p4.atasanId === p3.id)
                                  .map((p4) => {
                                    if (p4.hasSubJabatan) {
                                      return (
                                        <TreeNode
                                          key={p4.id}
                                          label={
                                            <Link to={`/organisasi/${p4.eselon}/${p4.id}`} className="link">
                                              <BgVertical color="warning">
                                                <ProfileBox>
                                                  <NbVertical>
                                                    <Avatar alt={p4.jabatan} src={`${BASE_URL}images/${p4.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                                    <Pfname>{p4.nama}</Pfname>
                                                  </NbVertical>
                                                </ProfileBox>
                                                <Pfposition>{p4.jabatan}</Pfposition>
                                              </BgVertical>
                                            </Link>
                                          }
                                        />
                                      );
                                    } else {
                                      return (
                                        <TreeNode
                                          key={p4.id}
                                          label={
                                            <Link to={`/pejabat/${p4.id}`} className="link">
                                              <BgVertical color="warning">
                                                <ProfileBox>
                                                  <NbVertical>
                                                    <Avatar alt={p4.jabatan} src={`${BASE_URL}images/${p4.pathGambar}`} size="lg" sx={{ width: "70px", height: "70px" }} />
                                                    <Pfname>{p4.nama}</Pfname>
                                                  </NbVertical>
                                                </ProfileBox>
                                                <Pfposition>{p4.jabatan}</Pfposition>
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
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "left", mt: "50px" }}>
                    <BackButton />
                  </Box>
                  </ContentBox>
                </GridCenter>
              </Grid>
            </CustomContainer>
          </BoxBg>
        </main>
      </Background>
    </div>
  );
};

// Export Code
export default OrganSub;
