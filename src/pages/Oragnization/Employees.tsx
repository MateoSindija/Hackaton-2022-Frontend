import {
  Box,
  Button,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../Oragnization/Layout";
import Paper from "@mui/material/Paper";
import SearchBar from "../../components/SearchBar";
import { ITeams } from "../../models/employee.model";
import classes from "../../scss/employees.module.scss";
import { IconButton } from "@mui/material";
import EmployeeModal from "../../modal/EmployeeModal";

//paper, mixed, metal, glass,

const rows: ITeams[] = [
  {
    name: "Tim TRSAT",
    username: "username",
    password: "password",
    type: "paper",
    id: " balsd",
  },
  {
    name: "Tim 3",
    username: "username sds  s ds s",
    password: "password",
    type: "mixed",
    id: "asdsbalsd",
  },
  {
    name: "Tim 2",
    username: "username",
    password: "password",
    type: "metal",
    id: "asdsbalsd",
  },
  {
    name: "Tim 4",
    username: "username",
    password: "password",
    type: "glass",
    id: "asdsbalsd",
  },
];

const filterData = (query: string, data: ITeams[]) => {
  if (!query) {
    return data;
  } else {
    return data.filter(
      (items: ITeams) =>
        items.name.toLowerCase().includes(query.toLowerCase()) ||
        items.type.toLowerCase().includes(query.toLowerCase()) ||
        items.password.toLowerCase().includes(query.toLowerCase()) ||
        items.username.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, rows);

  return (
    <Layout>
      <Grid marginLeft={3}>
        <div className={classes.container}>
          <Typography variant="h4">Radnici</Typography>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className={classes.modalButton}>
          <EmployeeModal />
        </div>
        <Box boxShadow={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 320 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h4>Ime tima</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Korisničko Ime</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Lozinka</h4>
                  </TableCell>
                  <TableCell>
                    <h4>Vrsta Otpada</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataFiltered.map((row: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.password}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Employees;
