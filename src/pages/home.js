import React from "react";
import { Container, Card, CardBody, Table } from "reactstrap";
import HomeLoader from "../_components/Loader/HomeLoader";

class Home extends React.Component {
  constructor() {
    super()
    this.state = { loading: true }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000)
  }
  render() {
    return (
      <Container fluid={true} className="d-flex full-container align-items-center">
        <div className="w-100">
          {this.state.loading ?
            <HomeLoader />
            :
            <Card className="table-card">
              <div className="custom-table-resp">
                <Table className="table-borderless custom-table">
                  <thead>
                    <tr>
                      <th>Agreement Name</th>
                      <th>3rd Party</th>
                      <th>Agreement Type</th>
                      <th>Date Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="padding-less"><small>AGREEMENTS (4)</small></td>
                    </tr>
                    <tr>
                      <td>73 Questions: James Corden</td>
                      <td>CBS Broadcasting, Inc</td>
                      <td><span className="label label-green">Access Agreement</span></td>
                      <td>11:32 AM</td>
                    </tr>
                    <tr>
                      <td>100 Ways: PILOT</td>
                      <td>Miami City Ballet, Inc.</td>
                      <td><span className="label label-green">Access Agreement</span></td>
                      <td>Feb 25, 2019</td>
                    </tr>
                    <tr>
                      <td>Saks In 30 Seconds</td>
                      <td>Partos Co. (Martijn Hostetler)</td>
                      <td><span className="label label-blue">Agency Fee</span></td>
                      <td>Feb 23, 2019</td>
                    </tr>
                    <tr>
                      <td>Glamour Allure X P&amp;G</td>
                      <td>tde Agency Arizona LLC </td>
                      <td><span className="label label-blue">Agency Fee</span></td>
                      <td>Feb 22,2019</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          }
        </div>
      </Container>
    );
  }
}

export default Home;
