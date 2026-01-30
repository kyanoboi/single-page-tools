const fs = require("fs");
const path = require("path");
const data = require("./广西区县行政边界数据.json");

const result = data.features.reduce((acc, next) => {
  const key = next.properties["地级市"];
  if (acc[key]) {
    acc[key].push(next);
  } else {
    acc[key] = [next];
  }
  return acc;
}, {});

const resultDir = path.join(__dirname, "city");

Object.entries(result).forEach(([key, value]) => {
  const outputPath = path.join(resultDir, `${key}.json`);
  try {
    fs.writeFileSync(
      outputPath,
      JSON.stringify({ type: "FeatureCollection", features: value }),
      "utf-8"
    );
    console.log("文件已成功创建并写入");
  } catch (err) {
    console.error("写入文件出错:", err);
  }
});
