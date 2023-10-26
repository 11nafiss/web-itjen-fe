// Import Library
import { useState } from "react";
import { Worker, ScrollMode, Viewer, MinimalButton, Position, SpecialZoomLevel, Tooltip } from "@react-pdf-viewer/core";
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { SelectionMode, selectionModePlugin } from '@react-pdf-viewer/selection-mode';
import PropTypes from "prop-types";

// Import CSS Library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import '@react-pdf-viewer/selection-mode/lib/styles/index.css';

// Import Assets
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import pdfFile from "../../../assets/files/auditoria-68.pdf";

const Reader = () => {
  const [defaultPdfFile] = useState(pdfFile);
  const scrollModePluginInstance = scrollModePlugin();
  const zoomPluginInstance = zoomPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const selectionModePluginInstance = selectionModePlugin();
  const getFilePluginInstance = getFilePlugin();

  const { SwitchSelectionModeButton } = selectionModePluginInstance;
  const { SwitchScrollModeButton } = scrollModePluginInstance;
  const { DownloadButton } = getFilePluginInstance;
  const { CurrentScale, ZoomInButton, ZoomOutButton } = zoomPluginInstance;
  const { CurrentPageInput, CurrentPageLabel, GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        className="rpv-core__viewer"
        style={{
          position: "relative",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            display: "flex",
            padding: "4px",
          }}
        >
          <div style={{ padding: "0px 2px" }}>
            <SwitchScrollModeButton mode={ScrollMode.Vertical} />
          </div>
          <div style={{ padding: "0px 2px" }}>
            <SwitchScrollModeButton mode={ScrollMode.Horizontal} />
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "0px 2px", marginRight: "auto" }}>
          <CurrentPageLabel>
            {(props) => (
             <>
                <CurrentPageInput />
                {`of ${props.numberOfPages}`}
             </>
            )}
            </CurrentPageLabel>
          </div>
          <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
            <SwitchSelectionModeButton mode={SelectionMode.Hand} />
          </div>
          <div style={{ padding: "0px 2px" }}>
            <ZoomOutButton />
          </div>
          <div style={{ padding: "0px 2px" }}>
            <CurrentScale />
          </div>
          <div style={{ padding: "0px 2px" }}>
            <ZoomInButton />
          </div>
          <div style={{ padding: "0px 2px" }}>
            <DownloadButton />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              left: 0,
              position: "absolute",
              top: "50%",
              transform: "translate(24px, -50%)",
              zIndex: 1,
            }}
          >
            <GoToPreviousPage>
              {(props) => (
                <Tooltip
                  position={Position.BottomCenter}
                  target={
                    <MinimalButton onClick={props.onClick}>
                      <BsFillArrowLeftCircleFill
                        style={{
                          fontSize: "32px",
                          color: "#08347C",
                        }}
                      />
                    </MinimalButton>
                  }
                  content={() => "Previous page"}
                  offset={{ left: 0, top: 8 }}
                />
              )}
            </GoToPreviousPage>
          </div>

          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translate(-24px, -50%)",
              zIndex: 1,
            }}
          >
            <GoToNextPage>
              {(props) => (
                <Tooltip
                  position={Position.BottomCenter}
                  target={
                    <MinimalButton onClick={props.onClick}>
                      <BsFillArrowRightCircleFill
                        style={{
                          fontSize: "32px",
                          color: "#08347C",
                        }}
                      />
                    </MinimalButton>
                  }
                  content={() => "Next page"}
                  offset={{ left: 0, top: 8 }}
                />
              )}
            </GoToNextPage>
          </div>
          <Viewer 
            fileUrl={defaultPdfFile} 
            plugins={[
                selectionModePluginInstance, 
                scrollModePluginInstance, 
                zoomPluginInstance, 
                pageNavigationPluginInstance,
                getFilePluginInstance,
            ]} 
            scrollMode={ScrollMode.Horizontal} 
            defaultScale={SpecialZoomLevel.PageFit} 
            />
        </div>
      </div>
    </Worker>
  );
};

Reader.propTypes = {
  onClick: PropTypes.func,
  currentPage: PropTypes.number,
  pageLabel: PropTypes.string,
  numberOfPages: PropTypes.number,
};

export default Reader;