import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#88ff4d',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './myicon.png',
  fullDecal: './myicon.png',
});

export default state;