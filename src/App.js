import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/articles/list')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route
          path="/articles"
          element={
            <div>
              <h1>Articles</h1>
              <ul>
                {articles.map(article => (
                  <li key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;