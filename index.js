const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs').promises;

async function main() {
    registerFont('font/BIZ-UDGothicB.ttc', { family: 'Hoge Fuga' });
    const image = await loadImage('hunter.jpg');
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
    ctx.font = '50px "Hoge Fuga"';
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillText('こんにちは', 270, 50);
    fs.writeFile('result.png', canvas.toBuffer());
};
main();