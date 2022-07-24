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
import { useEmployeesQuery } from "../../redux/api";

//paper, mixed, metal, glass,

const empty = [{ name: "", password: "", type: "", username: "", id: "" }];

const filterData = (query: string, data: any) => {
  if (!query) {
    return data;
  } else {
    return data.filter(
      (items: any) =>
        items.name.toLowerCase().includes(query.toLowerCase()) ||
        items.type.toLowerCase().includes(query.toLowerCase()) ||
        items.password.toLowerCase().includes(query.toLowerCase()) ||
        items.email.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: rows, isLoading, isError } = useEmployeesQuery();
  const dataFiltered = isLoading ? empty : filterData(searchQuery, rows);

  return (
    <Layout>
      <Grid marginLeft={1}>
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
                    <TableCell align="left">{row.email}</TableCell>
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
