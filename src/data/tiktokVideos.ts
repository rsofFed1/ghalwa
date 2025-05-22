export type TikTokVideo = {
    id: number;
    title: string;
    embedUrl: string;
    thumbnailUrl: string;
    videoId: string; 
};

const tikTokVideos: TikTokVideo[] = [
    {
        id: 1,
        title: "طريقة تحضير كرك غلوة بنكهة الزعفران",
        videoId: "7483478563501477138",
        embedUrl: "https://www.tiktok.com/embed/v2/7483478563501477138?lang=ar-SA",
        thumbnailUrl: "/tiktok-thumbnails/tiktok1.jpg"
    },
    {
        id: 2,
        title: "كرك غلوة مع الضيوف - النكهة المثالية",
        videoId: "7482697310590225682",
        embedUrl: "https://www.tiktok.com/embed/v2/7482697310590225682?lang=ar-SA",
        thumbnailUrl: "/tiktok-thumbnails/tiktok2.jpg"
    },
    {
        id: 3,
        title: "كيف تصنع براد كرك غلوة بنكهة الهيل",
        videoId: "7482485115659078920",
        embedUrl: "https://www.tiktok.com/embed/v2/7482485115659078920?lang=ar-SA",
        thumbnailUrl: "/tiktok-thumbnails/tiktok3.jpg"
    },
    {
        id: 4,
        title: "كرك غلوة الأصلي - طعم لا يُنسى",
        videoId: "7482173345924943111",
        embedUrl: "https://www.tiktok.com/embed/v2/7482173345924943111?lang=ar-SA",
        thumbnailUrl: "/tiktok-thumbnails/tiktok4.jpg"
    }
];

export default tikTokVideos;