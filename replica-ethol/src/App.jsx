import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
// import AppHero from './components/Hero';
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
        <div style={{ backgroundColor: '#0F2C59', height: '100vh', paddingTop: '150px' }}>
        <h1 className="text-white text-center mt-5">
          Sorot menu di atas! Animasinya pasti kelihatan sekarang.
        </h1>
      </div>

      {/* AREA 2: Ini simulasi konten bawah yang warnanya terang */}
      <div style={{ backgroundColor: '#f8f9fa', height: '1500px', paddingTop: '100px' }}>
        <h1 className="text-center text-dark">
          Coba scroll ke sini dan sorot lagi menunya!
        </h1>
      </div>
      </header> 
      <main>
        {/* <AppHero />
        <AppAbout />
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
