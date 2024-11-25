import { atom } from 'recoil';

// Recoil atom for managing the splash screen state
export const showSplashState = atom({
  key: 'showSplashState', // Unique key for the atom
  default: true, // Initial value
});
