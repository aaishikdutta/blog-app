import Link from 'next/link';
import { renderFooterLinks } from './footerLinks';
import { renderSocialLinks } from './SocialLinks';

const Footer = () => {
    return (
        <footer className='mt-auto py-[100px] px-[25px] bg-[#303030]'>
            <div className="container flex flex-col gap-[32px] md:flex-row md:gap-0">
                <div className="flex flex-1 gap-[32px] color-white flex-col items-center md:flex-row md:items-baseline md:gap-0">
                    <div className="gap-[32px] flex flex-1 md:gap-0 flex-col">
                        <Link href="/">
                            <a className='text-center text-[24px] text-white mb-[16px] no-underline font-semibold md:text-start'>Brand</a>
                        </Link>
                        <ul className='gap-[16px] list-none flex mt-auto'>
                            {renderSocialLinks()}
                        </ul>
                    </div>
                    <div className="gap-[32px] flex flex-1 md:gap-0">
                        <ul className='gap-[16px] list-none flex h-full justify-center flex-row flex-wrap md:flex-col'>
                            {renderFooterLinks()}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-1 gap-[32px] text-white items-center flex-col md:items-end md:gap-0">
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;