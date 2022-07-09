import Link from "next/link";
import { useState } from "react";
import Email from '../assets/email.svg';
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";

const ForgotPassword = () => {
    const [isModal, setIsModal] = useState(true);
    return (
        <div className="relative">
            <Loader />
            {isModal && <Modal modalMessage="If your account exists, you will receive a email" closeHandler={() => setIsModal(false)} />}
            <div className="overflow-hidden flex h-screen justify-center self-center my-0 mx-auto w-[90%] md:w-full">
                <form className="py-0 px-[10px] relative flex flex-col justify-center items-center flex-1 md:py-0 md:px-[50px]">
                    <p className="mb-[32px]">
                        Back to &nbsp;
                        <Link href="/login">
                            <a className="text-black underline">Login</a>
                        </Link>
                    </p>
                    <h2 className="text-center text-[32px] text-[#303030] mb-[8px] md:text-[40px]">Reset Password</h2>
                    <p className="text-center mb-[32px]"> Forgot your password? Enter your email to reset it</p>
                    <div className="w-full max-w-[350px]">
                        <div className="relative flex justify-center items-center mb-[8px]">
                            <input type="text" placeholder="Email" name="email" className="w-full border-none bg-[#f2f7f6] p-[4px_4px_4px_30px] h-[50px] focus:outline-none" />
                            <Email className="w-[12px] absolute left-[6px]" />
                        </div>
                    </div>
                    <button>Reset</button>
                    <div className="hidden absolute bg-white rotate-[3deg] w-[60px] right-[-30px] h-[101%] md:block"></div>
                </form>
                <div className="hidden flex-[2] bg-cover bg-[url('https://images.unsplash.com/photo-1504384171965-be2509a826af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] w-full h-full md:block"></div>
            </div>
        </div>
    )
}

export default ForgotPassword;