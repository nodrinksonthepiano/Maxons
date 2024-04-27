document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://raw.githubusercontent.com/nodrinksonthepiano/Maxons/main/main/BurgerBaconCheeseLoadedTots.jpeg",
        "https://raw.githubusercontent.com/nodrinksonthepiano/Maxons/main/main/HoneySweetChickenSandwichMural.jpeg",
        "https://raw.githubusercontent.com/nodrinksonthepiano/Maxons/main/main/BaconCheeseburgers2.jpeg"
    ];

    const indicators = document.querySelector('.carousel-indicators');
    const inner = document.querySelector('.carousel-inner');

    images.forEach((src, index) => {
        const indicator = document.createElement('li');
        indicator.setAttribute('data-target', '#carouselExampleIndicators');
        indicator.setAttribute('data-slide-to', index);
        if (index === 0) indicator.className = 'active';
        indicators.appendChild(indicator);

        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');
        const img = document.createElement('img');
        img.src = src;
        img.className = 'd-block w-100';
        item.appendChild(img);
        inner.appendChild(item);
    });
});
