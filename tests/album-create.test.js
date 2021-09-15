const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('create album', () => {
  let db;
  let artist;

  beforeEach(async () => {
    db = await getDb();
    await Promise.all([
      db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
        'Architects',
        'metalcore'
      ])
    ]);

    [artist] = await db.query('SELECT * FROM Artist LIMIT 1');
    console.log(artist[0].id);
  });

  afterEach(async () => {
    await db.query('DELETE FROM Album');
    await db.query('DELETE FROM Artist');
    await db.close();
  });

  describe('/artist/:artistId/album', () => {
    describe('POST', () => {
      it('creates a new album for a given artist', async () => {
        const res = await request(app)
          .post(`/artist/${artist[0].id}/album`)
          .send({
            name: 'Holy Hell',
            year: 2016
          });

        expect(res.status).to.equal(201);

        const [[album]] = await db.query(
          `SELECT * FROM Album where artistId = ${artist[0].id}`
        );
        console.log(album);

        expect(album.name).to.equal('Holy Hell');
        expect(album.year).to.equal(2016);
        expect(album.artistId).to.equal(artist[0].id);
      });
    });
  });
});
