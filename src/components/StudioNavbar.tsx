import { ArrowBigLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Lilita_One } from 'next/font/google'

const lilitaFont = Lilita_One({weight: "400", subsets:["latin"]})

const StudioNavbar = () => {
  return (
    <nav className='w-full py-3 bg-black text-white'>
      <div className='max-w-6xl flex justify-between items-center mx-auto'>
      <Link href='/'><ArrowBigLeftIcon /></Link>
      <h1 className={`${lilitaFont.className} text-2xl font-bold tracking-tight`}>BlogNook</h1>
      </div>
    </nav>
  )
}

export default StudioNavbar
