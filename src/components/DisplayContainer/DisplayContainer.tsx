import { useAppDispatch, useAppSelector } from '../../hooks/reduxTypedHooks';
import { togglePower } from '../../redux/drum/drumSlice';
import { displayVariants } from './DisplayContainer.variants';
import './display-container.scss';
import { motion } from 'framer-motion';

const DisplayContainer = () => {
  const { power, audioTrack } = useAppSelector(state => state.drum);
  const dispatch = useAppDispatch();

  return (
    <div className={`display-container ${power}`}>
      <div
        className='display'
        id='display'
      >
        <motion.p
          variants={displayVariants}
          initial='hidden'
          animate='visible'
          key={audioTrack}
        >
          {audioTrack}
        </motion.p>
      </div>
      <button
        className='power'
        onClick={() => dispatch(togglePower())}
      >
        {power.toUpperCase()}
      </button>
    </div>
  );
};

export default DisplayContainer;
