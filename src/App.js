import React from 'react';
import PageTop from './components/PageTop/PageTop';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AllCoursePage from './pages/AllCoursePage';
import PortfolioPage from './pages/PortfolioPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
    <HomePage />
    <TopNavigation />
    <PageTop pagetitle="About Me " />
    <AllCoursePage />
    <PortfolioPage />
    </div>
  );
}
export default App;