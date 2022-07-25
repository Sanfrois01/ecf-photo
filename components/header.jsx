import Link  from 'next/Link';

const Header = () =>  {
  return (
    <header>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand link-light">Accueil</a>
              </Link>
          <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link href="/galerie">
                <a className="nav-link link-secondary">Galerie</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tarifs">
                <a className="nav-link link-secondary">Tarifs et Prestation</a> 
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link link-secondary">Contact</a> 
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}



export default Header;