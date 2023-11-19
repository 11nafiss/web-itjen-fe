// Import Library
import { useCallback, useEffect, useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { FormHelperText, Button, Input, FormControl, FormLabel } from "@mui/joy";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createCategory, editCategory } from "../../../../features/actions/category.action";
import { categoryService } from "../../../../services/category.service";

// MUI Styling CSS
const Kotak = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "505px",
  padding: "30px",
}));

const Judul = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  height: "100%",
  margin: "10px",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",
}));

const GridFlex = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px 30px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0px",
  },
}));

// Main Declaration
const CrCategory = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState(id);
  console.log("ini id", categoryId);
  const [categoryName, setCategoryName] = useState("");

  const { errorMessage } = useAppSelector((state) => state.category.createCategory);

  const fetchCategoryById = useCallback(async () => {
    const response = await categoryService.getCategoryById(id);
    setCategoryId(response.categoryId);
    setCategoryName(response.categoryName);
  }, [id]);

  useEffect(() => {
    if (props.mode === "Edit") {
      fetchCategoryById();
    }
  }, [fetchCategoryById, props, dispatch]);

  const handleUploadCategory = (e) => {
    e.preventDefault();

    let tableConfig = {
      categoryId: id,
      categoryName,
    };

    if (props.mode === "Edit") {
      dispatch(editCategory({ id, tableConfig }));
      console.log("ini table", tableConfig);
    } else {
      dispatch(createCategory(tableConfig));
    }

    navigate("/dashboard/kategori");
    navigate(0);
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>{props.mode} Kategori</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadCategory}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl required sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Nama Kategori
                    </FormLabel>
                    <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} size="lg" name="Size" placeholder="Tulis..." sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                </GridFlex>
                <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                    <Button
                      type="submit"
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        height: "48px",
                        fontSize: "16px",
                      }}
                    >
                      Submit
                    </Button>
                    {errorMessage && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Upload Kategori Gagal</FormHelperText>}
                  </Box>
                </GridFlex>
              </SpaceGrid>
            </form>
          </Kotak>
        </Grid>
      </Grid>
    </Box>
  );
};

CrCategory.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrCategory;
