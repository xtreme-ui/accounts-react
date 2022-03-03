import React, { Component } from "react";
import './assetmix.css';

export default class AssetMix extends Component {
    render() {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Current</th>
                  <th>Target</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Stocks</td>
                    <td>70.00%</td>
                    <td>70.00%</td>
                  </tr>
                  <tr>
                    <td>Bonds</td>
                    <td>12.00%</td>
                    <td>12.00%</td>
                  </tr>
                  <tr>
                    <td>Short-term reserves</td>
                    <td>10.00%</td>
                    <td>10.00%</td>
                  </tr>
                  <tr>
                    <td>Other</td>
                    <td>8.00%</td>
                    <td>8.00%</td>
                  </tr>
              </tbody>
            </table>
          </div>
        );
    }
}