/**
 * Interruttore per i nomi commerciali coperti da NDA / clausole contrattuali.
 *
 * false (default, sicuro) → il sito descrive i progetti per settore
 *                           ("cliente del settore elettrodomestici").
 * true                    → compaiono i nomi reali (Haier / h0n, Motion Italia).
 *
 * Metti true SOLO dopo aver verificato di poterli citare pubblicamente.
 */
export const DISCLOSE_CLIENT_NAMES = false

/** Sceglie fra la variante anonima e quella con nome. */
export function named<T>(anonymous: T, disclosed: T): T {
  return DISCLOSE_CLIENT_NAMES ? disclosed : anonymous
}
