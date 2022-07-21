import Close from '../../assets/close.svg';

const ImageUploadPreview = ({imageSrc, closeHandler}) => {
    return (
        <div className="top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[99] fixed flex justify-center items-center w-screen h-screen">
            <div className="flex justify-center relative rounded-[12px] bg-white h-[400px] w-[600px] p-[45px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
                <Close className="w-[24px] h-auto cursor-pointer text-[24px] absolute top-[15px] right-[15px] text-[#303030]" onClick={closeHandler} />
                <img src={imageSrc} />
            </div>
        </div>
    )
}

export default ImageUploadPreview;