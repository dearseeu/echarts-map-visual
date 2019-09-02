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
      roam: 'move',
      selectedMode: 'single',
      layoutCenter: ['50%', '50%'],
      layoutSize: '80%',
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
      trigger: 'item',
      formatter: '{b}<br/>{a}'
    },
    legend: {
      left: 'center',
      bottom: '2%',
      selectedMode: 'single',
      textStyle: {
        color: '#fff'
      }
    },
    toolbox: [
      {
        top: '2%',
        left: '30%',
        feature: {
          myTool1: placeName('series')
        },
        iconStyle: {
          borderColor: '#fff'
        }
      },
      {
        top: '2%',
        right: '30%',
        feature: {
          myTool1: toolboxScale('series', '放大', svg_bigger),
          myTool2: toolboxScale('series', '缩小', svg_small)
        },
        iconStyle: {
          borderColor: '#fff'
        }
      }
    ],
    title: {
      text: '云南省',
      textStyle: {
        color: '#fff',
      },
      left: 'center',
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
    console.log(params)
    let name = params.name,
      mapCode = country[name],
      dataIndex = params.seriesIndex,
      seriesName = params.seriesName;
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
          left: 'center',
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
                return formatter.name + "</>" + formatter.seriesName + "：" + formatter.value[2] + "个"
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
        roam: 'move',
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
          },
          layoutCenter: ['50%', '50%'],
          layoutSize: '80%'
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

      // 左侧面板展开 返回 toolbox
      var openLeftDiv = {
        show: true,
        orient: 'vertical',
        itemSize: 30,
        left: 0,
        top: 'center',
        feature: {
          myTool1: {
            show: true,
            title: '展开',
            icon: svg_detail,
            iconStyle: {
              color: "#5396CE"
            },
            onclick: function (params) {
              var option = mychart.getOption();
              // var width = mychart.getWidth();
              // console.log(width)
              // 如果没有detail 
              var detail = $("#detail")[0];
              if (!detail || detail.style.display == "none") {
                option.toolbox[1].feature.myTool1.title = '收回';
                option.toolbox[1].feature.myTool1.icon = svg_withdraw;
                option.toolbox[1].left = 400;
                btnLeft(params.option)
                // option.toolbox[1].show = false;
              } else {
                option.toolbox[1].feature.myTool1.title = '展开';
                option.toolbox[1].feature.myTool1.icon = svg_detail;
                option.toolbox[1].left = 0;
                // var detail = $("#detail")[0];
                detail.style.display = "none";
              }
              mychart.setOption(option)
            }
          }
        }
      }

      // 左侧面板已展开时
      var leftIsOpenDive = {
        show: true,
        orient: 'vertical',
        itemSize: 30,
        left: 15,
        top: 'center',
        feature: {
          myTool1: {
            show: true,
            title: '关闭',
            icon: svg_withdraw,
            iconStyle: {
              color: "#5396CE"
            },
            onclick: function () {
              // var option = mychart.getOption();
              // btnLeft(params.option)
              clearDiv();
              // clearLeftDiv();
              // option.toolbox[1].show = false;
              // mychart.setOption(option)
              loadMap(
                mapCode,
                name,
                assignOpt(
                  otherToolbox(false),
                  nowOtherSeries,
                  baseOpt
                )
              )
            }
          }
        }
      }


      var openRightDiv = {
        show: true,
        orient: 'vertical',
        itemSize: 30,
        right: 100,
        top: 'center',
        feature: {
          myTool1: {
            show: true,
            title: '收回',
            icon: svg_detail,
            iconStyle: {
              color: "#5396CE"
            },
            onclick: function () {
              var option = mychart.getOption();
              // if (this.model.option.title == "展开") {
              //   option.toolbox[2].feature.myTool1.title = '收回';
              //   option.toolbox[2].feature.myTool1.icon = svg_detail;
              //   option.toolbox[2].right = 400;
              //   btnRight("")
              // } else {
              // option.toolbox[2].feature.myTool1.title = '展开';
              option.toolbox[2].feature.myTool1.show = false;
              // option.toolbox = option.toolbox.slice(0,3)
              console.log(option.toolbox)

              // option.toolbox[2].right = 0;


              var detail_right = $("#detail-right")[0];
              detail_right.style.display = "none";
              var detail = $("#detail")[0];
              // }
              if (!detail || detail.style.display == 'none') {
                var dom = mychart.getDom();
                dom.style.width = '100%'
                // dom.style.left = '0'
                mychart.resize()
              }

              mychart.setOption(option)
            }
          }
        }
      }

      // 总览数据配置
      var allToolbox = {
        toolbox:
          [
            {
              top: '2%',
              left: '30%',
              feature: {
                myTool1: placeName('geo'),
                myTool2: {
                  show: true,
                  title: '总览',
                  icon: svg_total,
                  onclick: function () {
                    loadMap(
                      mapCode,
                      name,
                      assignOpt(
                        otherToolbox(false),
                        nowOtherSeries,
                        baseOpt
                      )
                    )
                    clearDiv();
                  }
                },
              },
              iconStyle: {
                borderColor: '#fff'
              },
            },
            openLeftDiv,
            // openRightDiv,
            {
              top: '2%',
              right: '30%',
              feature: {
                myTool1: {
                  show: true,
                  title: '返回',
                  icon: svg_back,
                  onclick: function () {
                    loadMap(province.yunnan, "云南", YNoption);
                    clearDiv();
                  }
                },
                myTool2: toolboxScale('geo', '放大', svg_bigger),
                myTool3: toolboxScale('geo', '缩小', svg_small)
              }
            }
          ]
      }

      // 分布数据配置
      // leftIsOpen:左侧面板是否展开
      function otherToolbox(leftIsOpen) {
        var otherToolbox = {
          toolbox: [
            {
              top: '2%',
              left: '30%',
              feature: {
                myTool1: placeName('geo'),
                myTool2: {
                  show: true,
                  title: '分布',
                  icon: svg_other,
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
                    clearDiv();
                  }
                },
              },
              iconStyle: {
                borderColor: '#fff'
              }
            },
            openLeftDiv,
            // openRightDiv,
            {
              top: '2%',
              right: '30%',
              feature: {
                myTool1: {
                  show: true,
                  title: '返回',
                  icon: svg_back,
                  onclick: function () {
                    loadMap(province.yunnan, "云南", YNoption);
                    clearDiv();
                  }
                },
                myTool2: toolboxScale('geo', '放大', svg_bigger),
                myTool3: toolboxScale('geo', '缩小', svg_small)
              }
            }
          ]
        }
        if (leftIsOpen) {
          otherToolbox.toolbox[1] = leftIsOpenDive
        }
        return otherToolbox
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

      // 左边按钮的弹框
      function btnLeft(params) {
        var detail = $("#container").find("#detail").length;
        if (detail == 0) {
          var detail_box = $("<div id='detail'></div")
          detail_box.css({
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "400px",
            background: "rgba(9, 32, 85, 0.5)",
            color: "#fff",
            overflow: "hidden",
            padding: "10px",
            boxSizing: "border-box"
          })
          $("#container").append(detail_box);
        }
        if ($("#detail")) {
          $("#detail").css({
            display: "block"
          })
          var html = `
          <div style="padding: 5px">
            <input type="text" class="input">
          </div>
          <div style="display: flex;padding: 5px;">
            <select class="select">
              <option value="XX县">州市</option>
              <option value="XX县">州市</option>
            </select>
            <select class="select">
              <option value="XX县">区县</option>
              <option value="XX县">区县</option>
            </select>
            <select class="select">
              <option value="XX县">隐患</option>
              <option value="XX县">隐患</option>
            </select>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>${seriesName}</th>
                <th>企业类型</th>
                <th>企业属地</th>
              </tr>
            </thead> 
          </table>
          <div style="margin:15px 0;overflow:auto;height:87%;">
            <table>
              <tbody class="tbody">
              </tbody>
            </table>
          </div>
          `;

          $("#detail").html(html)

          var trs = "", arr = [];
          switch (dataIndex) {
            case 0:
              arr = [
                ["旅游包车", mapDataJgdxScatterA],
                ["班线客运", mapDataJgdxScatterB],
                ["客运站场", mapDataJgdxScatterC],
                ["危险货物运输", mapDataJgdxScatterD]
              ]
              break;
            case 1:
              arr = [
                ["一般隐患", mapDataYhScatterA],
                ["重大隐患", mapDataYhScatterB]
              ]
              break;
            case 2:
              arr = [
                ["一般事故", mapDataSgScatterA],
                ["较大事故", mapDataSgScatterB],
                ["重大事故", mapDataSgScatterC],
                ["特别重大事故", mapDataSgScatterD],
              ]
              break;
            case 3:
              arr = [
                ["较小风险", mapDataFxScatterA],
                ["一般风险", mapDataFxScatterB],
                ["较大风险", mapDataFxScatterC],
                ["重大风险", mapDataFxScatterD]
              ]
              break;
            case 4:
              arr = [
                ["危险源", mapDataWxyScatter]
              ]
              break;
            case 5:
              arr = [
                ["旅游包车", mapDataJdjcScatterA],
                ["班线客运", mapDataJdjcScatterB],
                ["客运站场", mapDataJdjcScatterC],
                ["危险货物运输", mapDataJdjcScatterD],
              ]
              break;
            default:
              return;
          };

          // 组装table内容
          arr.forEach(v => {
            for (var i = 0; i < v[1].length; i++) {
              trs += `<tr><td>${v[1][i].name}</td><td>${v[0]}</td><td>县属企业</td></tr>`
            }
            return trs;
          })

          var tbody = $(".tbody");
          tbody.html(trs);

          var input = $(".input");
          var select = $(".select");
          var table = $(".table");
          var th = $(".table tr th");
          var td = $(".table tr td");
          var firstTd = $(".tbody tr td:first-child")
          input.css({
            width: " 100%",
            border: "1px solid #69ACD3",
            background: "#0A1D44",
            padding: "8px",
            boxSizing: "border-box"
          })
          select.css({
            width: "33%",
            padding: "8px",
            color: "#fff",
            background: "#0A1D44",
            border: "1px solid #69ACD3",
            marginRight: "2px"
          })
          table.css({
            width: "100%",
            lineHeight: "25px"
          })
          th.css({
            color: "#EBD36C"
          })
          td.css({
            textAlign: "center",
            // cursor: "pointer",
            fontSize: "14px"
          })
          firstTd.css({
            cursor: "pointer",
            width: "40%"
          })
          firstTd.on("click", function () {
            var siblings = $(this).parent().siblings()
            $(this).css({
              'color': '#41BBFF'
            })
            for (var key in siblings) {
              // console.log(siblings[key].firstChild)
              if (siblings[key].firstChild) {
                siblings[key].firstChild.style.color = '#fff'
              }

            }
            // $(this).style.color = 'red'
            // $(this).siblings().style.color = 'white'
            var title = $(this).html()
            // var option = mychart.getOption();
            // console.log(option.toolbox)
            // if (option.toolbox[2].feature.myTool1.title == "展开") {
            //   option.toolbox[2].feature.myTool1.title = '收回';
            //   option.toolbox[2].feature.myTool1.icon = svg_detail;
            //   option.toolbox[2].right = 400;
            // }
            // option.toolbox[3] = openRightDiv;
            // mychart.setOption(option)

            btnRight(title, mychart)

            var dom = mychart.getDom();
            dom.style.width = '50%'
            dom.style.left = '25%'
            mychart.resize()

            loadMap(
              mapCode,
              name,
              assignOpt(
                otherToolbox(true),
                nowOtherSeries,
                baseOpt
              )
            )
            // btnRight(title)
          })
        }
      }



      // 清空div
      function clearDiv() {
        var detail = $("#detail")[0];
        if (detail) detail.style.display = "none";

        var detail_right = $("#detail-right")[0];
        if (detail_right) detail_right.style.display = "none";

        var dom = mychart.getDom();
        dom.style.width = '100%'
        dom.style.left = '0'
        mychart.resize()
      }
      // 清空左侧div
      function clearLeftDiv() {
        var detail = $("#detail")[0];
        if (detail) detail.style.display = "none";
      }
      // 清空右侧div
      function clearRigDiv() {
        var detail_right = $("#detail-right")[0];
        if (detail_right) detail_right.style.display = "none";
      }
    }

    mychart.on("click", function (params) {
      let name = params.name, mapCode = village[params.name];
      mapCodeSelect.push(mapCode);
      mapNameSelect.push(name);

      // 判断点击类型 geo:下钻 series:展开右侧
      if (params.componentType == "geo") {
        if (params.name in village) {
          clearDiv();
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
                myTool1: placeName('geo'),
                myTool2: {
                  show: true,
                  title: '返回',
                  icon: svg_back,
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
      } else if (params.componentType == "series") {
        var tool2 = mychart.getOption().toolbox[0].feature.myTool2
        if (tool2) {
          var isOther = mychart.getOption().toolbox[0].feature.myTool2.title;
          if (isOther == "分布") {
            var option = mychart.getOption();
            // console.log(option.toolbox)
            // option.toolbox[3] = openRightDiv

            // console.log(option.toolbox[1])
            // option.toolbox[1].left = 10;
            // if (option.toolbox[2].feature.myTool1.title == "展开") {
            // option.toolbox[2].feature.myTool1.show = true
            // option.toolbox[2].feature.myTool1.title = '收回';
            //   option.toolbox[2].feature.myTool1.icon = svg_detail;
            //   option.toolbox[2].right = 400;
            // }

            btnRight(name, mychart)
            var detail = $("#detail")[0];
            if (!detail || detail.style.display == 'none') {
              var dom = mychart.getDom();
              dom.style.width = '80%'
              // dom.style.left = '25%'
              mychart.resize()
            }

            mychart.setOption(option)
          }
        }

      }

    })

    // 右边按钮弹框
    function btnRight(title, mychart) {
      var detail_right = $("#container").find("#detail-right").length;
      if (detail_right == 0) {
        var detail_box = $("<div id='detail-right'></div")
        detail_box.css({
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "400px",
          background: "rgba(9, 32, 85, 0.5)",
          color: "#fff",
          overflow: "auto",
          fontSize: "14px",
          overflow: "hidden",
          padding: "10px",
          boxSizing: "border-box"
        })
        $("#container").append(detail_box);
      }
      if ($("#detail-right")) {
        $("#detail-right").css({
          display: "block"
        })

        var html = `
          <div id="closeBtn" style="position:absolute;cursor:pointer;font-weight: bold;">X</div>
          <h3 style="margin:30px 0;font-size:18px">${title} <a href="#" class="subtitle">详情</a></h3>
          <div class="addr">地址：云南省</div>
          <div>
            <ul class="list" style="text-align:center;margin:10px 0">
              <li>安全负责人：<span>王大牛</span></li>
              <li>安全负责人：<span>王大牛</span></li>
              <li>安全负责人：<span>王大牛</span></li>
              <li>安全负责人：<span>王大牛</span></li>
            </ul>
          </div>
          <div class="dash-div">
            运营车辆：<span class="num">128</span>辆，从业人员<span class="num">300</span>人
          </div>
          <div>
            <h3 class="blue">安全生产事故隐患</h3>
            <table class="right-table">
              <tr>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
              </tr>
              <tr>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
              </tr>
              <tr>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
              </tr>
            </table>
          </div>
          <div style="background: #D7E901;color: #000;margin: 20px 0;padding:12px 0;text-align: center;border-radius: 50px;">
            发生事故：<span class="blue">1</span>起，死亡：<span class="blue">9</span>人，同比：<span class="blue">6%↑</span>和<span
              class="blue">24.2%↓</span>
          </div>
          <div>
            <h3 class="blue">安全生产事故隐患</h3>
            <table class="right-table">
              <tr>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
              </tr>
              <tr>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
              </tr>
              <tr>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
                <td>日常排查：<span class="blue">45</span>次</td>
              </tr>
            </table>
          </div>
          <div class="check" style="position: relative;margin:20px 0">
            <ul style="text-align:center">
              <li>工作检查</li>
              <li>工作检查</li>
              <li>工作检查</li>
              <li>工作检查</li>
            </ul>
            <div class="hover-box">
              <dl>
                <dt>隐患数</dt>
                <dd>一般隐患：114个</dd>
                <dd>一般隐患：114个</dd>
                <dd>一般隐患：114个</dd>
              </dl>
              <dl>
                <dt>整改情况</dt>
                <dd>一般隐患：114个</dd>
                <dd>一般隐患：114个</dd>
                <dd>一般隐患：114个</dd>
              </dl>
            </div>
          </div>
        `
        $("#detail-right").html(html)

        var subtitle = $(".subtitle"),
          addr = $(".addr"),
          list = $(".list li"),
          h3 = $("h3"),
          table = $(".right-table"),
          td = $(".right-table tr td"),
          blue = $(".blue"),
          check = $(".check ul li"),
          hoverBox = $(".hover-box"),
          dashDiv = $(".dash-div");

        subtitle.css({
          color: "#ddd",
          fontSize: '13px'
        })
        addr.css({
          textAlign: "center",
          fontSize: "14px",
          margin: "10px 0",
        })
        list.css({
          display: "inline-block",
          marginBottom: "10px",
          marginRight: "5px",
          textAlign: "center"
        })
        h3.css({
          textAlign: "center",
          magin: "10px 0",
          color: '#41BBFF'
        })
        table.css({
          width: "100%",
          // fontSize: "12px",
          border: "1px solid #03A0AB",
          lineHeight: "30px",
          textAlign: "center",
          borderCollapse: "collapse",
          margin: "10px 0"
        })
        td.css({
          border: "1px solid #03A0AB"
        })
        blue.css({
          color: "#03A0AB",
          margin: "20px 0"
        })
        check.css({
          display: "inline-block",
          width: "20%",
          background: "#213567",
          padding: "5px 5px"
        })
        hoverBox.css({
          position: "absolute",
          top: "-215px",
          left: "70px",
          background: "rgba(31,63,97,0.8)",
          padding: "5px 10px",
          boxSizing: "border-box",
          display: "none"
        })
        dashDiv.css({
          borderRadius: "50px",
          padding: "12px 0",
          border: "1px dotted #D6E904",
          color: "#D6E904",
          textAlign: "center",
          margin: "20px 0"
        })
        check.hover(function () {
          hoverBox.show();
        }, function () {
          hoverBox.hide();
        })
        $("#closeBtn").click(function(){
          if($("#detail-right")){
            $("#detail-right").css({
              display:'none'
            })
          }
          var detail = $("#detail")[0];
          // }
          if (!detail || detail.style.display == 'none') {
            var dom = mychart.getDom();
            dom.style.width = '100%'
            // dom.style.left = '0'
            mychart.resize()
          }
        })
      }
      // 设置按钮
      // var option = mychart.getOption();
      // if (option.toolbox.length == 3) {//添加
      //   option.toolbox[3] = openRightDiv
      //   mychart.setOption(option)
      // } else if (option.toolbox.length == 4) {
      //   // debugger
      //   console.log(111)
      //   option.toolbox[3].feature.myTool1.show = true
      //   // mychart.setOption(option)
      // }


    }

  })

  // legend图例切换
  mychart.on("legendselectchanged", function (obj) {
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

  // 工具箱
  // 放大 | 缩小
  function toolboxScale(type, title, svg) {
    if (type == 'series') {
      return {
        show: true,
        title: title,
        icon: svg,
        onclick: function () {
          var arr = mychart.getOption().series
          arr.forEach(v => {
            var odlSize = parseInt(v.layoutSize.slice(0, v.layoutSize.length - 1))
            odlSize = isBigOrSmall(title, odlSize)
            v.layoutSize = odlSize
          })
          mychart.setOption({ series: arr })
        }
      }
    } else if (type == "geo") {
      return {
        show: true,
        title: title,
        icon: svg_bigger,
        onclick: function () {
          var geo = mychart.getOption().geo[0]
          var odlSize = parseInt(geo.layoutSize.slice(0, geo.layoutSize.length - 1))
          odlSize = isBigOrSmall(title, odlSize)
          geo.layoutSize = odlSize
          mychart.setOption({ geo })
        }
      }
    }
  }
  function isBigOrSmall(title, odlSize) {
    if (title == '放大') { odlSize += 10 }
    else { odlSize -= 10 }
    if (odlSize >= 150) {
      odlSize = '150%'
    } else if (odlSize <= 50) {
      odlSize = '50%'
    } else {
      odlSize = odlSize + '%'
    }
    return odlSize
  }
  // 地名
  function placeName(type) {
    if (type == 'series') {
      return {
        show: true,
        title: '地名',
        icon: svg_label,
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
        }
      }
    } else {
      return {
        show: true,
        title: '地名',
        icon: svg_label,
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
      }
    }

  }
})
