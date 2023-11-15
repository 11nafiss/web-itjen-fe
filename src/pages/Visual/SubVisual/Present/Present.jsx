import { useEffect } from "react";
import { Box } from "@mui/material";
import Iframe from "react-iframe";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { getVitjenById } from "../../../../features/actions/vitjen.action";
import { BASE_URL } from "../../../../services/api";
import { useParams } from "react-router-dom";

const Present = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVitjenById({ id }));
  }, [dispatch, id]);

  const dataVitjen = useAppSelector((state) => state.vitjen.vitjenId.dataVitjen);

  return (
    <Box sx={{ width: "100vw", height: "88vh" }}>
      <Box sx={{ width: "100%", height: "100%", marginTop: "80px" }}>
        <Iframe url={`${BASE_URL}vitjen/${dataVitjen.link}`} width="100%" height="100%" />
      </Box>
    </Box>
  );
};

export default Present;
