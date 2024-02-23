import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Row from "./components/row/Row";
import requests from "./requests";
import "./Homescreen.scss";
import { useEffect, useState } from "react";
const API_KEY = "0369d1ff8388d53c050ba9b87ad86732";

function HomeScreen() {
  const [search, setSearch] = useState("");
  const [showDefaultRows, setShowDeafultRows] = useState(true);

  useEffect(() => {
    setShowDeafultRows(!search);
  }, [search]);
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav search={search} setSearch={setSearch} />
      {/* Banner */}
      <Banner />
      {/* Row */}

      {showDefaultRows && (
        <>
          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
          />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        </>
      )}
      {/* Render search results when search is updated */}
      {search && (
        <Row
          title="Search Results"
          fetchUrl={
            requests.fetchSearch +
            `&query=${search}&include_adult=false&language=en-US&page=1`
          }
          wrap={true}
        />
      )}

      {/* Footer */}
    </div>
  );
}

export default HomeScreen;
