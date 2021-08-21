import React from "react";
import { Row, Col, Progress } from "reactstrap";
import Widget from "../../components/Widget";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import s from "./Home.module.scss";

class Home extends React.Component {
  initEchartsOptions = {
    renderer: "canvas",
  };

  userInvestments = {
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "BTC" },
          { value: 310, name: "USDT" },
          { value: 274, name: "ETH" },
          { value: 235, name: "PYCA" },
          { value: 400, name: "SOL" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };

  tvl = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#8e959c",
        },
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "0",
      right: "0",
      bottom: "0",
      top: "0",
      containLabel: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        show: false,
        data: [
          "1 Aug",
          "2 Aug",
          "3 Aug",
          "4 Aug",
          "5 Aug",
          "6 Aug",
          "7 Aug",
          "8 Aug",
          "9 Aug",
          "10 Aug",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    series: [
      {
        name: "SOL",
        type: "line",
        stack: "总量",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgba(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 0, 0, 0, 1, 0.8, 1, 1.1, 1.15, 1.16, 1.1],
      },
      {
        name: "USDT",
        type: "line",
        stack: "总量",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgba(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 0.1, 0.2, 0.6, 1.25, 1.3, 1.32, 1.4, 1.4, 1.36],
      },
      {
        name: "PYCA",
        type: "line",
        stack: "总量",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgba(116, 21, 219)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0.1, 0.1, 0.2, 0.5, 0.6, 0.6, 0.6, 0.5, 0.6, 0.65],
      },
      {
        name: "ETH",
        type: "line",
        stack: "总量",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 0, 135)",
            },
            {
              offset: 1,
              color: "rgba(135, 0, 157)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 0.1, 0.1, 0.3, 1, 0.6, 1.1, 1.5, 1.6, 2],
      },
      {
        name: "BTC",
        type: "line",
        stack: "总量",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgba(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 0.1, 0.1, 0.1, 0.6, 0.9, 1.2, 2, 2.1, 2.4],
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col lg={6}>
            <Widget
              title={
                <h3>
                  {" "}
                  Total Value Locked <span className="fw-semi-bold">(TVL)</span>
                </h3>
              }
            >
              <div className="widget-body">
                <h3>Coming soon...</h3>
              </div>
              <div className="chart-overflow-bottom">
                <ReactEchartsCore
                  echarts={echarts}
                  option={this.tvl}
                  opts={this.initEchartsOptions}
                  style={{ height: "210px" }}
                />
              </div>
            </Widget>
          </Col>
          <Col lg={3}>
            <Widget
              title={
                <h3>
                  {" "}
                  My investments <span className="fw-semi-bold"></span>
                </h3>
              }
            >
              <div className="widget-body">
                <h3>$0.00</h3>
              </div>
              <ReactEchartsCore
                echarts={echarts}
                option={this.userInvestments}
                opts={this.initEchartsOptions}
                style={{ height: "200px" }}
              />
            </Widget>
          </Col>
          <Col lg={3}>
            <Widget
              title={
                <h3>
                  {" "}
                  My investments <span className="fw-semi-bold"></span>
                </h3>
              }
            >
              <div className="widget-body">
                <h3>$0.00</h3>
              </div>
              <ReactEchartsCore
                echarts={echarts}
                option={this.userInvestments}
                opts={this.initEchartsOptions}
                style={{ height: "200px" }}
              />
            </Widget>
          </Col>
        </Row>

        <h3>
          Risk Reward Ratio <span className="fw-semi-bold">(RRR)</span>
        </h3>
        <br />

        <Row>
          <Col lg={6} xl={4} xs={12}>
            <Widget title={<h6> USERBASE GROWTH </h6>} close settings>
              <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name">Overall Growth</h6>
                  <p className="value">76.38%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Montly</h6>
                  <p className="value">10.38%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">24h</h6>
                  <p className="value">3.38%</p>
                </div>
              </div>
              <Progress
                color="success"
                value="60"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-chevron-up" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;17% higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
          <Col lg={6} xl={4} xs={12}>
            <Widget title={<h6> TRAFFIC VALUES </h6>} close settings>
              <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name">Overall Values</h6>
                  <p className="value">17 567 318</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Montly</h6>
                  <p className="value">55 120</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">24h</h6>
                  <p className="value">9 695</p>
                </div>
              </div>
              <Progress
                color="danger"
                value="60"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-chevron-down" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;8% lower</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
          <Col lg={6} xl={4} xs={12}>
            <Widget title={<h6> RANDOM VALUES </h6>} close settings>
              <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name fs-sm">Overcome T.</h6>
                  <p className="value">104.85%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">Takeoff Angle</h6>
                  <p className="value">14.29&deg;</p>
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">World Pop.</h6>
                  <p className="value">7,211M</p>
                </div>
              </div>
              <Progress
                color="bg-primary"
                value="60"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-plus" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;8 734 higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
