import Link from 'next/link';
import { myStyle } from '@/styles/style.css';

export default function Home() {
  return (
    <div>
      <h1 className={myStyle}>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
