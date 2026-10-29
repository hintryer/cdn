document.addEventListener('DOMContentLoaded', function() {
        // CSS样式
        const style = document.createElement('style');
        style.textContent = `
            .scroll-to-top {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #ebedf0;
                border-radius: 50%;
                padding: 12px;
                cursor: pointer;
                z-index: 1000;
                display: none;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
                opacity: 0.8;
            }
            .scroll-to-top:hover {
                opacity: 1;
                
                transform: translateY(-2px);
            }
            .scroll-to-top-icon {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
                transition: transform 0.3s ease;
            }
            .scroll-to-top:hover .scroll-to-top-icon {
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);

        // 创建回到顶部按钮
        const scrollToTopBtn = document.createElement('div');
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.innerHTML = '<img src="https://api.iconify.design/tdesign:backtop.svg" alt="回到顶部" class="scroll-to-top-icon">';

        // 将按钮添加到页面
        document.body.appendChild(scrollToTopBtn);

        // 点击事件处理
        scrollToTopBtn.addEventListener('click', function() {
            // 平滑滚动到顶部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 滚动事件监听，控制显示/隐藏按钮
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        }

        // 立即检查一次滚动位置
        handleScroll();

        // 监听滚动事件
        window.addEventListener('scroll', handleScroll);

        // 性能优化 - 减少事件监听器的数量
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    });
