export const brandColors: Record<string, [string, string]> = {
  TypeScript:    ["#3178C6", "#99d9f0"],
  React:         ["#61DAFB", "#087EA4"],
  Angular:       ["#DD0031", "#FF9A00"],
  "Next.js":     ["#333333", "#888888"],
  "Node.js":     ["#339933", "#8BC34A"],
  NestJS:        ["#E0234E", "#FF6B6B"],
  Ionic:         ["#3880FF", "#56C9F5"],
  "Stencil.js":  ["#16B7FB", "#0064A5"],
  Firebase:      ["#FFCA28", "#FF6F00"],
  GCP:           ["#4285F4", "#34A853"],
  RxJS:          ["#B7178C", "#E91E8C"],
  Redux:         ["#764ABC", "#B39DDB"],
  Sass:          ["#CC6699", "#F48FB1"],
  PWA:           ["#5A0FC8", "#A66CFF"],
  Git:           ["#F05032", "#FFA726"],
  SQL:           ["#00758F", "#F29111"],
  AI:            ["#7C3AED", "#C084FC"],
  "Claude Code": ["#D97706", "#FCD34D"],
  Storybook:     ["#FF4785", "#FF8AC2"],
  PHP:           ["#777BB4", "#B0B3D6"],
  Laravel:       ["#FF2D20", "#FB923C"],
  NX:            ["#1B6AC9", "#4DA8FF"],
  Accessibility: ["#0072CE", "#00A3FF"],
};

export function hexToHue(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  if (delta === 0) return 0;
  let h = 0;
  if (max === r) h = ((g - b) / delta) % 6;
  else if (max === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  return h < 0 ? h + 360 : h;
}
