import Intro from './sections/Intro.jsx';
import MainContent from './sections/MainContent.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <div className='page-layout'>
      <header><Intro /></header>
      <main className='container'>
        <MainContent />
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default App
