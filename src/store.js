import { atomWithStorage } from 'jotai/utils';

export const loginAtom = atomWithStorage('loggedIn-or-not', false);
export const userAtom = atomWithStorage('user', {});
