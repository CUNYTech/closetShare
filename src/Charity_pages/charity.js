import React, { Component } from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';
import '../App.css';

//For Table Material-ui
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Charity extends Component {
  render() {
   return (
    <div>
        <h3>America's Top 50 charities</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Rank in U.S</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Website</TableHeaderColumn>
              <TableHeaderColumn>Category</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>YMCA of the USA</TableRowColumn>
              <TableRowColumn><a href="http://www.ymca.net" target="_blank">ymca.net</a></TableRowColumn>
              <TableRowColumn>Social services</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Goodwill Industries International</TableRowColumn>
              <TableRowColumn><a href="http://www.goodwill.org/" target="_blank">goodwill.org</a></TableRowColumn>
              <TableRowColumn>Social services</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Catholic Charities USA</TableRowColumn>
              <TableRowColumn><a href="https://catholiccharitiesusa.org/" target="_blank">catholiccharities.usa.org</a></TableRowColumn>
              <TableRowColumn>Social services</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>United Way</TableRowColumn>
              <TableRowColumn><a href="https://www.unitedway.org/" target="_blank">unitedway.org</a></TableRowColumn>
              <TableRowColumn>Social services</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>American Red Cross</TableRowColumn>
              <TableRowColumn><a href="http://www.redcross.org/" target="_blank">redcross.org</a></TableRowColumn>
              <TableRowColumn>Social services</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        </div>
    );
  }
}

export default Charity;