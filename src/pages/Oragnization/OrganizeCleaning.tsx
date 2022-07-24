import { Grid, TextField, Container, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "./Layout";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useOrganizeCleanMutation } from "../../redux/api";

const OrganizeClening = () => {
  const [input, setInput] = useState({
    header: "",
    location: "",
    payment: "",
    desc: "",
  });

  const [organize] = useOrganizeCleanMutation();

  const [dateBegin, setDateBegin] = useState<Date | null>(
    new Date("2022-07-23")
  );

  const [dateEnd, setDateEnd] = useState<Date | null>(new Date("2022-07-23"));

  const handleHeader = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, header: event.target.value });
  };

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, location: event.target.value });
  };

  const handlePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, payment: event.target.value });
  };

  const handleDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, desc: event.target.value });
  };

  const handleDateBegin = (date: Date | null) => {
    setDateBegin(date);
  };

  const handleDateEnd = (date: Date | null) => {
    if (!dateBegin || !date) return;
    if (date < dateBegin) return;
    setDateEnd(date);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!dateBegin || !dateEnd) return;

    await organize({
      header: input.header,
      location: input.location,
      description: input.desc,
      dateBegin: dateBegin,
      dateEnd: dateEnd,
      payment: Number(input.payment),
    })
      .then((response: any) => console.log(response))
      .catch((error: any) => console.log(error));
  };

  return (
    <Layout>
      <Grid component="main" maxWidth="md" marginLeft={3}>
        <Box mb={2}>
          <Typography variant="h4">Organizacija čišćenja</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} p={2} boxShadow={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Header"
                label="Naslov"
                name="Header"
                onChange={handleHeader}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  value={dateBegin}
                  label="Datum Početka"
                  inputFormat="dd/MM/yyyy"
                  onChange={handleDateBegin}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  value={dateEnd}
                  label="Datum Završetka"
                  inputFormat="dd/MM/yyyy"
                  onChange={handleDateEnd}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Location"
                label="Lokacija"
                name="Location"
                onChange={handleLocation}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                type="number"
                required
                fullWidth
                onChange={handlePayment}
                label="Plaća po satu"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">hrk </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                onChange={handleDesc}
                fullWidth
                label="Opis"
                placeholder="Opis čišćenja"
                multiline
                rows={3}
                maxRows={4}
              />
            </Grid>

            <Grid item>
              <Button variant="outlined" type="submit">
                Objavite
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  );
};

export default OrganizeClening;
