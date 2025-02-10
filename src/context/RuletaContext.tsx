import { createContext, useContext, useState } from 'react';
import { getRandomPrize,prizeOptions as initialPrizeOptions } from '../utils/wheelUtils';

interface WheelContextType {
    mustSpin: boolean;
    prizeNumber: number;
    handleSpinClick: () => Promise<void>;
    data: { option: string; probability: number; quantity?: number; image: { uri: string; sizeMultiplier: number ,offsetY: number} }[];
    setMustSpin: (value: boolean) => void;
    showWheel: boolean;
    setShowWheel: (value: boolean) => void;
    updatePrizeOptions: (updatedData: { option: string, probability: number, quantity?: number, image: { uri: string, sizeMultiplier: number,offsetY: number } }[]) => void;

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
    const [data, setData] = useState(initialPrizeOptions);

    const handleSpinClick = async () => {

        if (!mustSpin) {
            const newPrizeNumber = getRandomPrize(data);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };
    const updatePrizeOptions = (updatedData: { option: string, probability: number, quantity?: number, image: { uri: string, sizeMultiplier: number,offsetY: number } }[]) => {
        setData(updatedData);
    };

    return (
        <WheelContext.Provider value={{
            mustSpin, prizeNumber, handleSpinClick, data: data, setMustSpin, showWheel,
            setShowWheel,updatePrizeOptions
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