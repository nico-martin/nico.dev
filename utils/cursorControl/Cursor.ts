import EventBus from './EventBus';

export enum CURSOR_STATE {
  OPEN = 'open',
  PINCH = 'pinch',
}

export interface CursorPosition {
  x: number;
  y: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  target: Element;
}

interface CursorEvent extends CursorPosition {
  type: keyof EventsDefinitions;
}

interface CursorPointerEvent extends CursorEvent {
  timestamp: number;
}

interface CursorMoveEvent extends CursorPointerEvent {
  movementX: number;
  movementY: number;
}

export type EventsDefinitions = {
  click: CursorEvent;
  mouseup: CursorPointerEvent;
  mousedown: CursorPointerEvent;
  drag: CursorMoveEvent;
  move: CursorMoveEvent;
};

const initialCursorStyles: Partial<CSSStyleDeclaration> = {
  width: '15px',
  height: '15px',
  borderRadius: '500px',
  border: '2px solid transparent',
  transform: 'translateY(-50%) translateX(-50%)',
  transition: '100ms ease-in-out scale',
  zIndex: '9999',
  borderColor: 'black',
  position: 'fixed',
  top: '0px',
  left: '0px',
};

class Cursor {
  private cursor: HTMLDivElement = null;
  private cursorState: CURSOR_STATE = CURSOR_STATE.OPEN;
  private eventBus = new EventBus<EventsDefinitions>();
  private movePosition: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  public init = () => {
    this.cursor = document.createElement('div');
    this.setCursorStyle(initialCursorStyles);
    document.body.appendChild(this.cursor);
  };

  public destroy = () => {
    if (this.cursor) this.cursor.remove();
  };

  private getCursorPosition = (): CursorPosition => {
    const rect = this.cursor.getBoundingClientRect();
    return {
      x: Math.round(rect.left),
      y: Math.round(rect.top),
      clientX: Math.round(rect.left),
      clientY: Math.round(rect.top),
      pageX: Math.round(rect.left),
      pageY: Math.round(window.scrollY + rect.top),
      target: document.elementFromPoint(rect.left, rect.top),
    };
  };

  public setCursorStyle = (styles: Partial<CSSStyleDeclaration>) =>
    Object.entries(styles).map(
      ([property, value]) => (this.cursor.style[property] = value)
    );

  public setCursorColor = (color: string): void => {
    this.cursor.style.borderColor = color;
  };

  public setCursorPosition = (left: number, top: number): void => {
    this.cursor.style.top = top + 'px';
    this.cursor.style.left = left + 'px';
  };

  public setCursorState = (state: CURSOR_STATE) => {
    if (state === CURSOR_STATE.PINCH) {
      const cursorPosition = this.getCursorPosition();
      this.movePosition &&
        this.eventBus.publish('drag', {
          ...cursorPosition,
          type: 'drag',
          timestamp: Date.now(),
          movementX: cursorPosition.x - this.movePosition.x,
          movementY: cursorPosition.y - this.movePosition.y,
        });
      this.movePosition = { x: cursorPosition.x, y: cursorPosition.y };
    } else if (state === CURSOR_STATE.OPEN) {
      const cursorPosition = this.getCursorPosition();
      this.eventBus.publish('move', {
        ...cursorPosition,
        type: 'move',
        timestamp: Date.now(),
        movementX: cursorPosition.x - this.movePosition.x,
        movementY: cursorPosition.y - this.movePosition.y,
      });
    }
    if (state === this.cursorState) return;
    this.onCursorStateChange(state, this.cursorState);
    this.cursorState = state;
  };

  public onCursorStateChange = (
    state: CURSOR_STATE,
    oldState: CURSOR_STATE
  ) => {
    const cursorPosition = this.getCursorPosition();
    if (oldState === CURSOR_STATE.OPEN && state === CURSOR_STATE.PINCH) {
      this.eventBus.publish('mousedown', {
        ...cursorPosition,
        type: 'mousedown',
        timestamp: Date.now(),
      });
    } else if (oldState === CURSOR_STATE.PINCH && state === CURSOR_STATE.OPEN) {
      this.eventBus.publish('click', {
        ...cursorPosition,
        type: 'click',
      });
      this.eventBus.publish('mouseup', {
        ...cursorPosition,
        type: 'mouseup',
        timestamp: Date.now(),
      });
      this.movePosition = { x: 0, y: 0 };
    }
  };

  public addEventListener = <T extends keyof EventsDefinitions>(
    eventName: T,
    listener: (payload: EventsDefinitions[T]) => void
  ) => this.eventBus.subscribe(eventName, listener);
}

export default Cursor;
