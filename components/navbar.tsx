import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from 'antd';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="w-full bg-white fixed  top-0 left-0 right-0">
      <div className="container mx-auto flex justify-between items-center px-3 md:px-0">
        <div className="md:text-4xl text-xl text-violet-600 font-bold p-4">
          Easy Papers
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2">
              <Link href={'/sign_up'}>
                <Button type="primary">Sign up</Button>
              </Link>
              <Link href={'/sign_up'}>
                <Button>Sign in</Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
