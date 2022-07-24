import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDeleteTicketMutation } from "../redux/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  ticketID: string;
}

const RejectTicket = (props: IProps) => {
  const [modal, setModal] = useState(false);
  const { ticketID } = props;
  const [deleteTicket] = useDeleteTicketMutation();

  const handleClose = () => setModal(false);
  const handleOpen = () => setModal(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await deleteTicket(ticketID)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button onClick={handleOpen} color="error">
        Odbacite prijavu
      </Button>

      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit} p={2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Jeste li sigurni da želite izbrisati prijavu?
          </Typography>

          <Grid container marginTop={2} columnSpacing={1}>
            <Grid item>
              <Button type="submit" variant="contained" color="error">
                Izbriši
              </Button>
            </Grid>
            <Grid item>
              <Button type="button" variant="contained" onClick={handleClose}>
                Odustani
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default RejectTicket;
