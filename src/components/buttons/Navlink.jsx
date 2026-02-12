'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
  const path = usePathname();
  const isActive = href === "/" ? path === href : path.startsWith(href);
  return (
    <Link className={`${isActive ? 'text-primary font-bold' : 'text-secondary'}`} href={href}>
      {children}
    </Link>
  );
};

export default Navlink;
