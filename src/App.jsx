import Intro from './sections/Intro.jsx';
import Main from './sections/Main.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <div className='page-layout'>
      <header><Intro /></header>
      <main className='main'>
        <Main />
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default App
