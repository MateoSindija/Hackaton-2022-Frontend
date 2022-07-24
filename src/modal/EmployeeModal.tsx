import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Snackbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import classes from "../scss/employees.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import { useAddEmployeeMutation } from "../redux/api";

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

const EmployeeModal = () => {
  const [modal, setModal] = useState(false);
  const [garbageType, setGarbageType] = useState("Miješani");
  const [input, setInput] = useState({ name: "", username: "", password: "" });
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const [open, setOpen] = React.useState(false);
  const [addEmployee] = useAddEmployeeMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await addEmployee({
      name: input.name,
      email: input.username,
      password: input.password,
      type: garbageType,
    })
      .then(() => {
        setOpen(true);
        handleClose();
      })
      .catch((error: any) => console.log(error));
  };

  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, name: event.target.value });
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, username: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, password: event.target.value });
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setGarbageType(event.target.value as string);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Tim uspješno dodan!
        </Alert>
      </Snackbar>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        className={classes.button}
        onClick={handleOpen}
      >
        Dodajte Novi Tim
      </Button>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit} p={2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dodajte Novi Tim
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="teamName"
            label="Ime Time"
            name="teamName"
            onChange={handleNameChange}
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleUserNameChange}
            id="teamName"
            label="Korisničko Ime"
            name="teamName"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handlePasswordChange}
            id="password"
            label="Lozinka"
            name="password"
            autoFocus
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="demo-simple-select-label">Vrsta Otpada</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={garbageType}
              defaultValue={garbageType}
              label="Vrsta Otpada"
              onChange={handleSelect}
            >
              <MenuItem value={"mixed"}>Miješani</MenuItem>
              <MenuItem value={"metal"}>Metal</MenuItem>
              <MenuItem value={"glass"}>Staklo</MenuItem>
              <MenuItem value={"paper"}>Papir</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">
            Dodajte Novi Tim
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default EmployeeModal;
