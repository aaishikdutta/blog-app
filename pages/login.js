import Link from "next/link";
import { useRef, useState } from "react";
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';
import { signin } from "../utils/auth";
import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();
    const formRef = useRef(null);
    const [errorState, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const signinHandler = e => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const email = formData.get('email');
        const password = formData.get('password');
        signin(email, password).then((userCredential) => {
            router.push('/');
            setErrorState(false);
            setErrorMessage("");
            console.log(userCredential.user);
        }).catch(err => {
            setErrorState(true);
            setErrorMessage(err.message);
        })   
    }

    return (
        <div className="overflow-hidden flex h-screen justify-center self-center my-0 mx-auto w-[90%] md:w-full">
            <form ref={formRef} className="py-0 px-[10px] relative flex flex-col justify-center items-center flex-1 md:py-0 md:px-[50px]">
                <p className="mb-[32px]">
                    Not an admin?&nbsp;
                    <Link href="/">
                        <a className="text-black underline">Return to Home</a>
                    </Link>
                </p>
                <h2 className="text-center text-[32px] text-[#303030] mb-[40px] md:text-[40px]">Login to Penned</h2>
                <div className="w-full max-w-[350px]">
                    <div className="relative flex justify-center items-center mb-[8px]">
                        <input type="text" placeholder="Email" name="email" className="w-full border-none bg-[#f2f7f6] p-[4px_4px_4px_30px] h-[50px] focus:outline-none" />
                        <Email className="w-[12px] absolute left-[6px]" />
                    </div>
                    <div className="relative flex justify-center items-center mb-[8px]">
                        <input type="password" placeholder="Password" name="password" className="w-full border-none bg-[#f2f7f6] p-[4px_4px_4px_30px] h-[50px] focus:outline-none" />
                        <Password className="w-[12px] absolute left-[6px]" />
                    </div>
                    {errorState && <div className="error">{errorMessage}</div>}
                </div>
                <Link href="/forgot-password">
                    <a className="no-underline text-black cursor-pointer text-[14px] m-[16px_0_32px] border-b-[1px] border-solid border-transparent transition-colors duration-500 ease-in-out hover:border-[#303030]">Forgot your Password?</a>
                </Link>
                <button onClick={signinHandler}>Sign In</button>
                <div className="hidden absolute bg-white rotate-[3deg] w-[60px] right-[-30px] h-[101%] md:block" />
            </form>
            <div className="hidden flex-[2] bg-cover bg-[url('https://images.unsplash.com/photo-1504384171965-be2509a826af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] w-full h-full md:block " />
        </div>
    )
}

export default Login;