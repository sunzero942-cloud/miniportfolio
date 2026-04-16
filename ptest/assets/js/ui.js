// PHILOS哲学人格测试 - UI交互逻辑

const ui = {
    // 初始化UI
    init: function() {
        this.setupEventListeners();
        this.restoreProgress();
        this.updateProgressBar();
    },

    // 设置事件监听器
    setupEventListeners: function() {
        // 页面离开提示
        window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
        
        // 响应式导航
        this.setupResponsiveNav();
        
        // 平滑滚动
        this.setupSmoothScroll();
    },

    // 处理页面离开
    handleBeforeUnload: function(e) {
        // 检查是否有未完成的测试
        if (this.hasUncompletedTest()) {
            e.preventDefault();
            e.returnValue = '你有未完成的测试，确定要离开吗？';
            return e.returnValue;
        }
    },

    // 检查是否有未完成的测试
    hasUncompletedTest: function() {
        const simpleProgress = localStorage.getItem('philos_simple_progress');
        const complexProgress = localStorage.getItem('philos_complex_progress');
        
        if (simpleProgress) {
            const progress = JSON.parse(simpleProgress);
            return progress.currentQuestion < 24; // 25题测试
        }
        
        if (complexProgress) {
            const progress = JSON.parse(complexProgress);
            return progress.currentQuestion < 54; // 55题测试
        }
        
        return false;
    },

    // 设置响应式导航
    setupResponsiveNav: function() {
        // 响应式菜单逻辑
        const handleResize = () => {
            const width = window.innerWidth;
            // 可以在这里添加响应式逻辑
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
    },

    // 设置平滑滚动
    setupSmoothScroll: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    // 进度条管理
    updateProgressBar: function(current, total) {
        if (current !== undefined && total !== undefined) {
            const progress = (current / total) * 100;
            const progressBar = document.getElementById('progressBar');
            const progressText = document.getElementById('progressText');
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            
            if (progressText) {
                progressText.textContent = `${current}/${total}`;
            }
        }
    },

    // 本地存储操作
    storage: {
        // 保存数据
        save: function(key, data) {
            try {
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } catch (error) {
                console.error('保存数据失败:', error);
                return false;
            }
        },

        // 读取数据
        load: function(key) {
            try {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null;
            } catch (error) {
                console.error('读取数据失败:', error);
                return null;
            }
        },

        // 删除数据
        remove: function(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error('删除数据失败:', error);
                return false;
            }
        },

        // 清除所有数据
        clear: function() {
            try {
                localStorage.clear();
                return true;
            } catch (error) {
                console.error('清除数据失败:', error);
                return false;
            }
        },

        // 检查存储是否可用
        isAvailable: function() {
            try {
                const test = 'philos_test';
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (error) {
                return false;
            }
        }
    },

    // 测试进度管理
    progress: {
        // 保存测试进度
        save: function(testType, currentQuestion, answers) {
            const progress = {
                currentQuestion,
                answers,
                timestamp: new Date().toISOString()
            };
            
            const key = testType === 'complex' ? 'philos_complex_progress' : 'philos_simple_progress';
            return ui.storage.save(key, progress);
        },

        // 加载测试进度
        load: function(testType) {
            const key = testType === 'complex' ? 'philos_complex_progress' : 'philos_simple_progress';
            return ui.storage.load(key);
        },

        // 清除测试进度
        clear: function(testType) {
            const key = testType === 'complex' ? 'philos_complex_progress' : 'philos_simple_progress';
            return ui.storage.remove(key);
        },

        // 检查是否有保存的进度
        hasSavedProgress: function(testType) {
            const key = testType === 'complex' ? 'philos_complex_progress' : 'philos_simple_progress';
            return ui.storage.load(key) !== null;
        }
    },

    // 结果管理
    results: {
        // 保存测试结果
        save: function(result) {
            return ui.storage.save('philos_result', result);
        },

        // 加载测试结果
        load: function() {
            return ui.storage.load('philos_result');
        },

        // 清除测试结果
        clear: function() {
            return ui.storage.remove('philos_result');
        },

        // 检查是否有测试结果
        hasResult: function() {
            return ui.storage.load('philos_result') !== null;
        }
    },

    // 恢复进度
    restoreProgress: function() {
        // 可以在具体页面中调用
    },

    // 页面导航
    navigate: {
        // 跳转到指定页面
        to: function(url) {
            window.location.href = url;
        },

        // 跳转到测试页面
        toTest: function(type) {
            const url = type === 'complex' ? 'test-complex.html' : 'test-simple.html';
            this.to(url);
        },

        // 跳转到结果页面
        toResult: function() {
            this.to('result.html');
        },

        // 跳转到首页
        toHome: function() {
            this.to('index.html');
        }
    },

    // 动画效果
    animate: {
        // 淡入效果
        fadeIn: function(element, duration = 300) {
            element.style.opacity = '0';
            element.style.transition = `opacity ${duration}ms ease-in-out`;
            
            setTimeout(() => {
                element.style.opacity = '1';
            }, 10);
        },

        // 滑入效果
        slideIn: function(element, direction = 'top', duration = 300) {
            const startPositions = {
                top: { y: -20 },
                bottom: { y: 20 },
                left: { x: -20 },
                right: { x: 20 }
            };
            
            const position = startPositions[direction] || startPositions.top;
            
            element.style.opacity = '0';
            element.style.transform = `translate(${position.x}px, ${position.y}px)`;
            element.style.transition = `all ${duration}ms ease-out`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translate(0, 0)';
            }, 10);
        },

        // 脉冲效果
        pulse: function(element, duration = 1000) {
            element.style.animation = `pulse ${duration}ms ease-in-out`;
            
            setTimeout(() => {
                element.style.animation = '';
            }, duration);
        }
    },

    // 表单处理
    form: {
        // 验证表单
        validate: function(form) {
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    this.highlightError(input);
                } else {
                    this.removeHighlight(input);
                }
            });
            
            return isValid;
        },

        // 高亮错误
        highlightError: function(element) {
            element.style.borderColor = '#DC2626';
            element.style.boxShadow = '0 0 0 2px rgba(220, 38, 38, 0.1)';
        },

        // 移除高亮
        removeHighlight: function(element) {
            element.style.borderColor = '';
            element.style.boxShadow = '';
        }
    },

    // 数据导出/导入
    data: {
        // 导出数据
        export: function() {
            const data = {
                results: ui.results.load(),
                simpleProgress: ui.progress.load('simple'),
                complexProgress: ui.progress.load('complex'),
                timestamp: new Date().toISOString()
            };
            
            const dataStr = JSON.stringify(data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `philos_test_data_${new Date().toISOString().slice(0, 10)}.json`;
            link.click();
            
            URL.revokeObjectURL(url);
        },

        // 导入数据
        import: function(jsonString) {
            try {
                const data = JSON.parse(jsonString);
                
                if (data.results) {
                    ui.results.save(data.results);
                }
                
                if (data.simpleProgress) {
                    ui.storage.save('philos_simple_progress', data.simpleProgress);
                }
                
                if (data.complexProgress) {
                    ui.storage.save('philos_complex_progress', data.complexProgress);
                }
                
                return true;
            } catch (error) {
                console.error('导入数据失败:', error);
                return false;
            }
        }
    },

    // 响应式工具
    responsive: {
        // 检查是否为移动设备
        isMobile: function() {
            return window.innerWidth < 768;
        },

        // 检查是否为平板设备
        isTablet: function() {
            return window.innerWidth >= 768 && window.innerWidth < 1024;
        },

        // 检查是否为桌面设备
        isDesktop: function() {
            return window.innerWidth >= 1024;
        },

        // 获取设备类型
        getDeviceType: function() {
            if (this.isMobile()) return 'mobile';
            if (this.isTablet()) return 'tablet';
            return 'desktop';
        }
    },

    // 消息提示
    toast: {
        // 显示提示消息
        show: function(message, type = 'info', duration = 3000) {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.textContent = message;
            
            toast.style.position = 'fixed';
            toast.style.top = '20px';
            toast.style.right = '20px';
            toast.style.padding = '12px 20px';
            toast.style.borderRadius = '4px';
            toast.style.color = 'white';
            toast.style.fontWeight = '500';
            toast.style.zIndex = '10000';
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            
            // 设置类型样式
            const types = {
                info: '#3B82F6',
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444'
            };
            
            toast.style.backgroundColor = types[type] || types.info;
            
            document.body.appendChild(toast);
            
            // 显示动画
            setTimeout(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateX(0)';
            }, 10);
            
            // 隐藏动画
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, duration);
        },

        // 显示成功消息
        success: function(message, duration) {
            this.show(message, 'success', duration);
        },

        // 显示错误消息
        error: function(message, duration) {
            this.show(message, 'error', duration);
        },

        // 显示警告消息
        warning: function(message, duration) {
            this.show(message, 'warning', duration);
        },

        // 显示信息消息
        info: function(message, duration) {
            this.show(message, 'info', duration);
        }
    },

    // 性能优化
    performance: {
        // 图片懒加载
        lazyLoadImages: function() {
            const images = document.querySelectorAll('img[data-src]');
            
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    });
                });
                
                images.forEach(img => imageObserver.observe(img));
            } else {
                // 回退方案
                images.forEach(img => {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                });
            }
        },

        // 防抖函数
        debounce: function(func, wait) {
            let timeout;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(context, args);
                }, wait);
            };
        },

        // 节流函数
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const context = this;
                const args = arguments;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    },

    // 无障碍功能
    accessibility: {
        // 增强键盘导航
        enhanceKeyboardNavigation: function() {
            const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            
            focusableElements.forEach(element => {
                element.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                            e.preventDefault();
                            element.click();
                        }
                    }
                });
            });
        },

        // 增加对比度模式
        toggleHighContrast: function() {
            document.body.classList.toggle('high-contrast');
        }
    }
};

// 扩展CSS动画
if (!document.getElementById('philos-animations')) {
    const style = document.createElement('style');
    style.id = 'philos-animations';
    style.textContent = `
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        
        .slide-in {
            animation: slideIn 0.5s ease-out;
        }
        
        .pulse {
            animation: pulse 1s ease-in-out;
        }
        
        .high-contrast {
            background-color: #000 !important;
            color: #fff !important;
        }
        
        .high-contrast a {
            color: #ff0 !important;
        }
        
        .high-contrast button {
            background-color: #333 !important;
            color: #fff !important;
            border: 1px solid #fff !important;
        }
    `;
    document.head.appendChild(style);
}

// 自动初始化
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function() {
        ui.init();
    });
}