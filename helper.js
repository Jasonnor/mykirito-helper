function clickEnabledBtnContainsText(text) {
    const button = Array
        .from(document.querySelectorAll('button:not([disabled])'))
        .find(el => el.textContent === text);
    if (button) {
        console.log(`Click ${text}`);
        button.click();
    }
}

let jobTextList = ['汁妹', '領取獎勵', '友好切磋'];

function loopJob(jobText) {
    const duration = Math.random() * 10000 + 10000;
    console.log(
        `Wait ${(duration / 1000).toFixed(2)} sec before next ${jobText}...`);
    setTimeout(function () {
        clickEnabledBtnContainsText(jobText);
        loopJob(jobText);
    }, duration);
}

(function () {
    jobTextList.forEach(jobText => loopJob(jobText));
})();
