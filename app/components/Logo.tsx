import { SpikesIcon } from '../../public/spikes_icon';

export default function Logo() {
  const logoContainer = 'flex items-center';
  const logoText = 'ml-3 text-2xl';

  return (
    <div className={logoContainer}>
      <SpikesIcon width={32} height={32} />
      <span className={logoText}>Spikes</span>
    </div>
  );
}
