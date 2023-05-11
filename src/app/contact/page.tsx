import Link from "next/link";

export default function Contact() {
  return (
    <div>
      Contact
      <p>This is a link</p>
      <Link href="/">Home</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/about">About</Link>
    </div>
  );
}
