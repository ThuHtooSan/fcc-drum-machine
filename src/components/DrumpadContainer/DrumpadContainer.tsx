import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import { Drumpad } from './DrumpadContainer.types';
import './drumpad-container.scss';
import { setAudioTrack } from '../../redux/drum/drumSlice';
import { useEffect } from 'react';

export const drumpads: Drumpad[] = [
  {
    key: 'q',
    audio: {
      name: 'Heater 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
  },
  {
    key: 'w',
    audio: {
      name: 'Heater 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
  },
  {
    key: 'e',
    audio: {
      name: 'Heater 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
  },
  {
    key: 'a',
    audio: {
      name: 'Heater 4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
  },
  {
    key: 's',
    audio: {
      name: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
  },
  {
    key: 'd',
    audio: {
      name: 'Open HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
  },
  {
    key: 'z',
    audio: {
      name: "Kick n' Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
  },
  {
    key: 'x',
    audio: {
      name: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
  },
  {
    key: 'c',
    audio: {
      name: 'Closed HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  },
];

const DrumpadContainer = () => {
  const power = useAppSelector(state => state.drum.power);
  const dispatch = useDispatch();

  const handleShortcut = (e: KeyboardEvent) => {
    if (power === 'off') return;

    const key = e.key.toLowerCase();

    if (drumpads.some(drumpad => drumpad.key === key)) {
      const drumpad = document.querySelector(
        `.drum-pad.${key}`
      ) as HTMLButtonElement;

      drumpad.focus();
      drumpad.click();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (power === 'off') return;

    const target = e.target as HTMLButtonElement;
    const audioElem = target.children[1] as HTMLAudioElement;

    // stop the audio
    audioElem.pause();
    audioElem.currentTime = 0;

    audioElem.play();

    setTimeout(() => {
      target.blur();
    }, 300);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleShortcut);

    return () => window.removeEventListener('keydown', handleShortcut);
  }, [power]);

  return (
    <div className={`drumpad-container ${power}`}>
      {drumpads.map(drumpad => {
        const { key, audio } = drumpad;
        return (
          <button
            className={`drum-pad ${key}`}
            id={audio.name.replace(/\s/g, '-')}
            onClick={handleClick}
            key={key}
          >
            <p>{key.toUpperCase()}</p>
            <audio
              src={audio.url}
              className='clip'
              id={key.toUpperCase()}
              onPlay={() => dispatch(setAudioTrack(audio.name))}
              onPause={() => dispatch(setAudioTrack(''))}
            ></audio>
          </button>
        );
      })}
    </div>
  );
};

export default DrumpadContainer;
