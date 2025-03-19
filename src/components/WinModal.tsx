import "../WinModal.css";

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
        <div className="modal-overlay-win" onClick={onClose}>
            <div className="modal-content-win" onClick={(e) => e.stopPropagation()}>
                <h2>{prize === "Segui participando" ? "Segui participando" : "¡GANASTE!"}</h2>
                <div className="modal-image">
                    <img src={image} alt="premio" />
                </div>
                <p>{prize === "Segui participando" ? "BUENA SUERTE" : `${prize} x1`}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default WinModal;
