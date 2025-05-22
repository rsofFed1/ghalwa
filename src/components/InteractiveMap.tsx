"use client";
import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { locations } from '@/data/locations';

const InteractiveMap = () => {
    const [activeLocation, setActiveLocation] = useState<number | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<string>("الكل");
    const mapRef = useRef<L.Map | null>(null);
    const markersRef = useRef<{ [key: number]: L.Marker }>({});

    useEffect(() => {
        // Only run this on the client side
        if (typeof window === 'undefined') return;

        // Fix Leaflet icon issues with webpack
        const L = require('leaflet');

        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: '/images/marker-icon-2x.png',
            iconUrl: '/images/marker-icon.png',
            shadowUrl: '/images/marker-shadow.png',
        });

        // Initialize the map if it doesn't exist
        if (!mapRef.current) {
            mapRef.current = L.map('map', {
                center: [24.0, 45.0], // Center of Saudi Arabia
                zoom: 6,
                zoomControl: true,
                scrollWheelZoom: false
            });

            // Add OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);

            // Add markers for each location
            locations.forEach(location => {
                const customIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: `
            <div style="background-color: #7D5A42; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; border-radius: 50%; position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" width="16" height="16">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
              </svg>
              ${location.id === activeLocation ? `<div style="position: absolute; top: -40px; right: -50px; background-color: #7D5A42; color: white; padding: 8px 12px; border-radius: 4px; min-width: 100px; text-align: center;">${location.name}</div>` : ''}
            </div>
          `,
                    iconSize: [30, 30],
                    iconAnchor: [15, 30],
                });

                const marker = L.marker(location.coordinates, { icon: customIcon })
                    .addTo(mapRef.current!)
                    .on('click', () => {
                        setActiveLocation(location.id);
                        mapRef.current?.panTo(location.coordinates);
                    });

                // Store marker reference for later use
                markersRef.current[location.id] = marker;
            });
        }

        // Update markers when activeLocation changes
        if (activeLocation !== null) {
            const activeLocationData = locations.find(l => l.id === activeLocation);
            if (activeLocationData) {
                // Pan to the active location
                mapRef.current?.panTo(activeLocationData.coordinates);

                // Update all markers to reflect the active state
                Object.keys(markersRef.current).forEach(key => {
                    const id = parseInt(key);
                    const marker = markersRef.current[id];

                    const customIcon = L.divIcon({
                        className: 'custom-div-icon',
                        html: `
              <div style="background-color: #7D5A42; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; border-radius: 50%; position: relative;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" width="16" height="16">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                </svg>
                ${id === activeLocation ? `<div style="position: absolute; top: -40px; right: -50px; background-color: #7D5A42; color: white; padding: 8px 12px; border-radius: 4px; min-width: 100px; text-align: center;">${locations.find(l => l.id === id)?.name}</div>` : ''}
              </div>
            `,
                        iconSize: [30, 30],
                        iconAnchor: [15, 30],
                    });

                    marker.setIcon(customIcon);
                });
            }
        }

        // Cleanup function
        return () => {
            if (mapRef.current && !(mapRef.current as any)._leaflet_id) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [activeLocation]);

    // Filter locations based on selected filter
    const filteredLocations = selectedFilter === "الكل"
        ? locations
        : locations.filter(location => location.name === selectedFilter);

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
                            <div id="map" className="h-full w-full"></div>
                        </div>

                        {/* Info Panel */}
                        <div className="w-full md:w-1/3 bg-[#f8f4f0] p-6">
                            {/* Map Filters */}
                            <div className="flex flex-wrap justify-start border-b p-4 gap-2">
                                {["الكل", "الرياض", "جدة", "الدمام"].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setSelectedFilter(filter)}
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