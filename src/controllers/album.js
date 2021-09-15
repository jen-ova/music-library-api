const getDb = require('../services/db');

exports.create = async (req, res) => {
  const db = await getDb();
  const { name, year } = req.body;

  try {
    await db.query(
      'INSERT INTO Album (artistId, name, year) VALUES (?, ?, ?)',
      [req.params.artistId, name, year]
    );
    res.status(201).send();
  } catch (err) {
    res.sendStatus(500);
  }

  db.close();
};

exports.read = async (req, res) => {
  const db = await getDb();

  try {
    const [albums] = await db.query('SELECT * FROM Album WHERE artistId = ?', [
      req.params.artistId
    ]);
    res.status(200).json(albums);
  } catch (err) {
    res.status(500).json(err);
  }

  db.close();
};
