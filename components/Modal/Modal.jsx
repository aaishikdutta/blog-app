
const Modal = ({modalMessage, closeHandler}) => {
    return (
        <div className="flex justify-center items-center z-[101] absolute w-full h-full top-0 bg-[rgba(0,0,0,0.7)]">
            <div className="flex flex-col justify-center rounded-[8px] w-[300px] py-[40px] px-[30px] bg-white">
                <p className="text-center">{modalMessage}</p>
                <button onClick={closeHandler} className="self-center">Close</button>
            </div>
        </div>
    )
}

export default Modal;