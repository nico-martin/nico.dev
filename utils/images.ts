export const supportedImageFormat = (): Promise<'avif' | 'webp' | 'jpg'> =>
  new Promise((resolve, reject) => {
    const avifData =
      'data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=';
    const webpData =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

    Promise.allSettled([fetch(avifData), fetch(webpData)]).then(
      ([avif, webp]) => {
        resolve(
          avif.status === 'fulfilled'
            ? 'avif'
            : webp.status === 'fulfilled'
            ? 'webp'
            : 'jpg'
        );
      }
    );
  });
