import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Row from "./components/row/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />

      <Row />

      {/* Row */}
    </div>
  );
}

export default HomeScreen;
