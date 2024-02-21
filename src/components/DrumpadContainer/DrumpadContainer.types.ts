import { AudioTrack } from '../../redux/drum/drumSlice';

type Audio = {
  name: AudioTrack;
  url: string;
};

export type Drumpad = {
  key: 'q' | 'w' | 'e' | 'a' | 's' | 'd' | 'z' | 'x' | 'c';
  audio: Audio;
};
