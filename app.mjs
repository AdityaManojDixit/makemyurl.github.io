import express from 'express';
import './src/db/conn.mjs'; // Assuming conn.mjs is an ES6 module
import {shortner} from './src/models/shortUrl.mjs';

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const miniURL = await shortner.find();
    res.render("index.ejs", { miniURL: miniURL });
});

app.post('/shortUrls', async (req, res) => {
    await shortner.create({
        full: req.body.fullUrl,
    });
    res.redirect('/');
});

app.get('/:miniURL', async (req, res) => {
    const miniURL = await shortner.findOne({ short: req.params.miniURL });
    if (miniURL == null) return res.send('URL not found!');

    miniURL.clicks++;
    miniURL.save();

    res.redirect(miniURL.full);
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
