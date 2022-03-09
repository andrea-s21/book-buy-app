const KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = '/api/books';

server.post(`${BASE_URL}`, (req, res) => {
    const bookInfo = req.body;
  
    db.add(bookInfo)
      .then(book => {
        res.status(201).json({ book })
      })
      .catch(err => {
        res.status(500).json({ err })
      })
  })