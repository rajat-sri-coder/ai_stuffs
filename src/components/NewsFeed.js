import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback data in case the API fails
  const fallbackNews = [
    {
      title: 'Deep Learning Breakthrough in Healthcare',
      description: 'Researchers have developed a new AI model that can predict diseases...',
      url: 'https://example.com',
    },
    {
      title: 'OpenAI Releases GPT-5',
      description: 'OpenAI has announced the release of GPT-5, the latest version of...',
      url: 'https://example.com',
    },
    {
      title: 'AI in Agriculture: Revolutionizing Farming',
      description: 'Deep learning is being used to optimize crop yields and reduce waste...',
      url: 'https://example.com',
    },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = '99bbc062fbdc424f96c5af28d8fc17da'; // Replace with your NewsAPI key
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=deep+learning&apiKey=${apiKey}`
        );

        console.log('API Response:', response); // Log the response

        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Data:', data); // Log the data

        if (data.status === 'error') {
          throw new Error(data.message);
        }

        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error); // Log the error
        setError(error.message);
        setNews(fallbackNews); // Use fallback data if the API fails
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