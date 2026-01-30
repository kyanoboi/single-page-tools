const types = [...new Set(graphes.node.map(({ type }) => type))];
const colors = ["#f385ff", "#ff974b", "#9b4ff9", "#ff7981"];
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

const getItemStyle = (color) => {
  return {
    color: {
      type: "radial",
      x: 0.5,
      y: 0.5,
      r: 0.5,
      colorStops: [
        {
          offset: 0,
          color, // 0% 处的颜色
        },
        {
          offset: 0.8,
          color, // 80% 处的颜色
        },
        {
          offset: 0.83,
          color: "transparent",
        },
      ],
      global: false,
    },
  };
};

const categories = types.map((type, index) => {
  return {
    name: type,
    symbolSize: 130 - (index + 1) * 20,
    itemStyle: getItemStyle(colors[index]),
  };
});

const option = {
  backgroundColor: "#100c2a",
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
      nodeScaleRatio: 0.6,
      draggable: true,
      roam: true,
      data: nodes,
      links: links_,
      categories,
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
        width: 80,
        overflow: "truncate",
        formatter: function ({ data }) {
          return data.value.name;
        },
      },
      edgeSymbol: ["circle", "arrow"],
      edgeSymbolSize: [5, 5],
      edgeLabel: {
        show: true,
        borderWidth: 0,
        color: "#fff",
        formatter: "{c}",
        fontSize: 10,
      },
    },
  ],
};
