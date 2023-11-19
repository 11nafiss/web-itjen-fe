// Import Library
import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, Table, Sheet, FormControl, FormLabel, Select, Option, IconButton, Input } from "@mui/joy";

// Import Components
import { AddButton } from "../../../../components/components";

// import Assets
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FaSearch } from "react-icons/fa";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { deleteMenu, getMenuData, getMenuSearchAll } from "../../../../features/actions/menu.action";
import { menuSearchAllSlice, menuSlice } from "../../../../features/slice/menu.slice";

// MUI Styling CSS
const CustomBox = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1400px",
  minHeight: "555px",
  padding: "30px",
}));

const CustomTitle = styled(Typography)(() => ({
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

const GridFlex = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
}));

// Main Declaration
const MenuDash = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const take = 8;

  const dataSearch = useAppSelector((state) => state.menu.menuSearchAll.dataMenu);
  const dataMenu = useAppSelector((state) => state.menu.menuAll.dataMenu);
  const dataPerPage = useAppSelector((state) => state.menu.menuAll.dataPerPage);
  const currentPage = useAppSelector((state) => state.menu.menuAll.currentPage);

  const totalPages = Math.ceil(dataMenu.length / dataPerPage);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;

  const visibleData = dataMenu.slice(indexOfFirstPage, indexOfLastPage);

  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(menuSlice.actions.onNavigatePrev());
    }
  };

  const navigateNext = () => {
    if (currentPage !== totalPages) {
      dispatch(menuSlice.actions.onNavigateNext());
    }
  };


  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const keyword = searchParams.get("keyword");
    dispatch(getMenuSearchAll({ take, page, keyword }));
    dispatch(getMenuData());
  }, [dispatch]);

  function labelDisplayedRows({ from, to, count }) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  }

  const handleChangeRowsPerPage = (event, newValue) => {
    dispatch(menuSlice.actions.onChangeDataPerPage(newValue));
    dispatch(menuSlice.actions.onClickCurrentPage(1));
  };

  const getLabelDisplayedRowsTo = () => {
    if (dataMenu.length === -1) {
      return (currentPage - 1 + 1) * dataPerPage;
    }
    return dataPerPage === -1 ? dataMenu.length : Math.min(dataMenu.length, (currentPage - 1 + 1) * dataPerPage);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const page = searchParams.get("page") ?? 1;
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("keyword", searchInput);

    dispatch(menuSearchAllSlice.actions.setSearchKeyword(searchInput));
    dispatch(getMenuSearchAll({ take, page, keyword: searchInput }));
    setSearchParams(updatedSearchParams.toString());

    if (searchInput === "" || searchInput == null) {
      navigate("/dashboard/menus?page=1");
    }
  }

  const handleDeleteMenu = (id) => {
    const confirmation = confirm("Apakah anda yakin untuk menghapus data ini?");

    navigate(0);

    if (confirmation) {
      dispatch(deleteMenu(id));
    }
  };

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CustomBox>
            <CustomTitle>Daftar Navigasi</CustomTitle>
            <Divider sx={{ borderSize: "20px" }} />
            <SpaceGrid container>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "left" } }}>
                <Link to="/dashboard/menus/tambah">
                  <AddButton />
                </Link>
              </GridFlex>
              <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "right" } }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                  <FormControl
                    sx={() => ({
                      display: "flex",
                      justifyContent: "right",
                      width: { xs: "100%", md: "300px" },
                    })}
                  >
                    <Input
                      placeholder="Cari"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      endDecorator={
                        <IconButton color="neutral" sx={{ width: "100%", height: "100%" }}>
                          <FaSearch />
                        </IconButton>
                      }
                      sx={{
                        width: "100%",
                        height: "30px",
                        borderColor: "#252525",
                        borderWidth: "3px",
                        margin: "12px 0px",
                      }}
                    />
                  </FormControl>
                </form>
              </GridFlex>
              <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" }, height: "100%" }}>
                <Box sx={{ height: "100%", paddingTop: "30px" }}>
                  <Sheet
                    variant="outlined"
                    sx={{
                      "--TableCell-height": "40px",
                      // the number is the amount of the header rows.
                      "--TableHeader-height": "calc(1 * var(--TableCell-height))",
                      "--Table-firstColumnWidth": "80px",
                      "--Table-lastColumnWidth": "144px",
                      // background needs to have transparency to show the scrolling shadows
                      "--TableRow-stripeBackground": "rgba(0 0 0 / 0.04)",
                      "--TableRow-hoverBackground": "rgba(0 0 0 / 0.08)",
                      overflow: "auto",
                      background: (theme) =>
                        `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
                      backgroundSize: "40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))",
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "local, local, scroll, scroll",
                      backgroundPosition:
                        "var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)",
                      backgroundColor: "background.surface",
                    }}
                  >
                    <Table
                      borderAxis="bothBetween"
                      stripe="odd"
                      hoverRow
                      sx={{
                        "& tr > *:first-child": {
                          position: "sticky",
                          left: 0,
                          boxShadow: "1px 0 var(--TableCell-borderColor)",
                          bgcolor: "background.surface",
                        },
                        "& tr > *:last-child": {
                          position: "sticky",
                          right: 0,
                          bgcolor: "var(--TableCell-headBackground)",
                        },
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={{ width: 50 }}>No</th>
                          <th style={{ width: 200 }}>Nama</th>
                          <th style={{ width: 100 }}>Menu Level</th>
                          <th style={{ width: 100 }}>Menu Parent</th>
                          <th style={{ width: 300 }}>Link</th>
                          <th aria-label="last" style={{ width: "var(--Table-lastColumnWidth)" }}>
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataSearch.length === 0 &&
                          visibleData.map((obj) => (
                            <tr key={obj.menuId}>
                              <td>{obj.menuId}</td>
                              <td>{obj.menuText}</td>
                              <td>{obj.menuLevel}</td>
                              <td>{obj.parentId}</td>
                              <td>{obj.link}</td>
                              <td>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                  <Link to={`/dashboard/menus/edit/${obj.menuId}`} style={{ width: "100%" }}>
                                    <Button variant="soft" color="warning" sx={{ width: "100%", marginInline: "auto" }}>
                                      Edit
                                    </Button>
                                  </Link>
                                  <Button onClick={() => handleDeleteMenu(obj.menuId)} variant="soft" color="danger" sx={{ width: "100%", marginInline: "auto" }}>
                                    Hapus
                                  </Button>
                                </Box>
                              </td>
                            </tr>
                          ))}
                        {dataSearch.length !== 0 &&
                          dataSearch.map((obj) => (
                            <tr key={obj.menuId}>
                              <td>{obj.menuId}</td>
                              <td>{obj.menuText}</td>
                              <td>{obj.menuLevel}</td>
                              <td>{obj.parentId}</td>
                              <td>{obj.link}</td>
                              <td>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                  <Link to={`/dashboard/menus/edit/${obj.menuId}`} style={{ width: "100%" }}>
                                    <Button variant="soft" color="warning" sx={{ width: "100%", marginInline: "auto" }}>
                                      Edit
                                    </Button>
                                  </Link>
                                  <Button onClick={() => handleDeleteMenu(obj.menuId)} variant="soft" color="danger" sx={{ width: "100%", marginInline: "auto" }}>
                                    Hapus
                                  </Button>
                                </Box>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={6}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                justifyContent: "flex-end",
                              }}
                            >
                              <FormControl orientation="horizontal" size="sm">
                                <FormLabel>Rows per page:</FormLabel>
                                <Select onChange={handleChangeRowsPerPage} value={dataPerPage}>
                                  <Option value={5}>5</Option>
                                  <Option value={10}>10</Option>
                                  <Option value={25}>25</Option>
                                </Select>
                              </FormControl>
                              <Typography textAlign="center" sx={{ minWidth: 80 }}>
                                {labelDisplayedRows({
                                  from: dataMenu.length === 0 ? 0 : (currentPage - 1) * dataPerPage + 1,
                                  to: getLabelDisplayedRowsTo(),
                                  count: dataMenu.length === -1 ? -1 : dataMenu.length,
                                })}
                              </Typography>
                              <Box sx={{ display: "flex", gap: 1 }}>
                                <IconButton size="sm" color="neutral" variant="outlined" onClick={navigatePrev} sx={{ bgcolor: "background.surface" }}>
                                  <KeyboardArrowLeftIcon />
                                </IconButton>
                                <IconButton size="sm" color="neutral" variant="outlined" onClick={navigateNext} sx={{ bgcolor: "background.surface" }}>
                                  <KeyboardArrowRightIcon />
                                </IconButton>
                              </Box>
                            </Box>
                          </td>
                        </tr>
                      </tfoot>
                    </Table>
                  </Sheet>
                </Box>
              </GridFlex>
            </SpaceGrid>
          </CustomBox>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export Code
export default MenuDash;
