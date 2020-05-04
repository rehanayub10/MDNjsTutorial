const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++) {
    let thumbnail = document.createElement('div');
    thumbnail.innerHTML = `<img src="images/pic${i}.jpg">`
    thumbBar.appendChild(thumbnail);
}

thumbBar.addEventListener('click', e => {
    displayedImage.setAttribute('src',e.target.getAttribute('src'));
});

btn.addEventListener('click', e => {
    let temp = btn.getAttribute('class');
    if (temp === "dark") {
        btn.textContent = "lighten";
        btn.setAttribute('class','light');
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.textContent = "darken";
        btn.setAttribute('class','dark');
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});

//const newImage = document.createElement('img');
//newImage.setAttribute('src', xxx);
//thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
