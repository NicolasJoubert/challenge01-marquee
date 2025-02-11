import Background from './components/GridPattern';
import Logo from './components/Logo';
import Reviews from './components/Reviews';

export default function Home() {
  const main =
    'absolute min-h-screen h-full inset-0 flex flex-col justify-between';
  const header = 'flex justify-center mt-12';
  const marqueeWrapper = 'flex flex-col flex-auto justify-center';

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
    </main>
  );
}
