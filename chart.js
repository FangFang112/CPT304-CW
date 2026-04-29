let canvas = null;
let ctx = null;

/**
 * 初始化画布，将其挂载到 chartEl 容器
 * @param {HTMLElement} chartEl
 */
function initChart(chartEl) {
  canvas = document.createElement("canvas");
  canvas.width = 50;
  canvas.height = 50;
  chartEl.appendChild(canvas);

  ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("Failed to get 2D context from canvas");
    return;
  }

  ctx.lineWidth = 8;
}

// drawCircle 签名不动，保持原样
function drawCircle(color, ratio, anticlockwise) {
  if (!ctx || !canvas) return;

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    20,
    0,
    ratio * 2 * Math.PI,
    anticlockwise
  );
  ctx.stroke();
}

// 在 updateChart 里用 canvas rotation 来拼接两段弧
function updateChart(income, outcome) {
  if (!ctx || !canvas) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const total = income + outcome;
  const ratio = total === 0 ? 0.5 : income / total;

  // 画白色弧（从 0 开始，占 ratio）
  drawCircle("#FFF", ratio, false);

  // 旋转画布，让橙红色弧从白色弧结束处开始
  const incomeAngle = ratio * 2 * Math.PI;
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(incomeAngle);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  // 画橙红色弧（在旋转后的坐标系里从 0 开始，占 1-ratio）
  drawCircle("#F0624D", 1 - ratio, false);

  ctx.restore();
}
// ============================================================
// 浏览器自动初始化（仅在 <script> 加载时执行）
// ============================================================
if (typeof window !== "undefined" && typeof module === "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    const chartEl = document.querySelector(".chart");
    if (chartEl) initChart(chartEl);
  });
}

// ============================================================
// 导出（供 Jest 测试使用）
// ============================================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initChart,
    drawCircle,
    updateChart,
    setCtx: (c) => { ctx = c; },
    setCanvas: (c) => { canvas = c; },
    getCtx: () => ctx,
    getCanvas: () => canvas,
  };
}
