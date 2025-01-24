import { createContext, useContext, useState } from 'react';
import { getRandomPrize,prizeOptions } from '../utils/wheelUtils';

interface WheelContextType {
    mustSpin: boolean;
    prizeNumber: number;
    handleSpinClick: () => Promise<void>;
    data: { option: string; probability: number }[];
    setMustSpin: (value: boolean) => void;
    showWheel: boolean;
    setShowWheel: (value: boolean) => void;
}

const WheelContext = createContext<WheelContextType | null>(null);

export const useWheel = () => {
    return useContext(WheelContext);
};

import { ReactNode } from 'react';

export const WheelProvider = ({ children }: { children: ReactNode }) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [showWheel, setShowWheel] = useState(false);

    const handleSpinClick = async () => {

        if (!mustSpin) {
            const newPrizeNumber = getRandomPrize(prizeOptions);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    return (
        <WheelContext.Provider value={{
            mustSpin, prizeNumber, handleSpinClick, data: prizeOptions, setMustSpin, showWheel,
            setShowWheel
        }}>
            {children}
        </WheelContext.Provider>
    );
};

export const useWheelContext = () => {
    const context = useContext(WheelContext);
    if (context === undefined) {
        throw new Error('useWheelContext must be used within a WheelProvider');
    }
    return context;
};