import Hero from '../../components/Hero';
import Featured from '../../components/Featured';
import Divider from '../../components/Divider';
import Search from '../../components/Search';
import SearchResult from '../../components/SearchResult';

export default function Page() {

  return (
      <div className="navbar">
        <Hero />
        <Featured />
        <Divider />
        <Search />
      </div>
  );
}
