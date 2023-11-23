// Import Library
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Iframe from "react-iframe";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getReportById } from "../../../../features/actions/report.action";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../../../../components/components";

// MUI Styling CSS
const Background = styled(Box)(() => ({
  backgroundColor: "#D9D9D9",
  color: "#000000",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  margin: "0px",
  padding: "0px",
}));

// Main Declaration
const ReportBook = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReportById({ id }));
  }, [dispatch, id]);

  const dataReport = useAppSelector((state) => state.report.reportId.dataReport);

  // Main Code
  return (
    <div>
      <div className="header-wrapper">
        <Header mode="blue" />
      </div>
      <div className="main-wrapper" style={{ height: "100%" }}>
        <div className="content-wrapper" style={{ paddingTop: "90px", height: "100%", width: "100%" }}>
          <Background>
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              <Iframe
                src={`${dataReport.link}`}
                style={{ position: "absolute", border: "none", left: "0", top: "0" }}
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="0"
                allowfullscreen="true"
                allow="transparency"
                seamless="seamless"
              ></Iframe>
            </div>
          </Background>
        </div>
      </div>
    </div>
  );
};

// Export Code
export default ReportBook;
