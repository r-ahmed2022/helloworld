import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage} from '../redux/greetingSlice';

const Greeting = () => {
  const { message }= useSelector((state) => state.greeting?.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <p>Greeting Here:</p>
      <h2>{message}</h2>
    </div>
  );
};

export default Greeting;
