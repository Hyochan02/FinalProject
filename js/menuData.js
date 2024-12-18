const menuData = {
    '풀드비프 와퍼': {
        id: '풀드비프 와퍼',
        name: '풀드비프 와퍼',
        description: '강한 불맛패티와 부드러운 풀드비프의 만남, 결이 다른 비프가 와퍼맛을 살린다',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 8900,
        category: ['추천메뉴', '오리지널&맥시멈'],
        image: './assets/burger/풀드비프 와퍼.png'
    },
    '스파이시 풀드비프 와퍼': {
        id: '스파이시 풀드비프 와퍼',
        name: '스파이시 풀드비프 와퍼',
        description: '강한 불맛패티와 부드러운 풀드비프에 디아블로 소스의 풍미',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 8900,
        category: ['추천메뉴', '오리지널&맥시멈'],
        image: './assets/burger/스파이시 풀드비프 와퍼.png'
    },
    '오리지널스 화이트 페타 싱글': {
        id: '오리지널스 화이트 페타 싱글',
        name: '오리지널스 화이트 페타 싱글',
        description: '앵거스 비프와 페타치즈, 드라이드 토마토의 조화',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 9900,
        category: ['추천메뉴', '오리지널&맥시멈'],
        image: './assets/burger/오리지널스 화이트 페타 싱글.png'
    },
    '오리지널스 화이트 페타 더블': {
        id: '오리지널스 화이트 페타 더블',
        name: '오리지널스 화이트 페타 더블',
        description: '앵거스 비프와 페타치즈, 드라이드 토마토의 조화',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },            
        ],
        price: 13900,
        category: ['추천메뉴', '오리지널&맥시멈'],
        image: './assets/burger/오리지널스 화이트 페타 더블.png'
    },
    '두툼버거': {
        id: '두툼버거',
        name: '두툼버거',
        description: '두툼한 치킨과 비프패티, 몬스터 맛의 맥시멈',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            
        ],
        price: 12500,
        category: ['추천메뉴', '오리지널&맥시멈'],
        image: './assets/burger/두툼버거.png'
    },
    '두툼버거 더블': {
        id: '두툼버거 더블',
        name: '두툼버거 더블',
        description: '두툼한 치킨과 비프 패티 2장, 몬스터 맛의 맥시멈',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
        ],
        price: 15000,
        category: ['추천메뉴', '오리지널&맥시멈'],
        image: './assets/burger/두툼버거 더블.png'
    },
    '몬스터 와퍼': {
        id: '몬스터 와퍼',
        name: '몬스터 와퍼',
        description: '불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 9300,
        category: ['추천메뉴', '프리미엄'],
        image: './assets/burger/몬스터 와퍼.png'
    },
    '콰트로치즈와퍼': {
        id: '콰트로치즈와퍼',
        name: '콰트로치즈와퍼',
        description: '진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 7900,
        category: ['추천메뉴', '프리미엄'],
        image: './assets/burger/콰트로치즈와퍼.png'
    },
    '통새우와퍼': {
        id: '통새우와퍼',
        name: '통새우와퍼',
        description: '불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🦐', name: '통새우' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 7900,
        category: ['추천메뉴', '프리미엄'],
        image: './assets/burger/통새우와퍼.png'
    },
    '불맛 더블치즈앤베이컨버거': {
        id: '불맛 더블치즈앤베이컨버거',
        name: '불맛 더블치즈앤베이컨버거',
        description: '불맛 가득 순쇠고기, 베이컨, 더블치즈가 더해진 프리미엄 버거',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🧀', name: '치즈' },
            { icon: '🧅', name: '양파' },
            { icon: '🥒', name: '피클' },
        ],
        price: 9500,
        category: ['프리미엄'],
        image: './assets/burger/불맛 더블치즈앤베이컨버거.png'
    },
    '블랙바비큐콰트로치즈와퍼': {
        id: '블랙바비큐콰트로치즈와퍼',
        name: '블랙바비큐콰트로치즈와퍼',
        description: '콰트로치즈와퍼가 바비큐소스를 만나다!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 8800,
        category: ['프리미엄'],
        image: './assets/burger/블랙바비큐콰트로치즈와퍼.png'
    },
    '블랙바비큐와퍼': {
        id: '블랙바비큐와퍼',
        name: '블랙바비큐와퍼',
        description: '블랙번과 바비큐 소스의 풍미!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 9300,
        category: ['프리미엄'],
        image: './assets/burger/블랙바비큐와퍼.png'
    },
    '베이컨치즈와퍼': {
        id: '베이컨치즈와퍼',
        name: '베이컨치즈와퍼',
        description: '풍미 가득한 아메리칸 클래식의 완벽한 조화!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 8900,
        category: ['프리미엄'],
        image: './assets/burger/베이컨치즈와퍼.png'
    },
    '불맛 더블치즈버거': {
        id: '불맛 더블치즈버거',
        name: '불맛 더블치즈버거',
        description: '불맛 가득 순쇠고기, 더블치즈가 더해진 프리미엄 버거',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🧀', name: '치즈' },
            { icon: '🧅', name: '양파' },
            { icon: '🥒', name: '피클' },
        ],
        price: 8500,
        category: ['프리미엄'],
        image: './assets/burger/불맛 더블치즈버거.png'
    },
    '치즈와퍼': {
        id: '치즈와퍼',
        name: '치즈와퍼',
        description: '불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 7700,
        category: ['와퍼&주니어'],
        image: './assets/burger/치즈와퍼.png'
    },
    '갈릭불고기와퍼': {
        id: '갈릭불고기와퍼',
        name: '갈릭불고기와퍼',
        description: '불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 갈릭 불고기 소스까지!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🧄', name: '마늘' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 7400,
        category: ['와퍼&주니어'],
        image: './assets/burger/갈릭불고기와퍼.png'
    },
    '불고기와퍼': {
        id: '불고기와퍼',
        name: '불고기와퍼',
        description: '불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 7100,
        category: ['와퍼&주니어'],
        image: './assets/burger/불고기와퍼.png'
    },
    '와퍼': {
        id: '와퍼',
        name: '와퍼',
        description: '불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 7100,
        category: ['와퍼&주니어'],
        image: './assets/burger/와퍼.png'
    },
    '와퍼주니어': {
        id: '와퍼주니어',
        name: '와퍼주니어',
        description: '불에 직접 구운 순 쇠고기 패티가 들어간 와퍼의 주니어 버전~ 작지만 꽉 찼다!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 4700,
        category: ['와퍼&주니어'],
        image: './assets/burger/와퍼주니어.png'
    },
    '통새우와퍼주니어': {
        id: '통새우와퍼주니어',
        name: '통새우와퍼주니어',
        description: '불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 통새우와퍼의 주니어 버전~ 작지만 꽉 찼다!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🦐', name: '통새우' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 5300,
        category: ['와퍼&주니어'],
        image: './assets/burger/통새우와퍼주니어.png'
    },
    '불고기와퍼주니어': {
        id: '불고기와퍼주니어',
        name: '불고기와퍼주니어',
        description: '불에 직접 구운 순 쇠고기 패티가 들어간 와퍼주니어에 달콤한 불고기 소스까지!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 4700,
        category: ['와퍼&주니어'],
        image: './assets/burger/불고기와퍼주니어.png'
    },
    '치즈와퍼주니어': {
        id: '치즈와퍼주니어',
        name: '치즈와퍼주니어',
        description: '불에 직접 구운 순 쇠고기 패티가 들어간 와퍼주니어에 고소한 치즈 추가!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 5000,
        category: ['와퍼&주니어'],
        image: './assets/burger/치즈와퍼주니어.png'
    },
    '콰트로치즈와퍼주니어': {
        id: '콰트로치즈와퍼주니어',
        name: '콰트로치즈와퍼주니어',
        description: '진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 5300,
        category: ['와퍼&주니어'],
        image: './assets/burger/콰트로치즈와퍼주니어.png'
    },
    '더블비프불고기버거': {
        id: '더블비프불고기버거',
        name: '더블비프불고기버거',
        description: '달콤한 불고기 소스에 더블 패티로 더욱 깊어진 감칠맛!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
        ],
        price: 5000,
        category: ['와퍼&주니어'],
        image: './assets/burger/더블비프불고기버거.png'
    },
    '비프불고기버거': {
        id: '비프불고기버거',
        name: '비프불고기버거',
        description: '달콤한 불고기소스와 100% 순쇠고기 패티의 감칠맛나는 조화, 비프불고기버거!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
        ],
        price: 4000,
        category: ['와퍼&주니어'],
        image: './assets/burger/비프불고기버거.png'
    },
    '치즈버거': {
        id: '치즈버거',
        name: '치즈버거',
        description: '불에 구운 쇠고기 패티와 사르르 치즈까지, 작지만 알차다!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥒', name: '피클' },
        ],
        price: 3500,
        category: ['와퍼&주니어'],
        image: './assets/burger/치즈버거.png'
    },
    '치킨킹BLT': {
        id: '치킨킹BLT',
        name: '치킨킹BLT',
        description: '스파이시한 통닭다리살 프리미엄 치킨버거에 베이컨, 양상추, 토마토를 더했다. 치킨킹 BLT!',
        ingredients: [
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥓', name: '베이컨' },
            { icon: '🥬', name: '양상추' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥒', name: '피클' },
        ],
        price: 7400,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/치킨킹BLT.png'
    },
    '치킨킹': {
        id: '치킨킹',
        name: '치킨킹',
        description: '스파이시한 통닭다리살과 고소한 브리오쉬번이 만나 더 풍부해진 프리미엄 치킨버거. 치킨킹!',
        ingredients: [
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🥒', name: '피클' },
        ],
        price: 6400,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/치킨킹.png'
    },
    '비프슈림프버거': {
        id: '비프슈림프버거',
        name: '비프&슈림프버거',
        description: '불맛가득 순쇠고기 패티에 새콤달콤 특제소스 듬뿍!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🍤', name: '새우패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 7000,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/비프&슈림프버거.png'
    },
    '통새우슈림프버거': {
        id: '통새우슈림프버거',
        name: '통새우슈림프버거',
        description: '통통한 통새우에 새콤달콤 특제소스 듬뿍! 통새우 슈림프 버거',
        ingredients: [
            { icon: '🍤', name: '새우패티' },
            { icon: '🦐', name: '통새우' },
            { icon: '🥬', name: '양상추' },
        ],
        price: 6000,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/통새우슈림프버거.png'
    },
    '슈림프버거': {
        id: '슈림프버거',
        name: '슈림프버거',
        description: '탱글한 새우패티에 새콤달콤 특제소스 듬뿍!',
        ingredients: [
            { icon: '🍤', name: '새우패티' },
            { icon: '🥬', name: '양상추' },
        ],
        price: 5000,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/슈림프버거.png'
    },
    '롱치킨버거': {
        id: '롱치킨버거',
        name: '롱치킨버거',
        description: '담백한 치킨 패티에 부드러운 마요네즈 소스와 싱싱한 야채가 듬뿍~',
        ingredients: [
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥬', name: '양상추' },
        ],
        price: 4700,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/롱치킨버거.png'
    },
    '바비큐치킨버거': {
        id: '바비큐치킨버거',
        name: '바비큐치킨버거',
        description: '진한 바비큐 소스가 가득!',
        ingredients: [
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥬', name: '양상추' },
        ],
        price: 3700,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/바비큐치킨버거.png'
    },
    '치킨버거': {
        id: '치킨버거',
        name: '치킨버거',
        description: '부드러운 에그번과 킹치킨패티의 만남! 풍부한 마요 소스로 고소하게!',
        ingredients: [
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🥒', name: '피클' },
        ],
        price: 3700,
        category: ['치킨&슈림프버거'],
        image: './assets/burger/치킨버거.png'
    },
    'BLT오믈렛킹모닝': {
        id: 'BLT오믈렛킹모닝',
        name: 'BLT오믈렛킹모닝',
        description: '부드러운 더블오믈렛과 소프트번의 조합',
        ingredients: [
            { icon: '🥓', name: '베이컨' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🍅', name: '토마토' },
            { icon: '🥚', name: '오믈렛' }
        ],
        price: 5500,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/BLT오믈렛킹모닝.png'
    },
    '오믈렛킹모닝': {
        id: '오믈렛킹모닝',
        name: '오믈렛킹모닝',
        description: '부드러운 더블오믈렛과 소프트번의 조합',
        ingredients: [
            { icon: '🧀', name: '치즈' },
            { icon: '🥚', name: '오믈렛' }
        ],
        price: 5000,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/오믈렛킹모닝.png'
    },
    '몬스터 주니어 올데이킹': {
        id: '몬스터 주니어 올데이킹',
        name: '몬스터 주니어',
        description: '순 쇠고기 패티에 치킨 패티를 더해 든든함이 두 배!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🍗', name: '치킨패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
        ],
        price: 6500,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/몬스터 주니어 올데이킹.png'
    },
    '불맛 더블치즈버거주니어 올데이킹': {
        id: '불맛 더블치즈버거주니어 올데이킹',
        name: '불맛 더블치즈버거주니어',
        description: '불맛이 만든 맛의 격차, 더 강렬해진 불맛이 더해진 치즈버거',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🧅', name: '양파' },
            { icon: '🥒', name: '피클' },
        ],
        price: 6500,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/불맛 더블치즈버거주니어 올데이킹.png'
    },
    '더블비프불고기버거 올데이킹': {
        id: '더블비프불고기버거 올데이킹',
        name: '더블비프불고기버거',
        description: '달콤한 불고기 소스에 더블 패티로 더욱 깊어진 감칠맛!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
        ],
        price: 6500,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/더블비프불고기버거 올데이킹.png'
    },
    '콰트로치즈와퍼주니어 올데이킹': {
        id: '콰트로치즈와퍼주니어 올데이킹',
        name: '콰트로치즈와퍼주니어',
        description: '진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🧀', name: '치즈' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 6000,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/콰트로치즈와퍼주니어 올데이킹.png'
    },
    '통새우와퍼주니어 올데이킹': {
        id: '통새우와퍼주니어 올데이킹',
        name: '통새우와퍼주니어',
        description: '불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🦐', name: '통새우' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
            { icon: '🍅', name: '토마토' },
        ],
        price: 6000,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/통새우와퍼주니어 올데이킹.png'
    },
    '비프불고기버거 올데이킹': {
        id: '비프불고기버거 올데이킹',
        name: '비프불고기버거',
        description: '달콤한 불고기소스와 100% 순쇠고기 패티의 감칠맛나는 조화',
        ingredients: [
            { icon: '🍖', name: '비프패티' },
            { icon: '🥬', name: '양상추' },
            { icon: '🧅', name: '양파' },
        ],
        price: 5500,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/비프불고기버거 올데이킹.png'
    },
    '롱치킨버거 올데이킹': {
        id: '롱치킨버거 올데이킹',
        name: '롱치킨버거',
        description: '담백한 치킨 패티에 부드러운 마요네즈 소스와 싱싱한 야채가 듬뿍~',
        ingredients: [
            { icon: '🍗', name: '치킨패티' },
            { icon: '🥬', name: '양상추' },
        ],
        price: 5500,
        category: ['올데이킹&킹모닝'],
        image: './assets/burger/롱치킨버거 올데이킹.png'
    },
    '리얼 어니언링': {
        id: '리얼 어니언링',
        name: '리얼 어니언링',
        description: '통째로 썰어 더 두툼하고 더 바삭해진',
        ingredients: [
            { icon: '🧅', name: '양파' }
        ],
        price: 2600,
        category: ['사이드'],
        image: './assets/side/리얼 어니언링.png'
    },
    '너겟킹': {
        id: '너겟킹',
        name: '너겟킹',
        description: '바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!',
        ingredients: [
            { icon: '🍗', name: '치킨' }
        ],
        price: 2200,
        category: ['사이드'],
        image: './assets/side/너겟킹.png'
    },
    '21치즈스틱': {
        id: '21치즈스틱',
        name: '21치즈스틱',
        description: '21cm의 역대급 사이즈! 진하고 고소한 자연 모짜렐라가 가득한 21치즈스틱',
        ingredients: [
            { icon: '🧀', name: '치즈' }
        ],
        price: 2500,
        category: ['사이드'],
        image: './assets/side/21치즈스틱.png'
    },
    '바삭킹': {
        id: '바삭킹',
        name: '바삭킹',
        description: '매콤하게! 바삭하게 튀긴 치킨윙',
        ingredients: [
            { icon: '🍗', name: '치킨' }
        ],
        price: 3000,
        category: ['사이드'],
        image: './assets/side/바삭킹.png'
    },
    '쉐이킹프라이': {
        id: '바삭킹',
        name: '바삭킹',
        description: '깊은 풍미가 느껴지는 시즈닝으로 취향 저격!',
        ingredients: [
            { icon: '🥔', name: '감자' }
        ],
        price: 2400,
        category: ['사이드'],
        image: './assets/side/바삭킹.png'
    },
    '크리미모짜볼': {
        id: '크리미모짜볼',
        name: '크리미모짜볼',
        description: '겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!',
        ingredients: [
            { icon: '🧀', name: '치즈' }
        ],
        price: 2600,
        category: ['사이드'],
        image: './assets/side/크리미모짜볼.png'
    },
    '코코넛슈림프': {
        id: '코코넛슈림프',
        name: '코코넛슈림프+스위트칠리소스',
        description: '바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스',
        ingredients: [
            { icon: '🦐', name: '새우' }
        ],
        price: 3900,
        category: ['사이드'],
        image: './assets/side/코코넛슈림프+스위트칠리소스.png'
    },
    '프렌치프라이': {
        id: '프렌치프라이',
        name: '프렌치프라이',
        description: '세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!',
        ingredients: [
            { icon: '🥔', name: '감자' }
        ],
        price: 2100,
        category: ['사이드'],
        image: './assets/side/프렌치프라이.png'
    },
    '코울슬로': {
        id: '코울슬로',
        name: '코울슬로',
        description: '아삭아삭한 양배추와 상큼한 드레싱의 코울슬로',
        ingredients: [
            { icon: '🥗', name: '양배추' }
        ],
        price: 2100,
        category: ['사이드'],
        image: './assets/side/코울슬로.png'
    },
    '콘샐러드': {
        id: '콘샐러드',
        name: '콘샐러드',
        description: '달콤한 옥수수와 싱싱한 야채의 어울림',
        ingredients: [
            { icon: '🌽', name: '옥수수' },
            { icon: '🫑', name: '파프리카' }
        ],
        price: 2100,
        category: ['사이드'],
        image: './assets/side/콘샐러드.png'
    },
    '선데': {
        id: '선데',
        name: '선데',
        description: '천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림!',
        ingredients: [
            { icon: '🍦', name: '아이스크림' },
        ],
        price: 2000,
        category: ['음료%디저트'],
        image: './assets/drink/선데.png'
    },
    '핫초코아이스초코': {
        id: '핫초코아이스초코',
        name: '핫초코&아이스초코',
        description: '달콤한 초코!',
        ingredients: [
            { icon: '🍫', name: '초콜릿' },
            { icon: '🥛', name: '우유' }
        ],
        price: 2300,
        category: ['음료&디저트'],
        image: './assets/drink/핫초코&아이스초코.png'
    },
    '아메리카노': {
        id: '아메리카노',
        name: '아메리카노',
        description: '자연을 담은 버거킹 RA인증커피',
        ingredients: [
            { icon: '☕', name: '커피' }
        ],
        price: 1500,
        category: ['음료&디저트'],
        image: './assets/drink/아메리카노.png'
    },
    '코카콜라': {
        id: '코카콜라',
        name: '코카콜라',
        description: '코카-콜라로 더 짜릿하게!',
        ingredients: [
            { icon: '🥤', name: '음료' }
        ],
        price: 2000,
        category: ['음료&디저트'],
        image: './assets/drink/코카콜라.png'
    },
    '스프라이트': {
        id: '스프라이트',
        name: '스프라이트',
        description: '나를 깨우는 상쾌함!',
        ingredients: [
            { icon: '🥤', name: '음료' }
        ],
        price: 2000,
        category: ['음료&디저트'],
        image: './assets/drink/스프라이트.png'
    },
    '미닛메이드 오렌지': {
        id: '미닛메이드 오렌지',
        name: '미닛메이드 오렌지',
        description: '자연을 담은 상큼한 오렌지',
        ingredients: [
            { icon: '🥤', name: '음료' }
        ],
        price: 2800,
        category: ['음료&디저트'],
        image: './assets/drink/미닛메이드 오렌지.png'
    },
    '순수(미네랄워터)': {
        id: '순수(미네랄워터)',
        name: '순수(미네랄워터)',
        description: '깨끗하고 순수한 물',
        ingredients: [
            { icon: '🧊', name: '물' }
        ],
        price: 1300,
        category: ['음료%디저트'],
        image: './assets/drink/순수(미네랄워터).png'
    },
};

