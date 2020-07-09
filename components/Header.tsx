import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img src="/static/logo.png" alt="" className="header__logo" />
      </Link>
      <Link href="/">
        <h1 className="header__title">Glory Jewellerys</h1>
      </Link>

    </header>
  )
}