import Intro from './sections/Intro.jsx';
import Main from './sections/Main.jsx';

function App() {
  return (
    <>
      <header><Intro /></header>
      <main className='main'>
        <Main />
      </main>
    </>
  );
}

export default App
