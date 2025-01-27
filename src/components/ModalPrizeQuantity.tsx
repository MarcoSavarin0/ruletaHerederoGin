import React, { useState } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedData: { option: string, probability: number, quantity?: number }[]) => void;
    data: { option: string, probability: number, quantity?: number }[];
};

const ModalPrizeQuantity = ({ isOpen, onClose, onSubmit, data }: Props) => {
    const [updatedData, setUpdatedData] = useState(data);

    const handleQuantityChange = (index: number, quantity: number) => {
        const newData = [...updatedData];
        newData[index].quantity = quantity;
        setUpdatedData(newData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(updatedData);
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10">
                <h2 className="text-2xl font-bold mb-4">Set Prize Quantity</h2>
                <form onSubmit={handleSubmit}>
                    {
                        updatedData.map((item, index) => (
                            <label key={index} className="block mb-2 text-black">
                                {item.option}:
                                <input
                                    type="number"
                                    value={item.quantity || 0}
                                    onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                                    className="border p-2 w-full"
                                    min="0"
                                    disabled={item.option === 'Segui participando'}
                                />
                            </label>
                        ))
                    }
                    <div className="flex justify-end mt-4">
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalPrizeQuantity;