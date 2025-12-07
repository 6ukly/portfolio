'use client';

import * as React from "react";
import { TIMELINE_EVENTS } from "@/data/project-data";
import { X, Trophy, Lightbulb, TrendingUp, Target, Calendar, CheckCircle } from 'lucide-react';

const STATUS_ICONS: { [key: string]: React.ElementType } = {
    Trophy: Trophy,
    TrendingUp: TrendingUp,
    Lightbulb: Lightbulb,
    Target: Target,
    Calendar: Calendar,
    CheckCircle: CheckCircle
};

export function TimelineModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]" onClick={onClose}>
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative shadow-2xl" onClick={(e) => e.stopPropagation()}>

                <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all" onClick={onClose}>
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">감정평가사 자격증 준비과정</h2>
                <p className="text-gray-500 text-center mb-10">타임라인</p>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-300 md:block hidden"></div>

                    {TIMELINE_EVENTS.map((event, index) => {
                        const Icon = STATUS_ICONS[event.status] || CheckCircle;
                        const isLeft = index % 2 === 0;

                        return (
                            <div key={event.id} className="relative mb-8 flex justify-between items-center w-full">
                                <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:order-2'}`}>
                                    <h3 className="font-bold text-lg text-indigo-600 mb-1">{event.date}</h3>
                                    <h4 className="font-semibold text-md text-gray-800">{event.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                                    <ul className="list-disc list-inside text-xs text-gray-500 mt-1">
                                        {event.details.map((detail, dIndex) => <li key={dIndex}>{detail}</li>)}
                                    </ul>
                                </div>

                                <div className="md:block hidden w-20 h-full absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                                    <div className="w-10 h-10 rounded-full bg-white border-3 border-indigo-600 flex items-center justify-center shadow-md">
                                        <Icon className="w-5 h-5 text-indigo-600" />
                                    </div>
                                </div>

                                <div className={`w-full md:w-5/12 ${isLeft ? 'md:order-2' : ''}`}>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}