const menuCategories = {
    '추천메뉴': ['풀드비프 와퍼', '스파이시 풀드비프 와퍼', '오리지널스 화이트 페타 싱글', '오리지널스 화이트 페타 더블', '두툼버거', '두툼버거 더블', '몬스터 와퍼', '콰트로치즈와퍼', '통새우와퍼'],
    '오리지널&맥시멈': ['오리지널스 화이트 페타 싱글', '오리지널스 화이트 페타 더블', '두툼버거', '두툼버거 더블'],
    '프리미엄':['풀드비프 와퍼','스파이시 풀드비프 와퍼','불맛 더블치즈앤베이컨버거','블랙바비큐콰트로치즈와퍼','블랙바비큐와퍼','몬스터 와퍼','베이컨치즈와퍼','불맛 더블치즈버거','콰트로치즈와퍼','통새우와퍼'],
    '와퍼&주니어':['치즈와퍼','갈릭불고기와퍼','불고기와퍼','와퍼','와퍼주니어','통새우와퍼주니어','불고기와퍼주니어','치즈와퍼주니어','콰트로치즈와퍼주니어','더블비프불고기버거','비프불고기버거','치즈버거'],
    '치킨&슈림프버거': ['치킨킹BLT','치킨킹','비프슈림프버거','통새우슈림프버거','슈림프버거','롱치킨버거','바비큐치킨버거','치킨버거'],
    '올데이킹&킹모닝': ['BLT오믈렛킹모닝','오믈렛킹모닝','몬스터 주니어 올데이킹','불맛 더블치즈버거주니어 올데이킹','더블비프불고기버거 올데이킹','콰트로치즈와퍼주니어 올데이킹','통새우와퍼주니어 올데이킹','비프불고기버거 올데이킹','롱치킨버거 올데이킹'],
    '사이드': ['리얼 어니언링','너겟킹','21치즈스틱','바삭킹','쉐이킹프라이','크리미모짜볼','코코넛슈림프','프렌치프라이','코울슬로','콘샐러드'],
    '음료&디저트': ['선데', '핫초코아이스초코', '아메리카노','코카콜라','스프라이트','미닛메이드 오렌지','순수(미네랄워터)']
};