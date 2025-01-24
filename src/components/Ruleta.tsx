import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useWheelContext } from '../context/RuletaContext'
const Ruleta = () => {
    const wheelContext = useWheelContext();
    const [show, setShow] = useState(false);
    if (!wheelContext) {
        return null;
    }
    const { mustSpin, prizeNumber, handleSpinClick, data, setMustSpin } = wheelContext;
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
                    show &&
                    <p className='text-black'>{data[prizeNumber].option}</p>
                }
            </div>
        </div>
    )
}

export default Ruleta