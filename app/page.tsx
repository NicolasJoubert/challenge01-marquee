import Background from './components/GridPattern';
import Logo from './components/Logo';
// A SUPPRIMER UNE FOIS LA PAGE GOOD
import Link from 'next/link';

export default function Home() {
  const header = 'flex justify-center mt-12';
  return (
    <main className=''>
      <Background />
      <header className={header}>
        <Logo />
        <Link href='/test'>GO page de Test</Link>
      </header>
    </main>
  );
}
