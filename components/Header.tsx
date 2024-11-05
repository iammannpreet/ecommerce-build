'use client'

import { useUser } from '@clerk/nextjs';

function Header() {
    const { user } = useUser();

    console.log(user);

  return <div>Header</div>
}

export default Header;
