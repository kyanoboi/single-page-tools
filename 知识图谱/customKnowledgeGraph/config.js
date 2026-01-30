const types = [...new Set(graphes.node.map(({ name }) => name))];
const nodes = graphes.node.map(({ name, bsm, ...props }) => {
  const color = generateUniqueRandomColor(name);
  return {
    name: bsm,
    category: name,
    value: props,
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
    },
    select: {
      itemStyle: {
        borderColor: "rgba(79, 193, 193, 1)",
        borderWidth: 2,
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
              color: "rgba(204, 255, 255, 1)",
            },
            {
              offset: 1,
              color: "rgba(204, 255, 255, 1)",
            },
          ],
          global: false,
        },
      },
    },
  };
});
const links_ = graphes.relation.map(({ source, target, value }) => {
  return {
    source,
    target,
    value,
  };
});

const option = {
  backgroundColor: "#091c3d",
  bottom: 20,
  left: 0,
  right: 0,
  top: 0,
  animationDuration: 1500,
  animationEasingUpdate: "quinticInOut",
  cursor: "pointer",
  tooltip: {},
  series: [
    {
      name: "知识图谱",
      type: "graph",
      hoverAnimation: false,
      layout: "force",
      force: {
        repulsion: 300,
        edgeLength: 100,
      },
      nodeScaleRatio: 0.6,
      draggable: true,
      roam: true,
      data: nodes,
      links: links_,
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
        fontSize: 12,
        color: "#fff",
        borderWidth: 0,
        formatter: function ({ data }) {
          return data.category;
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
