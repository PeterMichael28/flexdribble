import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/static/constant';
import Link from 'next/link';
type Props = {
title: string,
 links:string[]
}


const FooterColumn = ({title,links }: Props) => (
    <div className='footer_column'>
      <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      { links.map( ( link ) => (
        <li key={link}>
          <Link href='/'>
            { link}
          </Link>
        </li>
      ))}
      </ul>
    </div>
)

const Footer = (props: Props) => {
  return (
      <footer className='flexStart footer'>
          <div className='flex flex-col gap-12 w-full'>

            {/* text and logo part */}
              <div className='flex item-start flex-col'>
                  <Image
                    src='/logo-purple.svg'
                    width={115}
                    height={38}
                    alt='logo'
                  />

                  <p className="text-start text-sm font-normal mt-5 max-w-xs">
                      Flexible is the world's leading community for creatives to share, grow and get hird
                  </p>
              </div>


              {/* links section */}
              <div className='flex flex-wrap gap-12'>
          <FooterColumn title={ footerLinks[ 0 ].title } links={ footerLinks[ 0 ].links} />

          <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={ footerLinks[ 1 ].title } links={ footerLinks[ 1 ].links} />
          <FooterColumn title={ footerLinks[ 2 ].title } links={ footerLinks[ 2 ].links} />

          </div>
          <FooterColumn title={ footerLinks[ 3 ].title } links={ footerLinks[ 3 ].links} />
           <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={ footerLinks[ 4 ].title } links={ footerLinks[ 4 ].links} />
          <FooterColumn title={ footerLinks[ 5 ].title } links={ footerLinks[ 5 ].links} />

          </div>
          <FooterColumn title={ footerLinks[ 6 ].title } links={ footerLinks[ 6 ].links} />
              </div>
          </div>

      <div className='flexBetween footer_copyright'>
        <p>
          @ 2023 Michael, All Rights Reserved
        </p>
        <p className='text-gray'>
          <span className='text-black font-semibold'>
            40,866
</span>
projects submitted
        </p>
          </div>
    </footer>
  )
}

export default Footer