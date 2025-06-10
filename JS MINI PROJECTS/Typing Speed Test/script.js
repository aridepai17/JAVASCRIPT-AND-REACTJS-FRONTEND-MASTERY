const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span b');
const wpm = document.querySelector('.wpm span b');
const cpm = document.querySelector('.cpm span b');
const tryAgainBtn = document.querySelector('button');

// Set Values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
    const paragraphs = [
        "Avoid daydreaming about the years to come.",
        "You are the most important person in your whole life.",
        "Always be true to who you are, and ignore what other people have to say about you.",
        "Only demonstrate your strength when it’s really required.",
        "Follow aridepai17 on GitHub for more details, projects and open source."
    ];

    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = '';
    for (const char of paragraphs[randomIndex]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }

    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', () => input.focus());
    typingText.addEventListener('click', () => input.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar === characters[charIndex].innerText) {
            characters[charIndex].classList.add('correct');
        } else {
            mistake++;
            characters[charIndex].classList.add('incorrect');
        }

        characters[charIndex].classList.remove('active');
        charIndex++;
        if (charIndex < characters.length) {
            characters[charIndex].classList.add('active');
        }

        mistakes.innerText = mistake;
    } else {
        clearInterval(timer);
        input.value = '';
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        time.innerText = timeLeft;

        let wpmVal = Math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
        let cpmVal = Math.round((charIndex - mistake) / (maxTime - timeLeft) * 60);

        wpm.innerText = wpmVal > 0 ? wpmVal : 0;
        cpm.innerText = cpmVal > 0 ? cpmVal : 0;
    } else {
        clearInterval(timer);
        input.value = '';
    }
}

function reset() {
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = 0;
    mistake = 0;
    isTyping = false;

    time.innerText = timeLeft;
    mistakes.innerText = mistake;
    wpm.innerText = 0;
    cpm.innerText = 0;
    input.value = '';

    loadParagraph();
}

input.addEventListener('input', initTyping);
tryAgainBtn.addEventListener('click', reset);
loadParagraph();
