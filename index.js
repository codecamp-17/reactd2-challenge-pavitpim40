// ### ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// ### LV.3
function StoryItem(props) {
  const { place, src } = props;
  return (
    <div className='stories__list--item'>
      <h4>{place}</h4>
      <img src={src} atl={place} />
    </div>
  );
}

// ### LV.2
function StoryList() {
  const places = [
    { id: 1, placeName: 'America', image: './images/america.png' },
    { id: 2, placeName: 'Spain', image: './images/spain.png' },
    { id: 3, placeName: 'London', image: './images/london.png' },
    { id: 4, placeName: 'France', image: './images/france.png' },
  ];
  return (
    <section className='stories'>
      <div className='stories__title'>
        <h1>We are available in many well know countries</h1>
      </div>
      <div className='stories__list'>
        {places.map((item) => (
          <StoryItem key={item.id} place={item.placeName} src={item.image} />
        ))}
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

// ### LV.1

function Navbar() {
  return <header className='nav'>NavBar</header>;
}
function Footer() {
  return <footer className='footer'>Footer</footer>;
}
function Main() {
  return (
    <main className='main'>
      <Banner
        title='Easy way to find a perfect property'
        src='./images/banner.png'
        withTab={true}
      />
      <StoryList />
      <section className='properties'>Properties</section>
      <Banner title='Find your best Real Estate' src='./images/building.png' withTab={false} />
    </main>
  );
}
// ## APP

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

root.render(<App />);
