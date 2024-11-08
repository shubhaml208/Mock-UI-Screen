import React, { useEffect } from 'react';
import useTheme from './hooks/useTheme';
import { Route, Routes } from 'react-router-dom';
import OutletProtect from './outlet/OutletProtect';
import Home from './components/pages/Home/Home';
const App: React.FC = () => {

  const { isDark } = useTheme()

  useEffect(() => {
    document.body.className = isDark ? 'dark' : '';
  }, [isDark]);

  return (
    <Routes>
      <Route path='/' Component={OutletProtect}>
      <Route path='/' Component={Home} />
      </Route>
    </Routes>
  );
};

export default App;
