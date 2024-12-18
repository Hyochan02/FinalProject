document.addEventListener('DOMContentLoaded', () => {
    const menuDetail = document.getElementById('menu-detail');
    const imagePopup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');

    const urlParams = new URLSearchParams(window.location.search);
    const menuId = urlParams.get('id');

    function showMenuDetail(menuId) {
        const menu = menuData[menuId];
        if (!menu) {
            window.location.href = 'menu.html';
            return;
        }

        menuDetail.innerHTML = `
        <div class="menu-detail-container">
            <div class="menu-detail-wrap">
                <div class="menu-image-container">
                    <img src="${menu.image}" alt="${menu.name}" class="menu-image">
                </div>
                <div class="menu-info">
                    <div class="menu-header">
                        <div class="menu-title">
                            <h1>${menu.name}</h1>
                        </div>
                        <button class="set-button">세트 구성해보기</button>
                    </div>
                    <div class="divider"></div>
                    <p class="menu-description">${menu.description}</p>
                    <div class="divider"></div>
                    <div class="ingredients-container">
                        ${menu.ingredients.map(ing => `
                            <div class="ingredients-wrap">
                                <div class="ingredients-item" title="${ing.name}">
                                    ${ing.icon}
                                </div>
                                <p>${ing.name}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="divider"></div>
                    <p class="price">${menu.price.toLocaleString()}₩</p>
                    <div class="divider"></div>
                </div>
            </div>
            <div class="back-button">
                <img src="./assets/etc/list.png" alt="">
                <a href="menu.html">목록으로</a>
            </div>
        </div>
        `;

        const menuImage = menuDetail.querySelector('.menu-image');
        menuImage.addEventListener('click', () => showImagePopup(menu.image));
    }

    function showImagePopup(imageSrc) {
        popupImage.src = imageSrc;
        imagePopup.classList.remove('hidden');
    }

    const closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', () => {
        imagePopup.classList.add('hidden');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            imagePopup.classList.add('hidden');
        }
    });

    if (menuId) {
        showMenuDetail(menuId);
    } else {
        window.location.href = 'menu.html';
    }
});