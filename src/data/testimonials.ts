type Testimonial = {
    id: number;
    name: string;
    text: string;
    image?: string;
    rating?: number;
    position?: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'سارة أحمد',
        text: 'ألذ شاي كرك ذقته بحياتي! التوصيل سريع والنكهة خرافية. أصبح روتين صباحي اليومي لا يكتمل بدون كوب من كرك غلوة.',
        image: '/user_images/user1.jpg',
        rating: 5,
        position: 'محبة للشاي'
    },
    {
        id: 2,
        name: 'فهد العتيبي',
        text: 'نكهات متنوعة والجودة ممتازة. صرت أشربه يوميًا، وأفضل نكهة عندي هي الهيل. يفوق توقعاتي بكثير وأنصح به بشدة.',
        image: '/user_images/user2.jpg',
        rating: 5,
        position: 'صاحب مقهى'
    },
    {
        id: 3,
        name: 'ليلى السعيد',
        text: 'أنصح فيه جدًا! يذكرني بالشاي اللي نشربه في السفرات. سهولة في التحضير مع نكهة أصلية مميزة تنقلك لأجواء مختلفة.',
        image: '/user_images/user3.jpg',
        rating: 5,
        position: 'مدونة طعام'
    },
    {
        id: 4,
        name: 'محمد الراشد',
        text: 'بصفتي مهتم بالمشروبات الصحية، وجدت في كرك غلوة الخيار المثالي - طبيعي، خالي من السكر، ومذاق رائع لا يقاوم!',
        image: '/user_images/user4.jpg',
        rating: 5,
        position: 'مدرب لياقة'
    },
    {
        id: 5,
        name: 'نورة القحطاني',
        text: 'أحب جودة المكونات واهتمامهم بالتفاصيل. كل نكهة لها طابعها الخاص وتجربة غلوة تستحق!',
        image: '/user_images/user5.jpg',
        rating: 5,
        position: 'مصممة أزياء'
    },
];