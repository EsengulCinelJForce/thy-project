import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import SearchBox from "../../components/layout/SearchBox";

const index = () => {
  return (
    <div >
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default index;
