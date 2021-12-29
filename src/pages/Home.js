import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import WorkOutCard from '../components/WorkOutCard';
import { auth, db } from '../firebase/firebase-config';
import WorkoutContext from '../store/context';

const Home = () => {
  // const [user, setUser] = useState();
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
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
          console.log(doc.data());
          return { ...doc.data(), id: doc.id };
        });
        setWorkoutList(workouts);
        console.log(workouts);
      };
      fetchWorkouts();
    }
  }, []);
  console.log('home');
  console.log(ctx.currentUser.email);
  return (
    <React.Fragment>
      <div className='container mt-10 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {workoutList &&
            workoutList.map((workout) => {
              return <WorkOutCard workOutInfo={workout}></WorkOutCard>;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
