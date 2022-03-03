import React, { Component } from "react";
import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core"
import { accounts } from "./accounts";

export default class Accounts extends Component {

  rows = accounts;

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account Type</TableCell>
              <TableCell>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.rows.map((row) => (
              <TableRow key={row.type}>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell>{row.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}