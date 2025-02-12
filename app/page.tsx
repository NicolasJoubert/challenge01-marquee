import Background from './components/GridPattern';
import Logo from './components/Logo';
import Reviews from './components/Reviews';
import SpikesButton from './components/spikesButton';

export default function Home() {
  const main = 'absolute min-h-screen h-full inset-0 flex flex-col';
  const header = 'absolute top-16 left-1/2 -translate-x-1/2';
  const marqueeWrapper = 'flex-grow flex items-center justify-center';
  const buttonWrapper = 'absolute bottom-16 left-1/2 -translate-x-1/2';

  return (
    <main className={main}>
      <Background />
      <header className={header}>
        <Logo />
      </header>
      <h2 className='sr-only'>Commentaires</h2>
      <div className={marqueeWrapper}>
        <Reviews />
      </div>
      <div className={buttonWrapper}>
        <SpikesButton />
      </div>
    </main>
  );
}
