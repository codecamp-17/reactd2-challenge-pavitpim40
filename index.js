// ### ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// ### LV.2
function StoryItem(props) {
  const { place, src } = props;
  return (
    <div className='stories__list--item'>
      <h4>{place}</h4>
      <img src={src} atl={place} />
    </div>
  );
}

// ### LV.1
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
        <section className='stories'>
          <div className='stories__title'>
            <h1>We are available in many well know countries</h1>
          </div>
          <div className='stories__list'>
            <StoryItem place='America' src='./images/america.png' />
            <StoryItem place='Spain' src='./images/spain.png' />
            <StoryItem place='London' src='./images/london.png' />
            <StoryItem place='France!' src='./images/france.png' />
          </div>
        </section>
        <section className='properties'>Properties</section>
        <Banner title='Find your best Real Estate' src='./images/building.png' withTab={false} />
      </main>
      <footer className='footer'>Footer</footer>
    </>
  );
}

root.render(<App />);
