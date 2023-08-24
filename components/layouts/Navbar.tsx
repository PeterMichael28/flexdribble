
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/static/constant';
import AuthProviders from '../AuthProviders';
type Props = {}

const Navbar = (props: Props) => {

    const session = null;
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
              { session ? (
                  <>
                  user photo

                    <Link href='/create-project'>
                    share your work
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