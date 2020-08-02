import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img src="/logo.png" alt="" className="header__logo" />
      </Link>
      <Link href="/">
        <h1 className="header__title">Glory Jewellery</h1>
      </Link>

    </header>
  )
}