// js/patternGenerator.js
const patternGenerator = {
    generatePattern: () => {
        const patternData = [];
        for (let i = 0; i < 100; i++) {
            patternData.push({
                x: Math.random() * 500,
                y: Math.random() * 500,
                radius: Math.random() * 5,
                color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
            });
        }
        return artData;
    }
};