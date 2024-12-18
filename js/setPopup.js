function createSetPopup() {
    const popup = document.createElement('div');
    popup.className = 'set-popup';
    popup.innerHTML = `
        <div class="set-popup-content">
            <div class="set-popup-header">
                <h2>세트 메뉴 구성해보기</h2>
                <button class="close-set-popup">
                    <img src="./assets/etc/close.png" alt="">
                </button>
            </div>
            <div class="set-popup-container">
                <div class="set-popup-body">
                    <div class="set-section">
                        <h3>햄버거 선택</h3>
                        <div class="set-dropdown">
                            <button class="dropdown-btn">햄버거를 선택하세요!</button>
                            <div class="dropdown-content burger-options">
                                ${Object.keys(menuData)
                                    .filter(key => 
                                        menuData[key].category.some(category => 
                                            ['추천메뉴', '오리지널&맥시멈', '프리미엄', '와퍼&주니어','치킨&슈림프버거거'].includes(category)
                                        )
                                    )
                                        .map(key => `
                                        <div class="dropdown-item" data-value="${key}" data-price="${menuData[key].price}">
                                            <img src="${menuData[key].image}" alt="${menuData[key].name}">
                                            <span>${menuData[key].name}</span>
                                        </div>
                                    `).join('')}
                            </div>
                        </div>
                        <div class="selected-item burger-selected"></div>
                    </div>

                    <div class="set-section">
                        <h3>음료 선택</h3>
                        <div class="set-dropdown">
                            <button class="dropdown-btn">음료를 선택하세요!</button>
                            <div class="dropdown-content drink-options">
                                ${Object.keys(menuData)
                                    .filter(key => menuData[key].category.includes('음료&디저트'))
                                    .map(key => `
                                        <div class="dropdown-item" data-value="${key}" data-price="${menuData[key].price}">
                                            <img src="${menuData[key].image}" alt="${menuData[key].name}">
                                            <span>${menuData[key].name}</span>
                                        </div>
                                    `).join('')}
                            </div>
                        </div>
                        <div class="selected-item drink-selected"></div>
                    </div>

                    <div class="set-section">
                        <h3>사이드 선택</h3>
                        <div class="set-dropdown">
                            <button class="dropdown-btn">사이드를 선택하세요!</button>
                            <div class="dropdown-content side-options">
                                ${Object.keys(menuData)
                                    .filter(key => menuData[key].category.includes('사이드'))
                                    .map(key => `
                                        <div class="dropdown-item" data-value="${key}" data-price="${menuData[key].price}">
                                            <img src="${menuData[key].image}" alt="${menuData[key].name}">
                                            <span>${menuData[key].name}</span>
                                        </div>
                                    `).join('')}
                            </div>
                        </div>
                        <div class="selected-item side-selected"></div>
                    </div>
                </div>
                <div class="total-price">
                    <h3>총 가격 : <span>0</span>₩</h3>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    setupSetPopupEvents(popup);
}

function setupSetPopupEvents(popup) {
    const dropdownBtns = popup.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('show');
        });
    });

    const dropdownItems = popup.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const value = this.dataset.value;
            const price = parseInt(this.dataset.price);
            const section = this.closest('.set-section');
            const selectedDiv = section.querySelector('.selected-item');
            const dropdownContent = this.closest('.dropdown-content');
            const dropdownBtn = section.querySelector('.dropdown-btn'); 

            
            selectedDiv.innerHTML = `
                <img src="${menuData[value].image}" alt="${menuData[value].name}">
                <span class="price">${price.toLocaleString()}₩</span>
            `;
            dropdownBtn.textContent = menuData[value].name;
            dropdownBtn.style.color = '#512314';
            dropdownContent.classList.remove('show');
            
            updateTotalPrice(popup);
        });
    });

    const closeBtn = popup.querySelector('.close-set-popup');
    closeBtn.addEventListener('click', () => {
        popup.remove();
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove();
        }
    });
}

function updateTotalPrice(popup) {
    const selectedItems = popup.querySelectorAll('.selected-item');
    let total = 0;

    selectedItems.forEach(item => {
        const priceElement = item.querySelector('.price');
        if (priceElement) {
            const price = parseInt(priceElement.textContent.replace(/[^0-9]/g, ''));
            total += price;
        }
    });

    popup.querySelector('.total-price span').textContent = total.toLocaleString();
}

document.addEventListener('DOMContentLoaded', () => {
    const setButton = document.querySelector('.set-button');
    if (setButton) {
        setButton.addEventListener('click', createSetPopup);
    }
});