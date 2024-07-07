
import "../styles/SearchResult.css";

export default function SearchResult({ result }) {

  return (
      <div className="search-result_container">
            {
                result.map((result) => {
                    return (
                        <div className="search-result">
                            <h3>{result.title}</h3>
                            <p>{result.description}</p>
                        </div>
                    );
                })
            }
      </div>
  );
}
