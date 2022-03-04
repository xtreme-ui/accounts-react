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
            <div>
              <div className="tab-button-container">
                <div className="tab-offset">
                  <button className="tab-button-active" onClick={() => this.openTab("asset")}>Asset Mix</button>
                  <button className="tab-button-inactive" onClick={() => this.openTab("performance")}>Personal Performance</button>
                </div>
              </div>
              <div className="tab-content">
                <AssetMix />
              </div>
            </div> :
            <div>
              <div className="tab-button-container">
                <div className="tab-offset">
                  <button className="tab-button-inactive" onClick={() => this.openTab("asset")}>Asset Mix</button>
                  <button className="tab-button-active" onClick={() => this.openTab("performance")}>Personal Performance</button>
                </div>
              </div>
              <div className="tab-content">
                <img className="personal-performance" src={personal_performance} alt="PersonalPerformance" />
              </div>
            </div>}
          </div>
        </div>
      );
  }
}
AssetsTab.defaultProps = {
  profileId: 119372983
}

AssetsTab.propTypes = {
  profileId: Number 
}; 