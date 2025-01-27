import React from 'react';

type Props = {
    prize: string;
    isOpen: boolean;
    onClose: () => void;
};

const WinModal = ({ prize, isOpen, onClose }: Props) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10">
                <h2 className="text-2xl font-bold mb-4 text-black">¡Felicidades!</h2>
                <p className="mb-4 text-black">{prize}</p>  
                <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default WinModal;