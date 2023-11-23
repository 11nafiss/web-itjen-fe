import { useEffect } from "react";
import PropTypes from "prop-types";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getVitjenAll } from "../../../../features/actions/vitjen.action";
import { BASE_URL } from "../../../../services/api";
import { Link } from "react-router-dom";

const TitleVitjen = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "64px",
  textAlign: "left",
  fontWeight: 600,
}));

const DescVitjen = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "32px",
  textAlign: "left",
  margin: "10px 0 30px 0",
}));

const ButtonVitjen = styled(Button)(() => ({
  width: "100px",
  height: "50px",
  color: "#fff",
  fontSize: "18px",
  borderColor: "#fff",
  borderWidth: "4px",
  marginTop: "5px",
  boxShadow: "none",
  cursor: "pointer",
  transition: ".5s ease all",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#252525",
    fontWeight: "bold",
  },
}));

// Import CSS
import { styles } from "./styles";
import { HeadVisual } from "../../../../components/components";

export default function App() {
  const dispatch = useAppDispatch();
  const take = 6;
  const page = 1;

  useEffect(() => {
    dispatch(getVitjenAll({ take, page }));
  }, [dispatch, page, take]);

  const dataVitjen = useAppSelector((state) => state.vitjen.vitjenAll.dataVitjen);

  return (
    <div>
      <div className="header-wrapper">
        <HeadVisual mode="white" />
      </div>
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Splide
          hasTrack={false}
          options={{
            direction: "ttb",
            height: "100vh",
            wheel: true,
            focus: "center",
            pagination: false,
            arrow: true,
            lazyLoad: "nearby",
          }}
          aria-label="Visual Auditoria"
        >
          <div className="custom-wrapper">
            <SplideTrack>
              {dataVitjen.map((obj) => (
                <SplideSlide key={obj.id}>
                  <img src={`${BASE_URL}images/${obj.image}`} style={{ width: "100vw", height: "100%" }} />
                  <div style={{ ...styles.textBox }}>
                    <TitleVitjen>{obj.title}</TitleVitjen>
                    <DescVitjen>{obj.deskripsi}</DescVitjen>
                    <Link to={`/visual/lihat/${obj.id}`} style={{ width: "100px" }}>
                      <ButtonVitjen variant="outlined">Lihat</ButtonVitjen>
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows">
              <button className="splide__arrow--prev">
                <Arrow left />
              </button>
              <button className="splide__arrow--next">
                <Arrow />
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </div>
  );
}

// Additional Code
function Arrow(props) {
  const disabled = props.disabled ? " arrowVisual--disabled" : "";

  return (
    <svg onClick={props.onClick} className={`arrowVisual ${props.left ? "arrowVisual--left" : "arrowVisual--right"} ${disabled}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

Arrow.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  left: PropTypes.bool,
};
