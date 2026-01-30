const colors = {};
const colorSet = new Set();
// 设置亮度阈值（可根据需要调整）
const threshold = 50;
/**
 * 生成随机不重复的 16 进制颜色
 * @param {string} - id 唯一id
 * @returns {string} - 随机的 16 进制颜色
 */
function generateUniqueRandomColor(id) {
  if (colors[id]) {
    return colors[id];
  }
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    color += characters.charAt(randomIndex);
  }
  if (colorSet.has(color)) {
    return generateUniqueRandomColor(id);
  }
  if (isColorTooDark(color)) {
    return generateUniqueRandomColor(id);
  }
  colorSet.add(color);
  colors[id] = color;
  return color;
}
/**
 * 检查颜色是否过于接近黑色
 * @param {string} color - 16 进制颜色字符串
 * @returns {boolean} - 是否过于接近黑色
 */
function isColorTooDark(color) {
  // 将颜色转换为 RGB 格式
  const rgbColor = hexToRgb(color);

  // 计算颜色的亮度
  const brightness =
    (rgbColor.r * 299 + rgbColor.g * 587 + rgbColor.b * 114) / 1000;

  return brightness < threshold;
}

/**
 * 将 16 进制颜色字符串转换为 RGB 对象
 * @param {string} color - 16 进制颜色字符串
 * @returns {{r: number, g: number, b: number}} - RGB 对象
 */
function hexToRgb(color) {
  const hex = color.substring(1);
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
}
