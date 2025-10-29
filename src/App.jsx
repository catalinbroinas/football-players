import Intro from './sections/Intro.jsx';
import Main from './sections/Main.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <>
      <header><Intro /></header>
      <main className='main'>
        <Main />
      </main>
      <footer><Footer /></footer>
    </>
  );
}

export default App
