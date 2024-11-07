// Sidebar.tsx
import React from 'react';

type SidebarProps = {
    onSectionClick: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
    sectionRefs: {
        quickReadRef: React.MutableRefObject<HTMLDivElement | null>;
        whatIsDyslexiaRef: React.MutableRefObject<HTMLDivElement | null>;
        howCommonIsDyslexiaRef: React.MutableRefObject<HTMLDivElement | null>;
        signsOfDyslexiaRef: React.MutableRefObject<HTMLDivElement | null>;
        socialImpactRef: React.MutableRefObject<HTMLDivElement | null>;
        diagnosisRef: React.MutableRefObject<HTMLDivElement | null>;
    };
};

const Sidebar: React.FC<SidebarProps> = ({ onSectionClick, sectionRefs }) => {
    return (
        <div className="w-full md:w-1/4">
            <ul className="space-y-4 text-gray-700 text-sm font-medium">
                <li>
                    <button onClick={() => onSectionClick(sectionRefs.quickReadRef)} className="hover:text-blue-600">
                        Quick Read
                    </button>
                </li>
                <li>
                    <button onClick={() => onSectionClick(sectionRefs.whatIsDyslexiaRef)} className="hover:text-blue-600">
                        What is Dyslexia?
                    </button>
                </li>
                <li>
                    <button onClick={() => onSectionClick(sectionRefs.howCommonIsDyslexiaRef)} className="hover:text-blue-600">
                        How common is dyslexia?
                    </button>
                </li>
                <li>
                    <button onClick={() => onSectionClick(sectionRefs.signsOfDyslexiaRef)} className="hover:text-blue-600">
                        Signs of Dyslexia
                    </button>
                </li>
                <li>
                    <button onClick={() => onSectionClick(sectionRefs.socialImpactRef)} className="hover:text-blue-600">
                        Social and Emotional Impacts
                    </button>
                </li>
                <li>
                    <button onClick={() => onSectionClick(sectionRefs.diagnosisRef)} className="hover:text-blue-600">
                        Diagnosis
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
