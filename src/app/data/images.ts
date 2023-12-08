import {Media} from './media';

export const Images: Media[] = [];
for (let i = 1; i <= 143; i++) {
  Images.push({
    type: 'image',
    value: `./assets/images/random/1%20(${i}).jpg`
  });
}
