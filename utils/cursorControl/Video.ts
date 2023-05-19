class Video {
  private static instance: Video;
  public element: HTMLVideoElement;
  public stream: MediaStream;
  public wrapper: HTMLDivElement;

  private constructor() {}

  public init = () => {
    this.element = document.createElement('video');
    this.element.width = 0;
    this.element.height = 0;
    this.element.autoplay = true;
    this.element.muted = true;
    console.log('append element');
    this.wrapper.append(this.element);
  };

  public static getInstance(wrapper: HTMLDivElement): Video {
    if (!Video.instance) {
      Video.instance = new Video();
    }
    Video.instance.wrapper = wrapper;

    return Video.instance;
  }

  public activate = (): Promise<void> =>
    new Promise((resolve) => {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId:
              'a293c12547fe1c69d0b89646e3c44f11e4de21b636c9cdc75c14c1346edfbfa4',
          },
        })
        .then((stream) => {
          this.stream = stream;
          this.element.height = this.stream
            .getVideoTracks()[0]
            .getSettings().height;
          this.element.width = this.stream
            .getVideoTracks()[0]
            .getSettings().width;
          this.element.srcObject = this.stream;
          this.element.addEventListener('loadeddata', (e) => {
            console.log('loadeddata', e);
            resolve();
          });
        });

      navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {
        console.log(
          deviceInfos.filter((device) => device.kind === 'videoinput')
        );
      });
    });

  public destroy = () => {
    this.stream.getTracks().map((track) => track.stop());
  };
}

export default Video;
