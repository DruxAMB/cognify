import { cn } from '@/lib/utils';
import { SquareDashedMousePointerIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Logo = ({ fontSize = "2xl", iconSize = 20}: {fontSize?: string; iconSize?: number}) => {
  return (
    <Link href={"/"} className={cn('text-2xl font-extrabold flex items-center gap-2', fontSize)}>
        <div className='rounded-xl bg-gradient-to-t from-sky-500 to-sky-600 p-2'>
            <SquareDashedMousePointerIcon size={iconSize} className='stroke-white' />
        </div>
        <div>
            <span className='bg-gradient-to-tr from-sky-500 to-sky-600 bg-clip-text text-transparent'>Cog</span>
            <span className='text-stone-700'>nify</span>
        </div>
    </Link>
  )
}

export default Logo