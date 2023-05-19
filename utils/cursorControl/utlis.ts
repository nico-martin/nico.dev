export interface CenterAndDistance {
  center: { x: number; y: number };
  distance: number;
}

export interface CursorPoint {
  x: number;
  y: number;
  size: number;
}

export interface BrowserFrame {
  left: number;
  top: number;
  width: number;
  height: number;
}

export const findCenterAndDistance = (
  p1: { x: number; y: number },
  p2: { x: number; y: number }
): CenterAndDistance => {
  const centerX = (p1.x + p2.x) / 2;
  const centerY = (p1.y + p2.y) / 2;
  const distance = Math.sqrt(
    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
  );
  return { center: { x: centerX, y: centerY }, distance: distance };
};
