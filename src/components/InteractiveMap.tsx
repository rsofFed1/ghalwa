"use client";
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { locations } from '@/data/locations';
import dynamic from 'next/dynamic';

// Dynamic import of Leaflet with no SSR
const MapComponent = dynamic(() => import('@/components/MapContainer'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-amber-800">جاري تحميل الخريطة...</div>
    </div>
});

const InteractiveMap = () => {
    const [activeLocation, setActiveLocation] = useState<number | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<string>("الكل");

    // Filter locations based on selected filter
    const filteredLocations = selectedFilter === "الكل"
        ? locations
        : locations.filter(location => location.name === selectedFilter);

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        if (filter !== "الكل") {
            const location = locations.find(loc => loc.name === filter);
            if (location) {
                setActiveLocation(location.id);
            }
        } else {
            setActiveLocation(null);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-[#fdf8f1]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-tajawal text-amber-900">الخريطة التفاعلية</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 font-tajawal text-lg">
                        مجمعات سكنية نابضة بالحياة
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Map Container */}
                        <div className="w-full md:w-2/3 h-[400px] md:h-[550px] relative">
                            <MapComponent
                                locations={locations}
                                activeLocation={activeLocation}
                                setActiveLocation={setActiveLocation}
                            />
                        </div>

                        {/* Info Panel */}
                        <div className="w-full md:w-1/3 bg-[#f8f4f0] p-6">
                            {/* Map Filters */}
                            <div className="flex flex-wrap justify-start border-b p-4 gap-2">
                                {["الكل", "الرياض", "جدة", "الدمام"].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => handleFilterChange(filter)}
                                        className={`px-4 py-2 rounded-md font-tajawal ${selectedFilter === filter
                                                ? "bg-amber-800 text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-tajawal text-amber-900">مواقع كرك غلوة</h3>

                            <div className="space-y-4">
                                {filteredLocations.map((location) => (
                                    <div
                                        key={location.id}
                                        className={`p-4 rounded-lg cursor-pointer transition-all ${activeLocation === location.id
                                                ? "bg-amber-800 text-white"
                                                : "bg-white hover:bg-gray-100"
                                            }`}
                                        onClick={() => setActiveLocation(location.id)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaMapMarkerAlt className={`${activeLocation === location.id ? "text-white" : "text-amber-800"}`} />
                                            <h4 className="font-bold font-tajawal">{location.name}</h4>
                                        </div>

                                        {location.description && (
                                            <p className={`mt-2 text-sm ${activeLocation === location.id ? "text-white/90" : "text-gray-600"}`}>
                                                {location.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <p className="text-gray-600 font-tajawal">
                                    حياة متكاملة تزهر بمختلف الأنشطة الاجتماعية والترفيهية، تدعم حياة ساكنيها من خلال ما نوفره لهم من خدمات ومرافق كالمسطحات الخضراء ومنتزهات الأطفال والمكتبة والأندية الرياضية والكافيهات وغيرها.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveMap;