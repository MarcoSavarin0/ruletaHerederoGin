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
    const handleSubmit = (updatedData: { option: string, probability: number, quantity?: number, image: { uri: string, sizeMultiplier: number, offsetY: number } }[]) => {
        updatePrizeOptions(updatedData);
    };
    return (
        <div className='flex flex-col gap-28'>
          
            <div className='ruleta-div mx-auto'>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    backgroundColors={['#ff5100']}
                    textColors={['#ffffff']}
                    outerBorderColor='white'
                    innerBorderColor='white'
                    radiusLineColor='white'
                    onStopSpinning={() => {
                        setShow(true);
                        setMustSpin(false);
                    }}
                    outerBorderWidth={10}
                />
            </div>
            <div className='wrap-button'>
                <button onClick={handleSpinClick}>GIRAR</button>
                {
                    show && !mustSpin &&
                    <WinModal

                        isOpen={show}
                        onClose={() => setShow(false)}
                        prize={data[prizeNumber].option}
                        image={data[prizeNumber].image.uri}
                    />
                }
            </div>
            <div className='last-text'>
                <h2>¡Generando <strong>buenos momentos!</strong></h2>
            </div>
            <ModalPrizeQuantity
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
                data={data}
            />
            {
                !mustSpin && <button onClick={handleOpenModal} className=" text-white px-4 py-2 rounded fixed-bottom-right">
                    Config
                </button>
            }
        </div>
    )
}

export default Ruleta