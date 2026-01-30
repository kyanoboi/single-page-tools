const types = [...new Set(graphes.node.map(({ type }) => type))];
const colors = ["#3C69A4", "#1C9B94", "#C5963B", "#ff7981"];
const nodes = graphes.node.map(({ type, bsm, ...props }) => {
  return {
    name: bsm,
    category: type,
    value: props,
  };
});
const links_ = graphes.relation.map(({ source, target, value }) => {
  return {
    source: source.toString(),
    target: target.toString(),
    value,
  };
});
console.log(links_);

const option = {
  backgroundColor: "#fff",
  bottom: 20,
  left: 0,
  right: 0,
  top: 0,
  animationDuration: 1500,
  animationEasingUpdate: "quinticInOut",
  cursor: "pointer",
  tooltip: {
    valueFormatter: function (params) {
      return params.name;
    },
  },
  series: [
    {
      name: "知识图谱",
      type: "graph",
      hoverAnimation: false,
      layout: "force",
      force: {
        repulsion: 300,
        gravity: 0.1,
        edgeLength: 100,
      },
      nodeScaleRatio: 0,
      draggable: true,
      roam: true,
      data: nodes,
      links: links_,
      categories: [
        {
          name: "一级",
          symbolSize: 110,
          itemStyle: {
            color: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#3C69A4", // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: "#3C69A4", // 80% 处的颜色
                },
                {
                  offset: 0.83,
                  color: "transparent",
                },
              ],
              global: false,
            },
          },
        },
        {
          name: "二级",
          symbolSize: 80,
          itemStyle: {
            color: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#C5963B", // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: "#C5963B", // 80% 处的颜色
                },
                {
                  offset: 0.83,
                  color: "transparent",
                },
              ],
              global: false,
            },
          },
        },
        {
          name: "三级",
          symbolSize: 60,
          itemStyle: {
            color: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#1C9B94", // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: "#1C9B94", // 80% 处的颜色
                },
                {
                  offset: 0.83,
                  color: "transparent",
                },
              ],

              global: false,
            },
          },
        },
      ],
      scaleLimit: {
        //所属组件的z分层，z值小的图形会被z值大的图形覆盖
        min: 0.5, //最小的缩放值
        max: 9, //最大的缩放值
      },
      emphasis: {
        // 取消节点之间的联动效果
        focus: "none",
      },
      autoCurveness: true,
      lineStyle: {
        width: 1,
        type: "solid",
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        width: 50,
        overflow: "breakAll",
        align: "center",
        fontWeight: "bold",
        formatter: function ({ data }) {
          let text = "";
          switch (data.category) {
            case "一级":
              text = `{a|${data.value.name}}`;
              break;
            case "二级":
              text = `{b|${data.value.name}}`;
              break;
            case "三级":
              const str = data.value.name.slice(0, 6);
              text = `{c|${str.slice(0, 3)}\n${str.slice(-3)}}`;
              break;
          }
          return text;
        },
        rich: {
          a: {
            fontSize: 18,
          },
          b: {
            fontSize: 14,
          },
          c: {
            fontSize: 10,
            padding: 2,
          },
        },
      },
      edgeSymbol: ["circle", "arrow"],
      edgeSymbolSize: [5, 5],
      edgeLabel: {
        show: true,
        borderWidth: 0,
        color: "#000",
        formatter: "{c}",
        fontSize: 10,
      },
    },
  ],
};
