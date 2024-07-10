const cartonImages = {
    1: '001.png',
    2: '002.png',
    3: '003.png',
    4: '004.png',
    5: '005.png',
    6: '006.png',
    7: '007.png',
    8: '008.png',
    9: '009.png',
    10: '010.png'
};

function searchCarton() {
    const cartonNumber = parseInt(document.getElementById('cartonNumber').value);
    const cartonImage = document.getElementById('cartonImage');
    const message = document.getElementById('message');

    if (cartonImages[cartonNumber]) {
        cartonImage.src = cartonImages[cartonNumber];
        cartonImage.style.display = 'block';
        message.textContent = `Cartón número: ${cartonNumber}`;
    } else {
        cartonImage.style.display = 'none';
        message.textContent = 'Introduce un número de cartón válido entre 1 y 10.';
    }
}
