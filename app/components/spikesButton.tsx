import Link from 'next/link.js';

const button =
  'block px-4 py-2 rounded-full border border-[#4C3182] bg-transparent backdrop-blur-sm text-base font-medium transition-transform duration-200 ease-in-out hover:scale-105 ';

export default function SpikesButton() {
  return (
    <Link href='https://www.spikes.dev' className={button}>
      www.spikes.dev <span aria-hidden='true'>-&gt;</span>
    </Link>
  );
}
