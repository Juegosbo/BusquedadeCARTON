const cartonImages = {
    1: '001.jpg',
    2: '002.jpg',
    3: '003.jpg',
    4: '004.jpg',
    5: '005.jpg',
    6: '006.jpg',
    7: '007.jpg',
    8: '008.jpg',
    9: '009.jpg',
    10: '010.jpg'
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
