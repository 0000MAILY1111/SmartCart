import Navbar from "../components/Navbar"

export const HomePage = () => {

///aqui se puede colocar de modo opcional lo que ira en la pagina home
  return (
    <>
      <Navbar />
      <h1>Galería de Poleras</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.topmark.cl/wp-content/uploads/2022/01/polera_pique_azulino.jpg" className="card-img-top" alt="Polera 1" />
              <div className="card-body">
                <h5 className="card-title">Polera 1</h5>
                <p className="card-text">Manga Corta Talla L</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.topmark.cl/wp-content/uploads/2022/01/polera_pique_gris-1.jpg" className="card-img-top" alt="Polera 2" />
              <div className="card-body">
                <h5 className="card-title">Polera 34</h5>
                <p className="card-text">Manga Corta Talla XL</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.topmark.cl/wp-content/uploads/2022/01/polera_pique_marino.jpg" className="card-img-top" alt="Polera 3" />
              <div className="card-body">
                <h5 className="card-title">Polera 3</h5>
                <p className="card-text">Manga Corta Talla M</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h1>Galería de Camisas</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://static.ternua.com/media/catalog/product/cache/20bffb6e43a6932385fe9e99731698d8/1/4/1481352-2463-1-CAMISA-FORTUNE.jpg" className="card-img-top" alt="Polera 1" />
              <div className="card-body">
                <h5 className="card-title">Camisa 1</h5>
                <p className="card-text">Manga Corta  Talla S</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://static.ternua.com/media/catalog/product/cache/20bffb6e43a6932385fe9e99731698d8/1/4/1481430-8914-1-CAMISA-HARCOURT.jpg" className="card-img-top" alt="Polera 2" />
              <div className="card-body">
                <h5 className="card-title">Camisa 2</h5>
                <p className="card-text">Manga Larga Talla XL</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://static.ternua.com/media/catalog/product/cache/20bffb6e43a6932385fe9e99731698d8/1/4/1481430-8918-1-CAMISA-HARCOURT.jpg" className="card-img-top" alt="Polera 2" />
              <div className="card-body">
                <h5 className="card-title">Camisa 3</h5>
                <p className="card-text">Manga Larga Talla XL</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    

      <h1>Galería de Pantalones</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://st.depositphotos.com/1706719/1267/i/950/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg" className="card-img-top" alt="Polera 1" />
              <div className="card-body">
                <h5 className="card-title">Pantalon 1</h5>
                <p className="card-text">Largo Jean  Talla 39</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card">
              <img src="https://static6.depositphotos.com/1026498/651/i/450/depositphotos_6516008-stock-photo-jeans-trousers.jpg" className="card-img-top" alt="Polera 2" />
              <div className="card-body">
                <h5 className="card-title">Pantalon 2</h5>
                <p className="card-text">Largo Jean Talla 40</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="https://st4.depositphotos.com/2171343/40819/i/600/depositphotos_408191130-stock-photo-fashion-pants-wearable-front-back.jpg" className="card-img-top" alt="Polera 2" />
              <div className="card-body">
                <h5 className="card-title">Pantalon 3</h5>
                <p className="card-text">Largo Jean Talla 38</p>
                <a href="#" className="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;