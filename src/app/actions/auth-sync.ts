'use server'

import { auth, currentUser } from '@clerk/nextjs/server'

export async function syncAuthToken() {
    try {
        const { userId, getToken } = await auth();
        const user = await currentUser();

        if (!userId || !user) {
            console.log('No user logged in, skipping sync');
            return { success: false, message: 'No user logged in' };
        }

        // Get the JWT token from Clerk
        // The template name is optional, if you have a custom template in Clerk Dashboard, use it here.
        // If not, it returns the default session token.
        const token = await getToken();

        if (!token) {
            console.error('Failed to retrieve token for user:', userId);
            return { success: false, message: 'Failed to retrieve token' };
        }

        // Default expiration for Clerk tokens is usually 1 hour, but the user request 
        // had a static date "2025-12-06". The external API might expect a specific format.
        // Since we don't know the exact expiration from getToken() (it's encoded in the JWT),
        // and decoding it here might be overhead, we can either:
        // 1. Decode the JWT to get 'exp'.
        // 2. Send a dummy date if the API just needs *a* date.
        // 3. Send the current date + 1 hour.
        // 
        // The curl example had "2025-12-06". Let's assume for now we can extract it or send a valid future date.
        // Let's decode the token to be precise? No, that requires an extra lib (though we have svix/clerk).
        // Let's rely on the token itself.
        // However, the JSON payload REQUIRES "expiration_date".
        // I will generate a date string for 1 year from now to be safe, or just use a placeholder if the server validates the token itself.
        // A better approach is likely just sending a long expiry or the actual one.
        // Let's try to be helpful and send a reasonable future date, e.g., 30 days or based on common session lengths.
        // But wait, the curl says "expiration_date": "2025-12-06".
        // I will pick a date far in the future? Or maybe the user WANTS it to expire then? 
        // "2025-12-06" is seemingly arbitrary in the user example (it matches today's date in the prompt metadata!).
        // Ah, wait. The prompt metadata says today is 2025-12-06.
        // So the example uses TODAY. That's weird for an "expiration". Maybe it means "issued at" or "valid until end of day"?
        // I will just set it to 1 day from now to be safe, or 1 hour.
        // Actually, let's look at the example again.
        /*
          -d '{
          "clerk_id": "...",
          "token": "...",
          "expiration_date": "2025-12-06"
        }'
        */

        // I will use the current date + 7 days formatted as YYYY-MM-DD.
        const today = new Date();
        const expirationDateObj = new Date(today.setDate(today.getDate() + 7));
        const expirationDate = expirationDateObj.toISOString().split('T')[0];
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        const payload = {
            clerk_id: userId,
            token: token,
            expiration_date: expirationDate
        };

        console.log(`Syncing auth token for user ${userId} to external API...`);

        const response = await fetch(`https://preprod-misinformation-by-ai-1.onrender.com/auth/token`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            //TODO: Remove token and payload from this log
            console.error(`Failed to sync auth token. Status: ${response.status} - ${errorText} - ${payload} - ${token}`);
            return { success: false, message: `API Error: ${response.status}` };
        }

        const data = await response.json();
        console.log('Successfully synced auth token:', data);
        return { success: true, data };

    } catch (error) {
        console.error('Error in syncAuthToken:', error);
        return { success: false, message: 'Internal Server Error' };
    }
}
