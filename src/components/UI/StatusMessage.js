import React, { useContext, useEffect, useState } from 'react';
import WorkoutContext from '../../store/context';

const StatusMessage = (props) => {
  //   const status = props.status;
  //   const statusClass =
  //     status.type === 'success' ? 'text-at-light-green' : 'text-red-500';
  const [status, setStatus] = useState({ ...props.status });
  const ctx = useContext(WorkoutContext);
  console.log(status);
  useEffect(() => {
    let timerId = setTimeout(() => {
      setStatus({ type: null, message: '' });
    }, 4000);
    ctx.status = { type: null, message: '' };
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  console.log('message');
  return (
    <React.Fragment>
      {status.type && (
        <div className='mb-10 p-4 rounded-md shadow-md bg-light-grey'>
          <p
            className={
              status.type === 'success' ? 'text-at-light-green' : 'text-red-500'
            }>
            {status.message}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default StatusMessage;
