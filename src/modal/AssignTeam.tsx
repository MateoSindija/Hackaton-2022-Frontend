import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useAssignTeamMutation } from "../redux/api";
import { useAddEmployeeMutation, useEmployeesQuery } from "../redux/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  ticketID: string;
}

const AssignTeam = (props: IProps) => {
  const { ticketID } = props;
  const [modal, setModal] = useState(false);
  const [handleTeam, setTeam] = useState("");
  const [assign] = useAssignTeamMutation();
  const { data: teams, isLoading } = useEmployeesQuery();

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeam(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await assign({
      ticketID: ticketID,
      user_id: handleTeam,
    })
      .catch((error) => console.log(error))
      .then(() => handleClose());
  };

  return (
    <>
      <Button size="small" onClick={handleOpen}>
        Dodijelite Tim
      </Button>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" p={1} onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Dodijelite zadatak timu
          </Typography>

          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={handleTeamChange}
            >
              {!isLoading &&
                teams.map((team: any) => {
                  return (
                    <FormControlLabel
                      key={team.id}
                      value={team.id}
                      control={<Radio />}
                      label={team.name}
                    />
                  );
                })}
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained">
            Dodijelite timu
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AssignTeam;
