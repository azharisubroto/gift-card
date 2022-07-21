import * as htmlToImage from 'html-to-image';

export const handleDownloadImage = async () => {
  const nodeEl = document.getElementById(`composer`);
  await htmlToImage.toJpeg(nodeEl, { quality: 1 }).then(function (dataUrl) {
    console.log(dataUrl);
    const link = document.createElement(`a`);
    link.download = `gift-card.jpeg`;
    link.href = dataUrl;
    link.click();
  });
};
