const Footer = () => {
  return (
    <>
      <footer class="pie">
        <div class="grupo1">
          <div class="box">
            <figure>
              <a href="#">
                <img src="public/imagenes/footer.png" alt="logo footer" />
              </a>
            </figure>
          </div>

          <div
            class="box"
            style={{
              marginTop: 50,
            }}
          >
            <h2>SOBRE NOSOTROS</h2>
            <ul>
              <li>Quienes somos</li>
              <li>Ubicación</li>
              <li>Acerca de</li>
              <li>Trabaja con nosotros</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, autem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, autem!
            </p>
          </div>

          <div class="box" style={{ marginTop: 50 }}>
            <h2>SIGUENOS</h2>
            <div class="red-social">
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>
          </div>
        </div>

        <div class="grupo2">
          <small>
            Copyright <i class="fa fa-copyright"></i> 2023 <b>ECO</b>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
