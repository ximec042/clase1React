const Header = () => {
    return (
        <header>
        <div id="nombre">
          <img id="imagen" src="public/imagenes/logo.png" alt="logo" width="150px" />
        </div>
  
        <nav id="links">
          <a href="empresa.html" target="_blank">EMPRESA</a>
          <a href="contacto.html" target="_blank">CONTACTO</a>
          <a href="registro.html" target="_blank">REGISTRO</a>
        </nav>
      </header>
    );
}

export default Header;