import { DisplayContainer, DrumpadContainer } from '..';
import './drum-container.scss';

const DrumContainer = () => {
  return (
    <div
      className='drum-container'
      id='drum-machine'
    >
      <DrumpadContainer />
      <DisplayContainer />
    </div>
  );
};

export default DrumContainer;
