import {Videos} from './videos';
import {Prays} from './prays';
import {Verses} from './verses';
import {Images} from './images';

export type MediaTypes = 'video' | 'verse' | 'image' | 'pray';

export interface Media {
  type: MediaTypes;
  ref?: string;
  value: string,
  prays?: string[];
};
export const AllMedia: Media[] = [
  ...Images,
  ...Videos,
  ...Verses,
  ...Prays,
];
