import React, { Component } from "react";
import "./frontpage.css";
import Card from "../molecules/card";
import Sidebar from "../molecules/sidebar";

class Frontpage extends Component {
  render() {
    const test = {
      title:
        "AvePoint lands $200M investment to expand market for Microsoft cloud governance tools",
      date: "07 jan 2020",
      author: "John Bubucones",
      text:
        "While Microsoft cloud services such as SharePoint, Microsoft Teams and Office 365 are used widely by large organizations, the products don’t come standard with an enterprise-grade control layer. That’s where AvePoint, a Microsoft independent software (ISV), comes in. Today, the company announced a $200 million Series C investment."
    };
    return (
      <div className="body">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div>
          <Card article={test} />
          <Card article={test} />
          <Card article={test} />
          <Card article={test} />
          <Card article={test} />
          <Card article={test} />
        </div>
      </div>
    );
  }
}

export default Frontpage;
