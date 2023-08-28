
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/static/constant';
import AuthProviders from '../AuthProviders';
import { getCurrentUser } from '@/lib/session';
import ProfileMenu from '../ProfileMenu';
import Button from '../Button';
type Props = {}

const Navbar = async (props: Props) => {

    const session = await getCurrentUser()
  return (
      <header className='navbar flexBetween'> 
          <div className='flex-1 flexStart gap-10'>
              <Link href='/'>
                  <Image
                      src='/logo.svg'
                      width={115}
                      height={43}
                      alt='logo image'
                  />
              </Link>


          {/* links */}
          <nav>
              <ul className='xl:flex hidden text-small gap-7'>
                  { NavLinks.map( ( link ) => (
                      <li key={link.key}>
                          <Link href={link.href}>
                              {link.text}
                          </Link>
                      </li>
                  ))}
              </ul>
          </nav>
          </div>

{/* user profile */}
          <div className='flexCenter gap-4'>
              { session?.user ? (
                 <>
                 <ProfileMenu session={session} />
     
                 <Link href="/create-project">
                   <Button title='Share work' />
                 </Link>
               </>
              ) : (
                    <AuthProviders />
              )}
        </div>
    </header>
  )
}

export default Navbar