const express = require('express');
const axios = require('axios');
const { google } = require('googleapis');

const app = express();
const port = 3000;

const apiKey = "AIzaSyAdSqmf82qjUmAUvW65atdnqvB55l1lt9I";
const baseApiUrl = "https://www.googleapis.com/youtube/v3";

const youtube = google.youtube({
    version: 'v3',
    auth: apiKey
});

// /search?key=apiKey&type=video&part=snnipet&q=foo

app.get('/', (req, res) => {
    res.send('Hello from our API');
});

app.get('/search', async (req, res, next) => {
    try {
        const searchQuery = req.query.search_query;
        const url = `${baseApiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${searchQuery}`;
        const response = await axios.get(url);
        const titles = response.data.items.map(item => item);
        res.send(titles);
    } catch (error) {
        next(error);
    }
});

app.get('/search-with-googleapis', async (req, res, next) => {
    try {

        const searchQuery = req.query.search_query;
        
        const response = await youtube.search.list({
            part: "snippet",
            q: searchQuery,
            type: "video"
        });
        
        const titles = response.data.items.map(item => item.snippet.title);

        res.send(titles);
    } catch (error) {
        next(error);
    }
});

app.listen(port, () => {
    console.log('App is started.');
});