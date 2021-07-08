export const supportedImageFormat = (): Promise<'avif' | 'webp' | 'jpg'> =>
  new Promise((resolve, reject) => {
    const avifData =
      'data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=';
    const webpData =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

    const checkAviv = () =>
      new Promise((resolve, reject) => {
        fetch(avifData)
          .then((r) => r.blob())
          .then((blob) =>
            createImageBitmap(blob).then(
              () => resolve('avif support'),
              () => reject()
            )
          )
          .catch(() => reject());
      });

    Promise.allSettled([checkAviv(), fetch(webpData)]).then(([avif, webp]) => {
      resolve(
        avif.status === 'fulfilled'
          ? 'avif'
          : webp.status === 'fulfilled'
          ? 'webp'
          : 'jpg'
      );
    });
  });
