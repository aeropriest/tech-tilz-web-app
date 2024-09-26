export const drawRect = (detections, context) => {
  detections.forEach((prediction) => {
    const [x, y, w, h] = prediction["bbox"];
    const text = prediction["class"];

    const color = "green";
    context.strokeSylt = color;
    context.font = "18px Arial";
    context.fillStyle = color;

    context.beginPath();
    context.fillText(text, x, y);
    context.rect(x, y, w, h);
    context.stroke();
  });
};
