// js/uiController.js
const uiController = {
    init: (canvas) => {
        const generateButton = document.getElementById('generateButton');
        generateButton.addEventListener('click', () => {
            uiController.handleGenerateClick(canvas);
        });
    },

    handleGenerateClick: (canvas) => {
        const patternData = patternGenerator.generatePattern();
        canvasRenderer.drawPattern(canvas, patternData);
    }
};