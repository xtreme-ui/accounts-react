import React, { Component } from "react";
import AssetMix from "../assetmix";
import personal_performance from "./personal_performance.png"

import "./assets-tab.css";

export default class AssetsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssetMix: true,
    }
    this.assetMixRef = React.createRef();
    this.personalPerformanceRef = React.createRef();
  }


  openTab(tabType) {
    if (tabType === "asset") {
      this.setState({showAssetMix: true});
    }
    else {
      this.setState({showAssetMix: false});
    }
  }

  render() {
      return (
        <div className="main-div">
          <div className="tab-container">
            {this.state.showAssetMix ?
            <div id="asset-mix">
              <div className="tab-button-container">
                <div className="tab-offset">
                  <button className="tab-button-active" onClick={() => this.openTab("asset")}>Asset Mix</button>
                  <button className="tab-button-inactive" onClick={() => this.openTab("performance")}>Personal Performance</button>
                </div>
              </div>
              <div>
              <AssetMix />
              </div>
            </div> :
            <div id="performance">
              <div className="tab-button-container">
                <div className="tab-offset">
                  <button className="tab-button-inactive" onClick={() => this.openTab("asset")}>Asset Mix</button>
                  <button className="tab-button-active" onClick={() => this.openTab("performance")}>Personal Performance</button>
                </div>
              </div>
              <img className="personal-performance" src={personal_performance} alt="PersonalPerformance" />
            </div>}
          </div>
        </div>
      );
  }
}