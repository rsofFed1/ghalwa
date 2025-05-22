export type BannerSlide = {
    id: number;
    title: string;
    background: string;
    subtitle: string;
    features: string[];
    productImage: string;
    callToAction: string;
}


export const bannerSlides: BannerSlide[] = [
    {
        id: 1,
        title: 'كرك غلوة بنكهة الزعفران',
        background: "#E94641",
        subtitle: 'النكهة الزكية للزعفران الطازج من هرات الأفغانية',
        features: ['طبيعي ١٠٠٪', 'خالٍ من السكر', 'خالٍ من المواد الحافظة'],
        productImage: '/product_images/product1.png',
        callToAction: 'الطعم على أصوله'
    },
    {
        id: 2,
        title: 'كرك غلوة بنكهة الهيل',
        background: "#8A9D5B",
        subtitle: 'النكهة الأصيلة للهيل الأمريكي المنعش',
        features: ['طبيعي ١٠٠٪', 'خالٍ من السكر', 'خالٍ من الجلوتين'],
        productImage: '/product_images/product2.png',
        callToAction: 'الكرك على أصوله'
    },
    {
        id: 3,
        title: 'كرك غلوة بنكهة الورد',
        background: "#C38154",
        subtitle: 'ورد مدني من مزارع أبيار علي في المدينة المنورة',
        features: ['خالٍ من المواد الحافظة', 'خالٍ من السكر', 'يُحضّر بالحليب'],
        productImage: '/product_images/product3.png',
        callToAction: 'فكه.. اغليه واستمتع فيه'
    },
    {
        id: 4,
        title: 'كرك غلوة بنكهة الزعفران',
        background: "#E94641",
        subtitle: 'النكهة الزكية للزعفران الطازج من هرات الأفغانية',
        features: ['طبيعي ١٠٠٪', 'خالٍ من السكر', 'خالٍ من المواد الحافظة'],
        productImage: '/product_images/product1.png',
        callToAction: 'الطعم على أصوله'
    },
    {
        id: 5,
        title: 'كرك غلوة بنكهة الهيل',
        background: "#8A9D5B",
        subtitle: 'النكهة الأصيلة للهيل الأمريكي المنعش',
        features: ['طبيعي ١٠٠٪', 'خالٍ من السكر', 'خالٍ من الجلوتين'],
        productImage: '/product_images/product2.png',
        callToAction: 'الكرك على أصوله'
    },
    {
        id: 6,
        title: 'كرك غلوة بنكهة الورد',
        background: "#C38154",
        subtitle: 'ورد مدني من مزارع أبيار علي في المدينة المنورة',
        features: ['خالٍ من المواد الحافظة', 'خالٍ من السكر', 'يُحضّر بالحليب'],
        productImage: '/product_images/product3.png',
        callToAction: 'فكه.. اغليه واستمتع فيه'
    },
];