import { GridPattern } from '../../public/grid-pattern';

export default function Background() {
  const topBackground = 'absolute top-0 w-full h-auto rotate-180 -z-50';
  const bottomBackground = 'absolute bottom-0 w-full h-auto -z-50';
  return (
    <>
      <GridPattern className={topBackground} />
      <GridPattern className={bottomBackground} />
    </>
  );
}
