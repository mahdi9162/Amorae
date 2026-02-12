import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="text-xl font-semibold">
      <Image src="/AmoraeLogo.webp" alt="Logo" width={144} height={134} className='w-36'/>
    </Link>
  );
};

export default Logo;
