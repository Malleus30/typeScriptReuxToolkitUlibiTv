import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreatores';

function App() {

  const dispatch = useAppDispatch();
  const {users, isLoading,error } = useAppSelector(state => state.userReducer);

  useEffect( () => {
    dispatch(fetchUsers());
  }, [ ])

  return (
    <div className="App">
      {isLoading && <h1>идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
