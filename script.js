const svg = document.getElementById('triangles');

svg.addEventListener('click', (e) => {
    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
    const random = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    document.documentElement.style.cssText = 
    `--dark-color: ${random()};
    --light-color: ${random()};`;
    console.log(random());
})