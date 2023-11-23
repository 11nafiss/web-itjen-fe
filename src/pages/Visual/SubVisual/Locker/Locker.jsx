// Import Library
import { useEffect } from "react";
import { Box, Typography, Container, Divider, Pagination, PaginationItem } from "@mui/material";
import { Button, AspectRatio, Card, CardOverflow } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Components
import { Footer, HeadVisual } from "../../../../components/components";

// Import Assets
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getVitjenAll, getVitjenAllCount } from "../../../../features/actions/vitjen.action";
import { BASE_URL } from "../../../../services/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";

// MUI Styling CSS
const BackgroundImg = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  margin: "0px",
  padding: "0px",
  backgroundColor: "#000000",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(3),
  flexDirection: "column",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "700",
  margin: "20px",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

const CustomTDivider = styled(Divider)(({ theme }) => ({
  margin: "3px 0px",
  borderColor: "#fff",
  borderWidth: "4px",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

const Gridbox = styled(Box)(() => ({
  height: "100%",
  paddingTop: "30px",
  display: "grid",
  gap: "50px",
  width: "100%",
}));

const ButtonVitjen = styled(Button)(() => ({
  width: "100px",
  height: "50px",
  color: "#fff",
  fontSize: "18px",
  borderColor: "#fff",
  borderWidth: "4px",
  marginTop: "10px",
  boxShadow: "none",
  cursor: "pointer",
  transition: ".5s ease all",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#252525",
    fontWeight: "bold",
  },
}));

const CustomPagi = styled(Pagination)(() => ({
  color: "#fff",
  margin: "30px 0px",
}));

const CustomPagiItem = styled(PaginationItem)(() => ({
  color: "#fff",
}));

const Locker = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const take = 6;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1");

  useEffect(() => {
    dispatch(getVitjenAll({ take, page }));
    dispatch(getVitjenAllCount());
  }, [dispatch, page]);

  const dataVitjen = useAppSelector((state) => state.vitjen.vitjenAll.dataVitjen);
  const jumlahVitjen = useAppSelector((state) => state.vitjen.vitjenAllCount.dataVitjen);

  const handlePageChange = (event, value) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value);

    dispatch(getVitjenAll({ take, page: value }));
    dispatch(getVitjenAllCount());
  };

  return (
    <BackgroundImg>
      <div className="header-wrapper">
        <HeadVisual mode="white" />
      </div>
      <main style={{ padding: "80px 0px" }}>
        <CustomContainer>
          <CustomTitle>Daftar Visual Auditoria</CustomTitle>
          <CustomTDivider />
          <Gridbox sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" } }}>
            {dataVitjen.map((obj) => (
              <Card key={obj.id} variant="outlined" sx={{ width: 350, gap: "0px", height: "100%", backgroundColor: "#000000", borderColor: "#000000" }}>
                <CardOverflow>
                  <AspectRatio ratio="16/9">
                    <img src={`${BASE_URL}images/${obj.image}`} loading="lazy" alt="" />
                  </AspectRatio>
                </CardOverflow>
                <Box sx={{ display: "flex", justifyContent: "center", mt: "35px" }}>
                  <Typography level="body3" sx={{ fontWeight: "bold", fontSize: "32px", color: "#fff" }}>
                    {obj.title}
                  </Typography>
                </Box>
                <Typography level="h2" sx={{ fontSize: "20px", my: "10px", color: "#fff", textAlign: "center" }}>
                  {obj.deskripsi}
                </Typography>
                <Link to={`/visual/lihat/${obj.id}`}>
                  <ButtonVitjen variant="outlined">LIHAT</ButtonVitjen>
                </Link>
              </Card>
            ))}
          </Gridbox>
          <div className="pagination">
            <CustomPagi
              color="secondary"
              size="large"
              defaultPage={1}
              page={page}
              count={Math.ceil(jumlahVitjen / take)}
              onChange={handlePageChange}
              renderItem={(item) => <CustomPagiItem component={Link} slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
            />
          </div>
        </CustomContainer>
      </main>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </BackgroundImg>
  );
};

export default Locker;
