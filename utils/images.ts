export const supportedImageFormat = (): Promise<'avif' | 'webp' | 'jpg'> =>
  new Promise((resolve, reject) => {
    const avifData =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    const webpData =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    const checkSupport = (imgData: string): Promise<string> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = img.onerror = () =>
          img.height === 2 ? resolve('') : reject();
        img.src = imgData;
      });

    Promise.allSettled([checkSupport(avifData), checkSupport(webpData)]).then(
      ([avif, webp]) =>
        resolve(
          avif.status === 'fulfilled'
            ? 'avif'
            : webp.status === 'fulfilled'
            ? 'webp'
            : 'jpg'
        )
    );
  });
