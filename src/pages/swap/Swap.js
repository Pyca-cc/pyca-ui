import React from "react";
//import { Row, Col, Input, Button } from "reactstrap";
import Widget from "../../components/Widget";
//import { PycaSwap } from "pycaswap";

class Swap extends React.Component {
  render() {
    return (
      <div>
        <Widget
          style={{ width: "365px" }}
          title={
            <h3>
              Swap with best rate{" "}
              <span className="fw-semi-bold">(Paraswap)</span>
            </h3>
          }
          settings
          refresh
          close
        >
        {/*  <p>
            From <span className="fw-semi-bold">(Paraswap)</span>
          </p>
          <input
            type="number"
            className="form-control bg-custom-dark border-0"
            placeholder=""
          />
          <p>
            To <span className="fw-semi-bold">(Paraswap)</span>
          </p>
          <input
            type="number"
            className="form-control bg-custom-dark border-0"
            placeholder=""
          />*/}

          {/*<PycaSwap providerUrl={"https://mainnet.infura.io/v3/572bbfbefdad4df0a1b9a54018ce6f7d"} />*/}
        </Widget>
      </div>
    );
  }
}

export default Swap;
