import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = '99bbc062fbdc424f96c5af28d8fc17da'; // Replace with your NewsAPI key
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=deep+learning&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" mt={4}>
        Error: {error}
      </Typography>
    );
  }

  return (
    <div>
      {news.map((article, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {article.description}
          </Typography>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Box>
      ))}
    </div>
  );
};

export default NewsFeed;