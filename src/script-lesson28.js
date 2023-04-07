// 1
const myPhotoScale = document.querySelector('.photo');
let clicks = 0;

myPhotoScale.addEventListener('click', () => {
    clicks++;

    if (clicks % 2 === 0) {
        myPhotoScale.classList.remove('my-photo-up');
        myPhotoScale.classList.add('my-photo-down');
    } else {
        myPhotoScale.classList.add('my-photo-up');
        myPhotoScale.classList.remove('my-photo-down');
    };
});


// 2
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// document.addEventListener('keydown', (event) => {
//     const lettersKey = event.key;

//     if (letters.includes(lettersKey)) {
//         const letterToScroll = document.querySelector(`.letter-${lettersKey}`);
//         letterToScroll.scrollIntoView({behavior: "smooth"});
//     };
// });