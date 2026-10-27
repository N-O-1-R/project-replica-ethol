import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header/header';
import AppHero from './components/hero/hero';
// import AppAbout from './components/about';
// import AppServices from './components/services';
// import AppWorks from './components/works';
// import AppTeams from './components/teams';
// import Testimonials from './components/testimonials';
// import AppPricing from './components/pricing';
// import AppBlog from './components/blog';
// import AppContact from './components/contact';
// import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header id="header">
      <AppHeader />
      </header> 
      <main>
        <AppHero />
        {/* <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <Testimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
        <Footer /> */}
      </main>
    </div>
  );
}

export default App;
