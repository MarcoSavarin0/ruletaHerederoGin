import React, { useState } from 'react';
import "../ModalPrizeQuantity.css";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedData: { option: string, probability: number, quantity?: number, image: { uri: string, sizeMultiplier: number, offsetY: number } }[]) => void;

    data: { option: string, probability: number, quantity?: number, image: { uri: string, sizeMultiplier: number, offsetY: number } }[];
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
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Set Prize Quantity</h2>
                <form onSubmit={handleSubmit}>
                    {updatedData.map((item, index) => (
                        <label key={index} className="modal-label">
                            {item.option}:
                            <input
                                type="number"
                                value={item.quantity || 0}
                                onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                                min="0"
                                disabled={item.option === 'Segui participando'}
                            />
                        </label>
                    ))}
                    <div className="modal-buttons">
                        <button type="button" onClick={onClose} className="cancel-button">
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalPrizeQuantity;