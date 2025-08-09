import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Button = ({ href, children, className = '' }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-2 border-2 border-gold text-gold font-bold rounded-full transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gold ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
