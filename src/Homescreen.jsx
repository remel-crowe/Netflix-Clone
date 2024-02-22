import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Row from "./components/row/Row";
import requests from "./requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="true"
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      {/* Row */}
    </div>
  );
}

export default HomeScreen;
