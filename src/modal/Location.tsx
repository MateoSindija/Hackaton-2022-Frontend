import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "98%",
  height: "80%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  long: string;
  latt: string;
}

const Location = (props: IProps) => {
  const { long, latt } = props;
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <LocationOnIcon />
      </IconButton>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} p={1}>
          <Typography variant="h4">Lokacije prijave</Typography>
          <iframe
            width="100%"
            height="95%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCljQKB2v0uadoYrrTnjMN_nacUM5HaMK4
    &q=${long},${latt}`}
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default Location;
