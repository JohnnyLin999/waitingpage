document.addEventListener('DOMContentLoaded', () => {
            // 1. 按下免費試用按鈕，重新整理畫面
            const freeTrialBtn = document.getElementById('freeTrialBtn');
            if (freeTrialBtn) {
                freeTrialBtn.addEventListener('click', () => {
                    location.reload(); // Refresh the page
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

            // 新增自動輪播展覽卡片的功能
            const track = document.querySelector('.carousel-track');
            const slides = document.querySelectorAll('.exhibition-card');
            let currentIndex = 0;
            const slideCount = slides.length;

            // 透過 getComputedStyle 取得包含 margin 的寬度
            function getSlideWidth() {
                const slide = slides[0];
                const style = getComputedStyle(slide);
                const marginRight = parseFloat(style.marginRight) || 0;
                return slide.offsetWidth + marginRight;
            }

            function moveToNextSlide() {
                const slideWidth = getSlideWidth(); // 每次移動前重新計算 slide 寬度
                currentIndex = (currentIndex + 1) % slideCount;
                track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }

            // 每 3 秒自動切換
            setInterval(moveToNextSlide, 3000);

            // 新增按鈕點擊事件，打開對應的網址
            const buttons = document.querySelectorAll('.exhibition-card .btn-primary');
            const urls = [
                'https://www.coursera.org/professional-certificates/google-data-analytics',
                'https://www.coursera.org/professional-certificates/google-it-support',
                'https://www.coursera.org/specializations/data-science-foundations',
                'https://www.coursera.org/professional-certificates/ibm-data-science',
                'https://www.coursera.org/professional-certificates/google-project-management',
                'https://www.coursera.org/specializations/introduction-data-science'
            ];

            buttons.forEach((button, index) => {
                button.addEventListener('click', (event) => {
                    event.stopPropagation(); // 防止觸發卡片的點擊事件
                    window.open(urls[index], '_blank');
                });
            });
        });