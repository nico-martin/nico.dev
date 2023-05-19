import {
  Hand,
  HandDetector,
  SupportedModels,
  createDetector,
} from '@tensorflow-models/hand-pose-detection';
import * as tfjs from '@tensorflow/tfjs';
import {
  CenterAndDistance,
  findCenterAndDistance,
} from '@utils/cursorControl/utlis';

//import '@tensorflow/tfjs-backend-webgpu';

class HandposeDetection {
  private static instance: HandposeDetection;
  private detector: HandDetector;

  private constructor() {}

  public static getInstance(): HandposeDetection {
    if (!HandposeDetection.instance) {
      HandposeDetection.instance = new HandposeDetection();
    }

    return HandposeDetection.instance;
  }

  private getDetector = async (): Promise<HandDetector> => {
    if (this.detector) {
      return this.detector;
    }

    await tfjs.ready();
    console.log('TFJS ready with backend', tfjs.getBackend());
    this.detector = await createDetector(SupportedModels.MediaPipeHands, {
      runtime: 'tfjs',
      modelType: 'full',
    });
    return this.detector;
  };

  public setUp = async () => await this.getDetector();

  public predictMiddelPoint = async (
    video: HTMLVideoElement
  ): Promise<CenterAndDistance> => {
    const detector = await this.getDetector();

    const hands = await detector.estimateHands(video);
    const rightHand: Hand =
      hands.find((hand) => hand.handedness === 'Left') || null;

    if (rightHand) {
      const indexTip = rightHand.keypoints.find(
        (finger) => finger.name === 'index_finger_tip'
      );
      const thumbTip = rightHand.keypoints.find(
        (finger) => finger.name === 'thumb_tip'
      );

      return findCenterAndDistance(indexTip, thumbTip);
    }
    return null;
  };

  public destroy = () => {
    this.detector && this.detector.reset();
  };
}

export default HandposeDetection;
