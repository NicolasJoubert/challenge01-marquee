import Background from './components/GridPattern';
import Logo from './components/Logo';

export default function Home() {
  const header = 'flex justify-center mt-12';
  return (
    <main className=''>
      <Background />
      <header className={header}>
        <Logo />
      </header>
    </main>
  );
}
