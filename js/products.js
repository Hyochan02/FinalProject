document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productsWrapper = document.getElementById('productsWrapper');
    
    const products = {
        drinks: [
            { name: '선데', image: './assets/drink/선데.png' },
            { name: '핫초코&아이스초코', image: './assets/drink/핫초코&아이스초코.png' },
            { name: '아메리카노', image: './assets/drink/아메리카노.png' },
            { name: '코카콜라', image: './assets/drink/코카콜라.png' },
            { name: '스프라이트', image: './assets/drink/스프라이트.png' },
            { name: '미닛메이드 오렌지', image: './assets/drink/미닛메이드 오렌지.png' },
            { name: '순수(미네랄워터)', image: './assets/drink/순수(미네랄워터).png' }
        ],
        // 추천 메뉴
        burgers: [
            { name: '풀드비프 와퍼', image: './assets/burger/풀드비프 와퍼.png' },
            { name: '스파이시 풀드비프 와퍼', image: './assets/burger/스파이시 풀드비프 와퍼.png' },
            { name: '오리지널스 화이트 페타 싱글', image: './assets/burger/오리지널스 화이트 페타 싱글.png' },
            { name: '오리지널스 화이트 페타 더블', image: './assets/burger/오리지널스 화이트 페타 더블.png' },
            { name: '두툼버거', image: './assets/burger/두툼버거.png' },
            { name: '두툼버거 더블', image: './assets/burger/두툼버거 더블.png' },
            { name: '몬스터 와퍼', image: './assets/burger/몬스터 와퍼.png' },
            { name: '콰트로치즈와퍼', image: './assets/burger/콰트로치즈와퍼.png' },
            { name: '통새우와퍼', image: './assets/burger/통새우와퍼.png' }
        ],
        sides: [
            { name: '리얼 어니언링', image: './assets/side/리얼 어니언링.png' },
            { name: '너겟킹', image: './assets/side/너겟킹.png' },
            { name: '21치즈스틱', image: './assets/side/21치즈스틱.png' },
            { name: '바삭킹', image: './assets/side/바삭킹.png' },
            { name: '쉐이킹프라이', image: './assets/side/쉐이킹프라이.png' },
            { name: '코울슬로', image: './assets/side/코울슬로.png' },
            { name: '콘샐러드', image: './assets/side/콘샐러드.png' },
            { name: '크리미모짜볼', image: './assets/side/크리미모짜볼.png' },
            { name: '프렌치프라이', image: './assets/side/프렌치프라이.png' },
        ]
    };

    function displayProducts(category) {
        productsWrapper.innerHTML = '';
        const productList = [...products[category], ...products[category]]; 
        
        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
            `;
            productsWrapper.appendChild(productCard);
        });

        updateOpacity(); 

        productsWrapper.scrollLeft = productsWrapper.scrollWidth / 2;
    }

    function updateOpacity() {
        const containerRect = productsWrapper.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const productCards = productsWrapper.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            
            let opacity = 1 - (Math.abs(containerCenter - cardCenter) / (containerRect.width / 2));
            opacity = Math.max(0.3, Math.min(opacity, 1)); 
            card.style.opacity = opacity;
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProducts(btn.dataset.category);
        });
    });

    displayProducts('drinks');

    productsWrapper.addEventListener('scroll', () => {
        requestAnimationFrame(updateOpacity);

        const maxScrollLeft = productsWrapper.scrollWidth - productsWrapper.clientWidth;

        if (productsWrapper.scrollLeft >= maxScrollLeft - 1) {
            productsWrapper.scrollLeft = productsWrapper.scrollWidth / 2 - productsWrapper.clientWidth;
        } else if (productsWrapper.scrollLeft <= 1) {
            productsWrapper.scrollLeft = productsWrapper.scrollWidth / 2;
        }
    });

    productsWrapper.addEventListener('wheel', (event) => {
        event.preventDefault();
        productsWrapper.scrollLeft += event.deltaY;
    });
});
