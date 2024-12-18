document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    
    function createMenuList(category = '추천메뉴') {
        const menuIds = menuCategories[category] || [];
        const menuItems = menuIds.map(id => menuData[id]).filter(Boolean);

        menuContainer.innerHTML = `
            <div class="menu-category">
                <h1>메뉴 소개</h1>
                <ul>
                    ${Object.keys(menuCategories).map(cat => `
                        <li class="${cat === category ? 'active' : ''}">${cat}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="menu-wrap">
                <h2>${category}</h2>
                <div class="menu-content">
                    ${menuItems.map(menu => `
                        <div class="menu-item">
                            <a href="menu-detail.html?id=${menu.id}">
                                <img src="${menu.image}" alt="${menu.name}">
                                <p>${menu.name}</p>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const categoryItems = menuContainer.querySelectorAll('.menu-category li');
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                const selectedCategory = item.textContent;
                createMenuList(selectedCategory);
            });
        });
    }

    createMenuList();
});