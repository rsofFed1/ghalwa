export type Location = {
    id: number;
    name: string;
    coordinates: [number, number]; 
    description?: string;
};

export const locations: Location[] = [
    {
        id: 1,
        name: "الرياض",
        coordinates: [24.7136, 46.6753],
        description: "متجر كرك غلوة الرئيسي بالرياض - حي العليا"
    },
    {
        id: 2,
        name: "جدة",
        coordinates: [21.5433, 39.1728],
        description: "فرع كرك غلوة بجدة - شارع التحلية"
    },
    {
        id: 3,
        name: "الدمام",
        coordinates: [26.4207, 50.0888],
        description: "فرع كرك غلوة بالدمام - الكورنيش"
    }
];