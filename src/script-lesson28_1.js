const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

document.addEventListener('keydown', (event) => {
    const lettersKey = event.key;

    if (letters.includes(lettersKey)) {
        const letterToScroll = document.querySelector(`.letter-${lettersKey}`);
        letterToScroll.scrollIntoView({behavior: "smooth"});
    };
});