import Canvas from '@utils/cursorControl/Canvas';
import Cursor from '@utils/cursorControl/Cursor';
import HandposeDetection from '@utils/cursorControl/HandposeDetection';
import Video from '@utils/cursorControl/Video';
import { BrowserFrame, CursorPoint } from '@utils/cursorControl/utlis';

const FLIP_VIDEO_HORIZONTAL = true;
const SHOW_VIDEO = true;

class CursorControl {
  private static instance: CursorControl;
  private id = 'cursorControl';
  private initialized: boolean = false;
  private wrapper: HTMLDivElement;
  private video: Video;
  private canvas: Canvas;
  private cursor: Cursor;
  private frame: BrowserFrame;
  private handposeDetection: HandposeDetection;
  private doAnimationFrame: boolean = false;

  private constructor() {}

  public static getInstance(): CursorControl {
    if (!CursorControl.instance) {
      CursorControl.instance = new CursorControl();
    }

    return CursorControl.instance;
  }

  public destroy = () => {
    this.doAnimationFrame = false;
    this.video.destroy();
    this.handposeDetection.destroy();
    this.wrapper.remove();
    this.cursor.destroy();
    window.removeEventListener('resize', this.setFrame);
  };

  public initialize = async (): Promise<void> => {
    if (this.initialized) this.destroy();

    this.wrapper = document.createElement('div');
    this.wrapper.id = this.id;
    this.wrapper.style.position = 'fixed';
    this.wrapper.style.right = '0px';
    this.wrapper.style.bottom = '0px';
    this.wrapper.style.pointerEvents = '0px';
    this.wrapper.style.zIndex = '999';
    this.wrapper.style.pointerEvents = 'none';

    document.body.append(this.wrapper);

    this.video = Video.getInstance(this.wrapper);
    this.video.init();
    if (FLIP_VIDEO_HORIZONTAL)
      this.video.element.style.transform = 'scale(-1, 1)';
    if (!SHOW_VIDEO) this.video.element.style.opacity = '0';

    this.canvas = Canvas.getInstance(this.wrapper);
    this.canvas.init();
    this.canvas.element.style.position = 'absolute';
    this.canvas.element.style.left = '0px';
    this.canvas.element.style.top = '0px';

    await this.video.activate();

    this.canvas.element.width = this.video.element.width;
    this.canvas.element.height = this.video.element.height;

    this.cursor = new Cursor();
    this.cursor.init();

    this.setFrame();
    window.addEventListener('resize', this.setFrame);

    this.handposeDetection = HandposeDetection.getInstance();
    await this.handposeDetection.setUp();
  };

  private setFrame = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const videoRatio = this.video.element.width / this.video.element.height;
    const windowRatio = windowWidth / windowHeight;
    const adjustHorizontal = windowRatio <= videoRatio;

    const frameWidth = adjustHorizontal
      ? this.video.element.height * windowRatio
      : this.video.element.width;
    const frameHeight = adjustHorizontal
      ? this.video.element.height
      : this.video.element.width * (windowHeight / windowWidth);

    const left = adjustHorizontal
      ? (this.video.element.width - frameWidth) / 2
      : 0;
    const top = adjustHorizontal
      ? 0
      : (this.video.element.height - frameHeight) / 2;

    this.frame = { left, top, width: frameWidth, height: frameHeight };
  };

  private predict = async () => {
    if (!this.doAnimationFrame) return;
    const predictMiddelPoint = await this.handposeDetection.predictMiddelPoint(
      this.video.element
    );

    const point: CursorPoint = predictMiddelPoint
      ? {
          x: FLIP_VIDEO_HORIZONTAL
            ? this.video.element.width - predictMiddelPoint.center.x
            : predictMiddelPoint.center.x,
          y: predictMiddelPoint.center.y,
          size: predictMiddelPoint.distance / 2,
        }
      : null;

    SHOW_VIDEO && this.canvas.draw(point, this.frame);

    if (point) {
      const leftInFrame = point.x - this.frame.left;
      const topInFrame = point.y - this.frame.top;
      const leftInFrameRelative =
        ((100 / this.frame.width) * leftInFrame) / 100;
      const topInFrameRelative = ((100 / this.frame.height) * topInFrame) / 100;
      this.cursor.setCursorPosition(
        window.innerWidth * leftInFrameRelative,
        window.innerHeight * topInFrameRelative
      );
    }

    requestAnimationFrame(this.predict);
  };

  public startPrediction = () => {
    this.doAnimationFrame = true;
    this.predict();
  };
}

export default CursorControl;
