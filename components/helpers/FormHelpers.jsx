import Link from "next/link";
import { forwardRef } from "react";

export const FormContainer = forwardRef(
  ({ submitButtonText, submitHandler, children }, ref) => {
    return (
      <div className="overflow-hidden flex h-screen justify-center self-center my-0 mx-auto w-[90%] md:w-full">
        <form
          ref={ref}
          className="py-0 px-[10px] relative flex flex-col justify-center items-center flex-1 md:py-0 md:px-[50px]"
        >
          {children}
          <button onClick={submitHandler}>{submitButtonText}</button>
          <div className="hidden absolute bg-white rotate-[3deg] w-[60px] right-[-30px] h-[101%] md:block" />
        </form>
        <div className="hidden flex-[2] bg-cover bg-[url('https://images.unsplash.com/photo-1504384171965-be2509a826af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] w-full h-full md:block " />
      </div>
    );
  }
);

export const GoToForm = ({ goToFormText, goToFormUrl, goToFormLinkText }) => {
  return (
    <p className="mb-[32px]">
      {goToFormText}
      <Link href={goToFormUrl}>
        <a className="text-black underline">{goToFormLinkText}</a>
      </Link>
    </p>
  );
};

export const FormTitle = ({ titleText, subtitleText, titleClasses }) => {
  return (
    <>
      <h2 className={`text-center text-[32px] text-[#303030] md:text-[40px] ${titleClasses}`}>
        {titleText}
      </h2>
      {subtitleText && <p className="text-center mb-[32px]">{subtitleText}</p>}
    </>
  );
};

export const FormInputs = ({ inputs, children }) => {
  return (
    <div className="w-full max-w-[350px]">
      {inputs.map((input) => {
        const {icon: SvgIcon} = input;
        return (
          <div className="relative flex justify-center items-center mb-[8px]">
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              className="w-full border-none bg-[#f2f7f6] p-[4px_4px_4px_30px] h-[50px] focus:outline-none"
            />
            <SvgIcon className="w-[12px] absolute left-[6px]" />
          </div>
        );
      })}
      {children}
    </div>
  );
};

