const types = [...new Set(graphes.nodes.map(({ type }) => type))];
const nodes = graphes.nodes
  .map(({ type, id, ...props }) => ({
    name: id,
    category: type + "_child",
    label: {
      show: true,
      fontSize: 10,
      borderWidth: 0,
      borderColor: "transparent",
      lineHeight: 10,
      formatter: function ({ data }) {
        return data.value.label;
      },
    },
    value: props,
  }))
  .concat(
    types.map((type) => ({
      name: type,
      category: type,
      label: {
        show: true,
        fontSize: 14,
        borderWidth: 0,
        borderColor: "transparent",
        lineHeight: 14,
      },
      value: type,
    }))
  );
const links_ = graphes.links
  .map(({ source, target, label }) => {
    return {
      source,
      target,
      value: label,
    };
  })
  .concat(
    types.map((type) => ({
      source: "数字\n底座",
      target: type,
      value: "",
    }))
  );

const categories = [
  {
    name: "root",
    symbol: "image://" + "./img/root.svg",
    symbolSize: 80,
  },
  {
    name: "地下水水位上升对地铁隧道结构的影响分析",
    symbol: "image://" + "./img/oringeBig.svg",
    symbolSize: 52,
  },
  {
    name: "生态补水与城市构建筑物安全",
    symbol: "image://" + "./img/greenBig.svg",
    symbolSize: 52,
  },
  {
    name: "地下水水位上升对隧道结构工程的影响研究",
    symbol: "image://" + "./img/pinkBig.svg",
    symbolSize: 52,
  },
  {
    name: "地下水管理条例",
    symbol: "image://" + "./img/blueBig.svg",
    symbolSize: 52,
  },
  {
    name: "地下水水位上升对地铁隧道结构的影响分析_child",
    symbol: "image://" + "./img/oringeSmall.svg",
    symbolSize: 33,
  },
  {
    name: "生态补水与城市构建筑物安全_child",
    symbol: "image://" + "./img/greenSmall.svg",
    symbolSize: 33,
  },
  {
    name: "地下水水位上升对隧道结构工程的影响研究_child",
    symbol: "image://" + "./img/pinkSmall.svg",
    symbolSize: 33,
  },
  {
    name: "地下水管理条例_child",
    symbol: "image://" + "./img/blueSmall.svg",
    symbolSize: 33,
  },
  {
    name: "实习路线-third",
    symbol: "image://" + "./img/oringeSmall.svg",
    symbolSize: 22,
  },
  {
    name: "标本-third",
    symbol: "image://" + "./img/greenSmall.svg",
    symbolSize: 22,
  },
  {
    name: "地质体-third",
    symbol: "image://" + "./img/pinkSmall.svg",
    symbolSize: 22,
  },
  {
    name: "剖面-third",
    symbol: "image://" + "./img/blueSmall.svg",
    symbolSize: 22,
  },
];

const option = {
  backgroundColor: "#091c3d",
  bottom: 20,
  left: 0,
  right: 0,
  top: 0,
  animationDuration: 1500,
  animationEasingUpdate: "quinticInOut",
  cursor: "pointer",
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
      data: nodes.concat({
        name: "数字\n底座",
        category: "root",
        value: 0,
        label: {
          show: true,
          fontSize: 16,
          borderWidth: 0,
          borderColor: "transparent",
          lineHeight: 20,
        },
      }),
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
