import React, { Component } from "react";
import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core"
import { profiles } from "./accounts";

export default class Accounts extends Component {

  rows = profiles.filter(profile => profile.profileId === this.props.profileId)[0];

  render() {
    return (
      <TableContainer component={Paper}>
        {this.rows ? 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account Type</TableCell>
              <TableCell>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            this.rows.accounts.map((row) => (
              <TableRow key={row.type}>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell>{row.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        : 
        <p>Error</p>
        }
      </TableContainer>
    );
  }
}

Accounts.defaultProps = {
  profileId: 123
}

Accounts.propTypes = {
  profileId: Number 
};