import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'

const  DashboardPage = () => {
  return (
    <div>Dashboard Page (Protected)
      <p className='text-6xl text-green-500'>Hello, Welcome to AI SaaS Project</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
    // <p className='text-6xl text-green-500'>Hello, Welcome to AI SaaS Project</p>
  )
}

export default DashboardPage;