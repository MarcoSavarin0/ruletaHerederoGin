import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useWheelContext } from '../context/RuletaContext'
import WinModal from './WinModal';
import ModalPrizeQuantity from './ModalPrizeQuantity';
const Ruleta = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const wheelContext = useWheelContext();
    const [show, setShow] = useState(false);
    if (!wheelContext) {
        return null;
    }
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const { mustSpin, prizeNumber, handleSpinClick, data, setMustSpin, updatePrizeOptions } = wheelContext;
    const handleSubmit = (updatedData: { option: string, probability: number, quantity?: number }[]) => {
        updatePrizeOptions(updatedData);
    };
    return (
        <div className='flex flex-col'>

            <div className='ruleta-div'>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    backgroundColors={['#f85104', '#fbf7ef']}
                    onStopSpinning={() => {
                        setShow(true);
                        setMustSpin(false);
                    }}
                    textDistance={55}
                    fontSize={20}
                />
            </div>
            <div className='wrap-button'>
                <button onClick={handleSpinClick}>SPIN</button>
                {
                    show && !mustSpin &&
                    <WinModal
                        isOpen={show}
                        onClose={() => setShow(false)}
                        prize={data[prizeNumber].option}
                    />
                }
            </div>

            <ModalPrizeQuantity
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
                data={data}
            />

            <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                Set Prize Quantity
            </button>
        </div>
    )
}

export default Ruleta