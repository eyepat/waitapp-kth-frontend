export const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

export const preloadImages = (images: string[]) => {
  images.forEach((image) => {
    preloadImage(image);
  });
};
