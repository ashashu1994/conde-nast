import React, { Component } from "react";
import { Card, Table } from "reactstrap";

class HomeLoader extends Component {
  render() {
    return (
      <Card className="table-card">
        <Table className="table-borderless custom-table">
          <thead>
            <tr>
              <th><div className="animateLoader loader-text-lg"></div></th>
              <th><div className="animateLoader loader-text"></div></th>
              <th><div className="animateLoader loader-text"></div></th>
              <th><div className="animateLoader loader-text"></div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" className="padding-less"><div className="animateLoader loader-text"></div></td>
            </tr>
            <tr>
              <td><div className="animateLoader loader-text-lg"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
            </tr>
            <tr>
              <td><div className="animateLoader loader-text-lg"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
            </tr>
            <tr>
              <td><div className="animateLoader loader-text-lg"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
            </tr>
            <tr>
              <td><div className="animateLoader loader-text-lg"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
              <td><div className="animateLoader loader-text"></div></td>
            </tr>
          </tbody>
        </Table>
      </Card>
    );
  }
}
export default HomeLoader;
