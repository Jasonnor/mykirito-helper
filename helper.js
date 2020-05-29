function runJob() {
    const actionBtn = Array.from(document.querySelectorAll('button:not([disabled])')).find(el => el.textContent === '汁妹')
    if (actionBtn) {
        console.log(`Click action`)
        actionBtn.click()
    }
    const rewardBtn = Array.from(document.querySelectorAll('button:not([disabled])')).find(el => el.textContent === '領取獎勵')
    if (rewardBtn) {
        console.log(`Click reward`)
        rewardBtn.click()
    }
}
(function loop() {
    const duration = Math.random() * 10000 + 10000
    console.log(`Wait ${(duration / 1000).toFixed(2)} sec before next action...`)
    setTimeout(function () {
        runJob()
        loop()
    }, duration)
}())