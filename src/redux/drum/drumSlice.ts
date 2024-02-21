import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type HeaterNum = 1 | 2 | 3 | 4;

export type AudioTrack =
  | `Heater ${HeaterNum}`
  | 'Clap'
  | 'Open HH'
  | "Kick n' Hat"
  | 'Kick'
  | 'Closed HH';

type InitialState = {
  audioTrack: AudioTrack | '';
  power: 'off' | 'on';
};

const initialState: InitialState = {
  audioTrack: '',
  power: 'on',
};

const drumSlice = createSlice({
  name: 'drum',
  initialState,
  reducers: {
    setAudioTrack: (state, action: PayloadAction<AudioTrack | ''>) => {
      state.audioTrack = action.payload;
    },
    togglePower: state => {
      state.power = state.power === 'on' ? 'off' : 'on';
    },
  },
});

export const drumReducer = drumSlice.reducer;
export const { setAudioTrack, togglePower } = drumSlice.actions;
