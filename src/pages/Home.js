import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import StatusMessage from '../components/UI/StatusMessage';
import WorkOutCard from '../components/WorkOutCard';
import { auth, db } from '../firebase/firebase-config';
import WorkoutContext from '../store/context';

const Home = () => {
  const ctx = useContext(WorkoutContext);
  const [workoutList, setWorkoutList] = useState();

  useEffect(() => {
    if (ctx.currentUser) {
      const collectionRef = collection(
        db,
        'users',
        ctx.currentUser.uid,
        'workouts'
      );

      const fetchWorkouts = async () => {
        const data = await getDocs(collectionRef);
        const workouts = data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setWorkoutList(workouts);
      };
      fetchWorkouts();
    }
  }, []);

  return (
    <React.Fragment>
      <div className='container mx-auto mt-10 px-4'>
        {ctx.status.type && <StatusMessage status={ctx.status}></StatusMessage>}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {ctx.currentUser &&
            workoutList &&
            workoutList.map((workout) => {
              return (
                <WorkOutCard
                  key={workout.id}
                  workOutInfo={workout}></WorkOutCard>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
