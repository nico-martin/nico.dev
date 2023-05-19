import {
  BrowserFrame,
  CenterAndDistance,
  CursorPoint,
} from '@utils/cursorControl/utlis';

class Canvas {
  private static instance: Canvas;
  public element: HTMLCanvasElement;
  public wrapper: HTMLDivElement;

  private constructor() {}

  public static getInstance(wrapper): Canvas {
    if (!Canvas.instance) {
      Canvas.instance = new Canvas();
    }
    Canvas.instance.wrapper = wrapper;

    return Canvas.instance;
  }

  public init = () => {
    this.element = document.createElement('canvas');
    this.element.width = 0;
    this.element.height = 0;
    this.wrapper.append(this.element);
  };

  public draw = (position: CursorPoint, frame: BrowserFrame) => {
    const ctx = this.element.getContext('2d');
    ctx.clearRect(0, 0, this.element.width, this.element.height);

    ctx.beginPath();
    ctx.rect(frame.left, frame.top, frame.width, frame.height);
    ctx.strokeStyle = 'white';
    ctx.stroke();

    if (position) {
      ctx.beginPath();
      ctx.arc(position.x, position.y, position.size, 0, 2 * Math.PI);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    /*
       ctx.beginPath();
       ctx.arc(
         position.center.x,
         position.center.y,
         position.distance / 2,
         0,
         2 * Math.PI
       );
       ctx.strokeStyle = '#000';
       ctx.lineWidth = 2;
       ctx.stroke();
   */
  };
}

export default Canvas;
