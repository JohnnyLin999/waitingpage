document.addEventListener('DOMContentLoaded', () => {
    // 1. 按下免費試用按鈕，彈出提示
    const freeTrialBtn = document.getElementById('freeTrialBtn');
    if (freeTrialBtn) {
        freeTrialBtn.addEventListener('click', () => {
            alert('開始 7 天免費試用！');
        });
    }

    // 2. 點擊展覽卡片，彈出展覽名稱
    const cards = document.querySelectorAll('.exhibition-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.exhibition-name').textContent;
            alert(`您點擊了：「${name}」`);
        });
    });
});
