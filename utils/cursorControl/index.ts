import CursorControl from '@utils/cursorControl/CursorControl';

const cursorControl = CursorControl.getInstance();

export const init = async () => {
  await cursorControl.initialize();
  await cursorControl.startPrediction();
};

export const stop = () => cursorControl.destroy();
