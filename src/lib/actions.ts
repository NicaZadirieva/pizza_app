// lib/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function retryFetch() {
	// Здесь можно добавить дополнительную логику
	revalidatePath('/');
}
