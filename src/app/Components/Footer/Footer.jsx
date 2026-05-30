import Image from 'next/image';
import React from 'react';
import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-[70%] mx-auto mt-20 text-center border-b border-gray-500 '>
                <div>
                    <h1 className='font-bold text-7xl text-white mb-4'>KeenKeeper</h1>
                    <p className='text-[16px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='mt-6 mb-10'>
                        <h1 className='font-medium'>Social Links</h1>
                        <div className='flex gap-3 items-center justify-center mt-4'>
                            <Link href='/'><Image src={instagram} width='40' alt='insta logo'></Image></Link>
                            <Link href='/'><Image src={facebook} width='40'  alt='facebook logo'></Image></Link>
                            <Link href='/'><Image src={twitter} width='38' alt='x logo'></Image></Link>

                            
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='max-w-[70%] mx-auto my-6 flex justify-between text-[16px]'>
                <div>© 2026 KeenKeeper. All rights reserved.</div>
                <div>
                    <ul className='flex gap-3'>
                        <li><Link href='/'>Privacy Policy</Link></li>
                        <li><Link href='/'>Terms of Sevice</Link></li>
                        <li><Link href='/'>Cookies</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;