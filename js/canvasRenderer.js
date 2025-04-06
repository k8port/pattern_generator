// js/canvasRenderer.js
const canvasRenderer = {
    drawPattern: (canvas, patternData) => {
        if (!canvas) {
            console.error("Canvas element is null.");
            return; // Exit if the canvas is null
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error("Could not get 2D context.");
            return; // Exit if context cannot be retrieved
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        patternData.forEach(data => {
            ctx.beginPath();
            ctx.arc(data.x, data.y, data.radius, 0, 2 * Math.PI);
            ctx.fillStyle = data.color;
            ctx.fill();
        });
    }
};