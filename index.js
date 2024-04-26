// ### ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// ### LV.1
function Hero() {
  return (
    <section className='hero'>
      {/* Image */}
      <div className='hero__image__container'>
        <img className='hero__image' alt='hero' src='./images/banner.png' />
        <div className='hero__text'>
          <h1>Easy way to find a perfect property</h1>
          <p>We provide a complete service for the sale, purchase or rental of real estate.</p>
          <div className='hero__tab'></div>
        </div>
      </div>
    </section>
  );
}

function Banner(props) {
  return (
    <section className='hero'>
      {/* Image */}
      <div className='hero__image__container'>
        <img
          className={`hero__image ${!props.withTab && 'border-custom'}`}
          alt='hero'
          src={props.src}
        />
        <div className='hero__text'>
          <h1>{props.title}</h1>
          <p>We provide a complete service for the sale, purchase or rental of real estate.</p>
          {props.withTab && <div className='hero__tab'></div>}
        </div>
      </div>
    </section>
  );
}

// ## APP

function App() {
  return (
    <>
      <header className='nav'>NavBar</header>
      <main className='main'>
        <Banner
          title='Easy way to find a perfect property'
          src='./images/banner.png'
          withTab={true}
        />
        <section className='stories'>Stories</section>
        <section className='properties'>Properties</section>
        <Banner title='Find your best Real Estate' src='./images/building.png' withTab={false} />
      </main>
      <footer className='footer'>Footer</footer>
    </>
  );
}

root.render(<App />);
