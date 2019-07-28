$(function () {

  var mychart = echarts.init(document.getElementById("main"));

  mychart.showLoading();

  var YNseries = [];
  [
    ['监管对象', mapDataJgdx],
    ['隐患', mapDataYh],
    ['事故', mapDataSg],
    ['风险', mapDataFx],
    ['危险源', mapDataWxy],
    ['监督检查', mapDataJdjc]
  ].forEach((i, v) => {
    YNseries.push({
      name: i[0],
      type: "map",
      mapType: "云南",
      roam: true,
      selectedMode: 'single',
      showLegendSymbol: false,
      label: {
        normal: {
          show: true,
          color: '#fff'
        },
        emphasis: {
          show: true,
          color: '#2D8BCA'
        },
        show: true
      },
      itemStyle: {
        emphasis: {
          areaColor: '#022E47',
          borderColor: '#2D8BCA',
          borderWidth: 1.5
        }
      },
      data: i[1]
    })
  })

  var YNoption = {
    backgroundColor: "#020A1D",
    color: ['#1686B9', '#C7992E', '#CD3E46', '#C1D00E', '#AC3E71', '#10A95E'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center',
      bottom: '2%',
      selectedMode: 'single',
      textStyle: {
        color: '#fff'
      }
    },
    toolbox: {
      top: '2%',
      right: '40%',
      feature: {
        dataView: {},
        restore: {},
        saveAsImage: {},
        myTool1: {
          show: true,
          title: '地名',
          icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
          onclick: function () {
            var isShowLabel = mychart.getOption().isShowLabel;
            var series = mychart.getOption().series;
            if (isShowLabel) {
              series.forEach(v => {
                v.label = {
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                  }
                }
              })
              mychart.setOption({
                series,
                isShowLabel: false,
              })
            } else {
              series.forEach(v => {
                v.label = {
                  normal: {
                    show: true,
                    color: '#fff'
                  },
                  emphasis: {
                    show: true,
                    color: '#2D8BCA'
                  }
                }
              })
              mychart.setOption({
                series,
                isShowLabel: true,
              })
            }

            // console.log(mychart.getOption())
          }
        },
      },
      iconStyle: {
        borderColor: '#fff'
      }
    },
    title: {
      text: '云南省',
      textStyle: {
        color: '#fff',
      },
      left: '40%',
      top: '2%'
    },
    visualMap: {
      min: 0,
      max: 500,
      left: '10%',
      bottom: "2%",
      text: ["High", "Low"],
      realtime: false,
      calculable: true,
      color: ["#8CC6F4", "#309AF2"],
      textStyle: {
        color: "#fff"
      }
    },
    series: YNseries,
    isShowLabel: true
  }

  var mapCodeSelect = [], mapNameSelect = [];

  // 首次加载云南地图
  loadMap(province.yunnan, "云南", YNoption);

  // 地图下钻
  mychart.on("click", function (params) {
    let name = params.name, mapCode = country[name], dataIndex = params.seriesIndex; series = [];
    mapCodeSelect.push(mapCode);
    mapNameSelect.push(name);
    if (name in country) {

      // option配置
      var baseOpt = {
        title: {
          text: name,
          textStyle: {
            color: '#fff'
          },
          left: '40%',
          top: '2%'
        },
        backgroundColor: "#020A1D",
        color: ["#1E90FF", "#13CE66", "#F7BA2A", "#FF4949"],
        tooltip: {
          trigger: 'item',
          formatter: (formatter) => {
            // 判断是分布是数据还是总览数据
            var isOther = mychart.getOption().toolbox[0].feature.myTool1.title;
            if (isOther == "总览") {
              return formatter.name + "：" + formatter.value[2] + "个"
            } else {
              if (formatter.value[2]) {
                return formatter.name + "</br>" + formatter.seriesName + "：" + formatter.value[2] + "个"
              } else {
                return formatter.name + "</br>" + formatter.seriesName
              }
            }
          }
        },
        legend: {
          orient: "vertical",
          textStyle: {
            color: "#fff"
          },
          right: "10%",
          bottom: "2%",
        },
        roam: true,
        geo: {
          map: name,
          label: {
            normal: {
              show: true,
              color: "#fff"
            },
            emphasis: {
              show: true,
              color: "#fff"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        isShowLabel: true
      }

      // 判断在哪个seriesIndex
      var nowTotalSeries = {}; // legend关联的总览数据 
      var nowOtherSeries = {}; // legend关联的分布数据

      switch (dataIndex) {
        case 0://监管对象
          nowTotalSeries = setTotalSeries(mapDataJgdxTotal, "#1686B9", "#13CE66");
          nowOtherSeries = setOhterSeries(
            [
              ["旅游包车", mapDataJgdxScatterA],
              ["班线客运", mapDataJgdxScatterB],
              ["客运站场", mapDataJgdxScatterC],
              ["危险货物运输", mapDataJgdxScatterD]
            ]
          )
          break;
        case 1://隐患
          nowTotalSeries = setTotalSeries(mapDataYhTotal, "#C7992E", "#FF4949");
          nowOtherSeries = setOhterSeries(
            [
              ["一般隐患", mapDataYhScatterA],
              ["重大隐患", mapDataYhScatterB]
            ]
          )
          break;
        case 2://事故
          nowTotalSeries = setTotalSeries(mapDataSgTotal, "#CD3E46", "#C7992E");
          nowOtherSeries = setOhterSeries(
            [
              ["一般事故", mapDataSgScatterA],
              ["较大事故", mapDataSgScatterB],
              ["重大事故", mapDataSgScatterC],
              ["特别重大事故", mapDataSgScatterD],
            ]
          )
          break;
        case 3://风险
          nowTotalSeries = setTotalSeries(mapDataFxTotal, "#C1D00E", "#C7992E");
          nowOtherSeries = setOhterSeries(
            [
              ["较小风险", mapDataFxScatterA],
              ["一般风险", mapDataFxScatterB],
              ["较大风险", mapDataFxScatterC],
              ["重大风险", mapDataFxScatterD]
            ]
          )
          break;
        case 4://危险源
          nowTotalSeries = setTotalSeries(mapDataWxyTotal, "#AC3E71", "#C7992E");
          nowOtherSeries = setOhterSeries(
            [
              ["危险源", mapDataWxyScatter],
            ]
          )
          break;
        case 5://监督检查
          nowTotalSeries = setTotalSeries(mapDataJdjcTotal, "#10A95E", "#1686B9");
          nowOtherSeries = setOhterSeries(
            [
              ["旅游包车", mapDataJdjcScatterA],
              ["班线客运", mapDataJdjcScatterB],
              ["客运站场", mapDataJdjcScatterC],
              ["危险货物运输", mapDataJdjcScatterD],
            ]
          )
          break;
        default:
          return;
      }

      // 总览数据配置
      var allToolbox = {
        toolbox: {
          top: '2%',
          right: '40%',
          feature: {
            dataView: {},
            restore: {},
            saveAsImage: {},
            myTool1: {
              show: true,
              title: '总览',
              icon: 'path://M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z',
              onclick: function () {
                loadMap(mapCode, name, assignOpt(otherToolbox, nowOtherSeries, baseOpt))
              }
            },
            myTool2: {
              show: true,
              title: '地名',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function () {
                var isShowLabel = mychart.getOption().isShowLabel;
                var series = mychart.getOption().series;
                if (isShowLabel) {
                  mychart.setOption({
                    isShowLabel: false,
                    geo: {
                      label: {
                        normal: {
                          show: false,
                        },
                        emphasis: {
                          show: false,
                        }
                      }
                    }
                  })
                } else {
                  mychart.setOption({
                    isShowLabel: true,
                    geo: {
                      label: {
                        normal: {
                          show: true,
                          color: "#fff"
                        },
                        emphasis: {
                          show: true,
                          color: "#fff"
                        }
                      },
                    }
                  })
                }

                // console.log(mychart.getOption())
              }
            },
            myTool3: {
              show: true,
              title: '返回',
              icon: 'path://M700.371228 394.525472 174.028569 394.525472l255.952416-227.506551c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.506619-42.367947-2.492774L76.425623 400.975371c-6.960529 5.496178-11.434423 14.003945-11.434423 23.561625 0 0.013303 0.001023 0.026606 0.001023 0.039909 0 0.01228-0.001023 0.025583-0.001023 0.037862 0 0.473791 0.01535 0.946558 0.037862 1.418302 0.001023 0.016373 0.001023 0.032746 0.001023 0.049119 0.39295 8.030907 3.992941 15.595186 10.034541 20.962427l315.040163 280.028764c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947l-256.128425-227.665163 526.518668 0c109.219517 0 198.075241 88.855724 198.075241 198.075241s-88.855724 198.075241-198.075241 198.075241L354.324888 850.696955c-16.57449 0-30.011524 13.437034-30.011524 30.011524s13.437034 30.011524 30.011524 30.011524l346.046341 0c142.31631 0 258.098289-115.783003 258.098289-258.098289S842.686515 394.525472 700.371228 394.525472z',
              onclick: function () {
                loadMap(province.yunnan, "云南", YNoption);
              }
            },

          },
          iconStyle: {
            borderColor: '#fff'
          },
        }
      }

      // 分布数据配置
      var otherToolbox = {
        toolbox: {
          top: '2%',
          right: '40%',
          feature: {
            dataView: {},
            restore: {},
            saveAsImage: {},
            myTool1: {
              show: true,
              title: '分布',
              icon: 'path://M366 294.504c-132 0-240 107.104-240 238s108 238 240 238h304c132 0 240-107.104 240-238s-108-238-240-238h-304z m308 442.16c-111.28 0-201.504-91.408-201.504-204.168s90.224-204.16 201.504-204.16 201.504 91.408 201.504 204.168-90.224 204.16-201.504 204.16z',
              onclick: function () {
                loadMap(
                  mapCode,
                  name,
                  assignOpt(
                    allToolbox,
                    nowTotalSeries,
                    baseOpt
                  )
                )
              }
            },
            myTool2: {
              show: true,
              title: '地名',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function () {
                var isShowLabel = mychart.getOption().isShowLabel;
                if (isShowLabel) {
                  mychart.setOption({
                    isShowLabel: false,
                    geo: {
                      label: {
                        normal: {
                          show: false,
                        },
                        emphasis: {
                          show: false,
                        }
                      }
                    }
                  })
                } else {
                  mychart.setOption({
                    isShowLabel: true,
                    geo: {
                      label: {
                        normal: {
                          show: true,
                          color: "#fff"
                        },
                        emphasis: {
                          show: true,
                          color: "#fff"
                        }
                      },
                    }
                  })
                }
              }
            },
            myTool3: {
              show: true,
              title: '返回',
              icon: 'path://M700.371228 394.525472 174.028569 394.525472l255.952416-227.506551c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.506619-42.367947-2.492774L76.425623 400.975371c-6.960529 5.496178-11.434423 14.003945-11.434423 23.561625 0 0.013303 0.001023 0.026606 0.001023 0.039909 0 0.01228-0.001023 0.025583-0.001023 0.037862 0 0.473791 0.01535 0.946558 0.037862 1.418302 0.001023 0.016373 0.001023 0.032746 0.001023 0.049119 0.39295 8.030907 3.992941 15.595186 10.034541 20.962427l315.040163 280.028764c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947l-256.128425-227.665163 526.518668 0c109.219517 0 198.075241 88.855724 198.075241 198.075241s-88.855724 198.075241-198.075241 198.075241L354.324888 850.696955c-16.57449 0-30.011524 13.437034-30.011524 30.011524s13.437034 30.011524 30.011524 30.011524l346.046341 0c142.31631 0 258.098289-115.783003 258.098289-258.098289S842.686515 394.525472 700.371228 394.525472z',
              onclick: function () {
                loadMap(province.yunnan, "云南", YNoption);
              }
            }
          },
          iconStyle: {
            borderColor: '#fff'
          }
        }
      }

      // 加载对应数据
      loadMap(
        mapCode,
        name,
        assignOpt(
          allToolbox,
          nowTotalSeries,
          baseOpt
        )
      )
      // console.log(mychart.getOption());

      // 合并option
      function assignOpt(opt, series, toolbox) {
        return Object.assign(toolbox, series, opt)
      }

      // 设置总览数据源
      function setTotalSeries(dataArr, color1, color2) {
        var totalSeries = [];
        dataArr.forEach(v => {
          totalSeries.push(
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              symbolSize: 10,
              data: dataArr,
              itemStyle: {
                color: color1
              }
            },
            {
              type: "scatter",
              symbol: "pin",
              coordinateSystem: "geo",
              symbolSize: 46,
              label: {
                show: true,
                formatter: (formatter) => {
                  return formatter.value[2]
                }
              },
              data: dataArr,
              itemStyle: {
                color: color2
              }
            }
          )
        })
        return new Object({ series: totalSeries });
      }

      // 设置分布数据源
      function setOhterSeries(dataArr) {
        var otherSeries = [];
        var seriesObj = {
          type: "scatter",
          coordinateSystem: "geo",
          symbolSize: 14
        };
        var symbol = ["circle", "rect", "diamond", "triangle"]
        dataArr.forEach((v, i) => {
          otherSeries.push(
            {
              name: v[0],
              data: v[1],
              symbol: symbol[i],
            }
          )
        })
        otherSeries.forEach(v => {
          v = Object.assign(v, seriesObj)
        })
        return new Object({ series: otherSeries })
      }

    } else {
      return;
    }

    mychart.on("click", function (params) {
      let name = params.name, mapCode = village[params.name];
      mapCodeSelect.push(mapCode);
      mapNameSelect.push(name);

      if (params.name in village) {
        loadMap(mapCode, name, {
          title: {
            text: name,
            textStyle: {
              color: '#fff'
            },
            left: '40%',
            top: '2%'
          },
          backgroundColor: "#020A1D",
          color: ["#1E90FF", "#13CE66", "#F7BA2A", "#FF4949"],
          tooltip: {
            trigger: 'item',
            formatter: (formatter) => {
              return formatter.name + "</br>" + formatter.seriesName + "：" + formatter.value[2] + "次"
            }
          },
          toolbox: {
            top: '2%',
            right: '40%',
            feature: {
              dataView: {},
              restore: {},
              saveAsImage: {},
              myTool1: {
                show: true,
                title: '地名',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function () {
                  var isShowLabel = mychart.getOption().isShowLabel;
                  if (isShowLabel) {
                    mychart.setOption({
                      geo: {
                        label: {
                          normal: {
                            show: false,
                          },
                          emphasis: {
                            show: false,
                          }
                        }
                      },
                      isShowLabel: false,
                    })
                  } else {
                    mychart.setOption({
                      geo: {
                        label: {
                          normal: {
                            show: true,
                            color: "#fff"
                          },
                          emphasis: {
                            show: true,
                            color: "#fff"
                          }
                        },
                      },
                      isShowLabel: true,
                    })
                  }
                }
              },
              myTool2: {
                show: true,
                title: '返回',
                icon: 'path://M700.371228 394.525472 174.028569 394.525472l255.952416-227.506551c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.506619-42.367947-2.492774L76.425623 400.975371c-6.960529 5.496178-11.434423 14.003945-11.434423 23.561625 0 0.013303 0.001023 0.026606 0.001023 0.039909 0 0.01228-0.001023 0.025583-0.001023 0.037862 0 0.473791 0.01535 0.946558 0.037862 1.418302 0.001023 0.016373 0.001023 0.032746 0.001023 0.049119 0.39295 8.030907 3.992941 15.595186 10.034541 20.962427l315.040163 280.028764c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947l-256.128425-227.665163 526.518668 0c109.219517 0 198.075241 88.855724 198.075241 198.075241s-88.855724 198.075241-198.075241 198.075241L354.324888 850.696955c-16.57449 0-30.011524 13.437034-30.011524 30.011524s13.437034 30.011524 30.011524 30.011524l346.046341 0c142.31631 0 258.098289-115.783003 258.098289-258.098289S842.686515 394.525472 700.371228 394.525472z',
                onclick: function () {
                  loadMap(
                    mapCodeSelect.pop(),
                    mapNameSelect.pop(),
                    assignOpt(
                      allToolbox,
                      nowTotalSeries,
                      baseOpt
                    ))
                }
              },
            },
            iconStyle: {
              borderColor: '#fff'
            }
          },
          legend: {
            orient: "vertical",
            textStyle: {
              color: "#fff"
            },
            right: "10%",
            bottom: "2%",
          },
          roam: true,
          geo: {
            map: name,
            label: {
              normal: {
                show: false,
                color: "#fff"
              },
              emphasis: {
                show: false,
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#323c48",
                borderColor: "#111"
              },
              emphasis: {
                areaColor: "#2a333d"
              }
            }
          },
          visualMap: {
            min: 0,
            max: 5,
            left: '10%',
            bottom: "2%",
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#1686B9', '#C7992E', '#CD3E46', '#C1D00E', '#AC3E71', '#10A95E'],
            },
            textStyle: {
              color: "#fff"
            }
          },
          series: [
            {
              type: "scatter",
              coordinateSystem: "geo",
              symbol: 'circle',
              symbolSize: 10,
              data: mapDataJdjcDetailA,
              name: '工作检查'
            },
            {
              type: "scatter",
              coordinateSystem: "geo",
              symbol: 'rect',
              symbolSize: 10,
              data: mapDataJdjcDetailB,
              name: '工作督察'
            }
          ],
          isShowLabel: false
        })
      } else {
        return;
      }
    })

  })

  // legend图例切换
  mychart.on("legendselectchanged", function (obj) {
    // console.log(obj);
    // 当前被选中的legend
    var nowLegend = obj.name;
    var visualMapColor = {
      监管对象: { maxValue: 500, color: ["#309AF2", "#8CC6F4"] },
      隐患: { maxValue: 5000, color: ["#F8C650", "#FBE8BC"] },
      事故: { maxValue: 30, color: ["#FE5757", "#FB9090"] },
      风险: { maxValue: 3500, color: ["#DCE350", "#CACC94"] },
      危险源: { maxValue: 10, color: ["#ED93F7", "#F8C8FD"] },
      监督检查: { maxValue: 60, color: ["#3DDD85", "#A0EDC3"] }
    }
    if (nowLegend in visualMapColor) {
      mychart.setOption({
        visualMap: {
          min: 0,
          max: visualMapColor[nowLegend].maxValue,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          color: visualMapColor[nowLegend].color,
          textStyle: {
            color: "#fff"
          }
        }
      })
    } else {
      return;
    }

  })

  // 地图加载
  function loadMap(mapCode, name, opt) {
    $.get(mapCode, function (geoJson) {
      if (geoJson) {
        mychart.hideLoading();
        echarts.registerMap(name, geoJson);
        mychart.clear();
        mychart.setOption(opt, true)
      }
    })
  }

})

