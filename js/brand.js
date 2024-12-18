document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');
    const featureTextElements = document.querySelectorAll('.feature-text');
    const newWopperTextElements = document.querySelectorAll('.NewWopper-text');

    function switchTab(tabId) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);

        selectedTab.classList.add('active');
        selectedContent.classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    function handleScroll() {
        featureTextElements.forEach(el => {
            if (isElementInView(el)) {
                el.classList.add('visible');
            }
        });

        newWopperTextElements.forEach(el => {
            if (isElementInView(el)) {
                el.classList.add('visible');
            }
        });
    }

    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
