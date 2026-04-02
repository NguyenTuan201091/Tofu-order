export interface MenuItem {
  id: string;
  name: string;
  chineseName: string;
  description: string;
  price: number;
  category: 'lamian' | 'dry-noodles' | 'appetizers' | 'teas';
  imageType: 'soup-noodle' | 'dry-noodle' | 'appetizer' | 'tea';
  popular?: boolean;
  spicyOptions?: boolean;
  noodleOptions?: boolean;
  toppingOptions?: boolean;
}

export const menuItems: MenuItem[] = [
  // Signature La Mian
  {
    id: 'lm-1',
    name: 'Lanzhou Beef Noodle Soup',
    chineseName: '兰州牛肉拉面',
    description: 'Hand-pulled noodles in rich, slow-braised beef bone broth with tender beef slices, radish, and cilantro',
    price: 14.99,
    category: 'lamian',
    imageType: 'soup-noodle',
    popular: true,
    spicyOptions: true,
    noodleOptions: true,
    toppingOptions: true,
  },
  {
    id: 'lm-2',
    name: 'Spicy Sichuan La Mian',
    chineseName: '四川麻辣拉面',
    description: 'Hand-pulled noodles in bold Sichuan peppercorn broth with chili oil, wood ear mushrooms, and minced pork',
    price: 15.99,
    category: 'lamian',
    imageType: 'soup-noodle',
    popular: true,
    spicyOptions: true,
    noodleOptions: true,
    toppingOptions: true,
  },
  {
    id: 'lm-3',
    name: 'Clear Chicken Broth La Mian',
    chineseName: '清炖鸡汤拉面',
    description: 'Delicate hand-pulled noodles in pure golden chicken broth with poached chicken, goji berries, and spring onion',
    price: 13.99,
    category: 'lamian',
    imageType: 'soup-noodle',
    noodleOptions: true,
    toppingOptions: true,
  },
  {
    id: 'lm-4',
    name: 'Pork Bone Milky Broth',
    chineseName: '猪骨白汤拉面',
    description: 'Creamy tonkotsu-style pork bone broth with hand-pulled noodles, soft-boiled egg, and bamboo shoots',
    price: 15.49,
    category: 'lamian',
    imageType: 'soup-noodle',
    noodleOptions: true,
    toppingOptions: true,
  },
  // Dry Noodle Dishes
  {
    id: 'dn-1',
    name: 'Sesame Cold Noodles',
    chineseName: '芝麻凉面',
    description: 'Chilled hand-pulled noodles tossed in rich sesame sauce, cucumber julienne, and chili oil',
    price: 12.99,
    category: 'dry-noodles',
    imageType: 'dry-noodle',
    popular: true,
    spicyOptions: true,
    noodleOptions: true,
  },
  {
    id: 'dn-2',
    name: 'Dan Dan Noodles',
    chineseName: '担担面',
    description: 'Classic Sichuan dry noodles with spiced minced pork, preserved vegetables, and signature dan dan sauce',
    price: 13.49,
    category: 'dry-noodles',
    imageType: 'dry-noodle',
    popular: true,
    spicyOptions: true,
    noodleOptions: true,
  },
  {
    id: 'dn-3',
    name: 'Scallion Oil Noodles',
    chineseName: '葱油面',
    description: 'Shanghai-style noodles with fragrant scallion oil, soy sauce, and crispy fried shallots',
    price: 11.99,
    category: 'dry-noodles',
    imageType: 'dry-noodle',
    noodleOptions: true,
  },
  {
    id: 'dn-4',
    name: 'Braised Pork Rice Noodle',
    chineseName: '红烧肉拌面',
    description: 'Wide flat noodles tossed in rich braised pork belly sauce with pickled mustard greens',
    price: 14.49,
    category: 'dry-noodles',
    imageType: 'dry-noodle',
    spicyOptions: true,
    noodleOptions: true,
    toppingOptions: true,
  },
  // Appetizers
  {
    id: 'ap-1',
    name: 'Steamed Pork Dumplings',
    chineseName: '蒸猪肉饺子',
    description: 'Delicate steamed dumplings filled with pork and ginger, served with black vinegar dipping sauce',
    price: 8.99,
    category: 'appetizers',
    imageType: 'appetizer',
    popular: true,
  },
  {
    id: 'ap-2',
    name: 'Cucumber in Garlic Sauce',
    chineseName: '拍黄瓜',
    description: 'Smashed cucumber dressed in garlic, chili oil, rice vinegar, and sesame oil',
    price: 6.99,
    category: 'appetizers',
    imageType: 'appetizer',
    spicyOptions: true,
  },
  {
    id: 'ap-3',
    name: 'Braised Beef Tendon',
    chineseName: '卤牛筋',
    description: 'Slow-braised beef tendon in master stock with five spice, star anise, and soy',
    price: 9.99,
    category: 'appetizers',
    imageType: 'appetizer',
  },
  {
    id: 'ap-4',
    name: 'Crispy Spring Rolls',
    chineseName: '炸春卷',
    description: 'Golden fried spring rolls filled with glass noodles, cabbage, and shiitake mushrooms',
    price: 7.99,
    category: 'appetizers',
    imageType: 'appetizer',
  },
  // Traditional Teas
  {
    id: 'tea-1',
    name: 'Jasmine Dragon Pearl',
    chineseName: '茉莉龙珠茶',
    description: 'Hand-rolled jasmine green tea pearls that unfurl beautifully when steeped in hot water',
    price: 4.99,
    category: 'teas',
    imageType: 'tea',
    popular: true,
  },
  {
    id: 'tea-2',
    name: 'Pu-erh Aged Tea',
    chineseName: '普洱陈茶',
    description: 'Earthy, complex aged pu-erh tea with deep flavors and digestive benefits',
    price: 5.99,
    category: 'teas',
    imageType: 'tea',
  },
  {
    id: 'tea-3',
    name: 'Chrysanthemum Honey Tea',
    chineseName: '菊花蜂蜜茶',
    description: 'Delicate chrysanthemum blossoms steeped with wildflower honey, cooling and refreshing',
    price: 4.49,
    category: 'teas',
    imageType: 'tea',
  },
  {
    id: 'tea-4',
    name: 'Longjing Green Tea',
    chineseName: '龙井绿茶',
    description: 'Premium Dragonwell tea from Hangzhou with a clean, vegetal taste and lingering sweetness',
    price: 5.49,
    category: 'teas',
    imageType: 'tea',
  },
];

export const categories = [
  { id: 'lamian', label: 'Signature La Mian', chineseLabel: '招牌拉面', icon: '🍜' },
  { id: 'dry-noodles', label: 'Dry Noodle Dishes', chineseLabel: '干拌面', icon: '🥢' },
  { id: 'appetizers', label: 'Appetizers', chineseLabel: '开胃小菜', icon: '🥟' },
  { id: 'teas', label: 'Traditional Teas', chineseLabel: '传统茶饮', icon: '🍵' },
];
