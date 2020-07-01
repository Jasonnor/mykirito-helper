function clickEnabledBtnContainsText(text) {
    const button = Array
        .from(document.querySelectorAll('button:not([disabled])'))
        .find(el => el.textContent === text);
    if (button) {
        console.log(`Click ${text}`);
        button.click();
    }
}

function addHcaptchaApi() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://hcaptcha.com/1/api.js?hl=zh-TW';
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    document.head.appendChild(script);
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

function checkCaptcha() {
    const duration = 20000;
    setTimeout(function () {
        if (document.querySelectorAll('iframe').length > 0) {
            console.log('Captcha detected!');
            hcaptcha.execute();
            new Notification(
                '騙人的吧，又有 Captcha 了',
                {'icon': 'https://i.imgur.com/qeoW9T5.png'});
        }
        checkCaptcha();
    }, duration);
}

(function () {
    Notification.requestPermission();
    addHcaptchaApi();
    jobTextList.forEach(jobText => loopJob(jobText));
    checkCaptcha();
})();
