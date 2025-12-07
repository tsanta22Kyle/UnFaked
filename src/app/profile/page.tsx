'use client'

import { useUser } from '@clerk/nextjs'

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser()

  // Handle loading state
  if (!isLoaded) return <div>Loading...</div>

  // Protect the page from unauthenticated users
  if (!isSignedIn) return <div>Sign in to view this page</div>

  return <>
    <h1>Hello {user.firstName}!</h1>
    <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
    <img src={user.imageUrl} alt="Profile" width={80} />
    </>
}