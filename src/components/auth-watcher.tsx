'use client'

import { useAuth } from '@clerk/nextjs'
import { useEffect, useRef } from 'react'
import { syncAuthToken } from '@/app/actions/auth-sync'

export function AuthWatcher() {
    const { isLoaded, isSignedIn, userId } = useAuth()
    const hasSynced = useRef(false)

    useEffect(() => {
        if (isLoaded && isSignedIn && userId && !hasSynced.current) {
            // Prevent double execution in Strict Mode or re-renders
            hasSynced.current = true;

            console.log('User detected, syncing auth token...');
            syncAuthToken()
                .then((result) => {
                    if (result.success) {
                        console.log('Auth token synced successfully');
                    } else {
                        console.error('Failed to sync auth token:', result.message);
                        // Optional: Reset hasSynced to allow retry? 
                        // For now, let's keep it true to avoid spamming the API on error loops.
                    }
                })
                .catch((err) => {
                    console.error('Error triggering auth sync:', err);
                });
        }

        // Reset sync status if user logs out
        if (!isSignedIn && hasSynced.current) {
            hasSynced.current = false;
        }

    }, [isLoaded, isSignedIn, userId]);

    return null
}
