import React, { Component } from "react";
import AssetMix from "../assetmix";
import "./assets-tab.css";

export default class AssetsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssetMix: false,
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
        <div>
          <button onClick={() => this.openTab("asset")}>Asset Mix</button>
          <button onClick={() => this.openTab("performance")}>Personal Performance</button>
          {this.state.showAssetMix ?
          <div id="asset-mix">
            <div>
            <AssetMix />
            </div>
          </div> :
          <div id="performance" ref={this.state.personalPerformanceRef}>
            <p>You're doing well!</p>
          </div>}
        </div>
      );
  }
}