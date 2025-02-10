type Props = {
    prize: string;
    isOpen: boolean;
    image: string;
    onClose: () => void;
};

const WinModal = ({ prize, isOpen, onClose, image }: Props) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-[#ff6219] p-6 rounded-lg shadow-lg z-10">
                <h2 className="text-2xl font-bold mb-4 text-white uppercase">{prize === "Segui participando" ? "Segui participando" : "¡GANASTE!"}</h2>
                <div className="w-96 h-96 overflow-hidden">
                    <img src={image} alt="premio" className="w-full h-full object-cover scale-150" />
                </div>

                <p className="mb-4 text-white uppercase font-bold">{prize === "Segui participando" ? "BUENA SUERTE" : `${prize} x1`}</p>
                <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default WinModal;