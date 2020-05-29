function clickEnabledBtnContainsText(text) {
    const button = Array
        .from(document.querySelectorAll('button:not([disabled])'))
        .find(el => el.textContent === text);
    if (button) {
        console.log(`Click ${text}`);
        button.click();
    }
}

function runJob() {
    clickEnabledBtnContainsText('汁妹');
    clickEnabledBtnContainsText('領取獎勵');
}

(function loop() {
    const duration = Math.random() * 10000 + 10000;
    console.log(
        `Wait ${(duration / 1000).toFixed(2)} sec before next action...`);
    setTimeout(function () {
        runJob();
        loop();
    }, duration);
}());
