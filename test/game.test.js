const request = require('supertest');
const app = require('../app');

/* 
 Testing create game
*/
describe('/GET /game', () => {
    it('respond with a json containing the created game', done => {
        request(app)
            .get('/game')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})

/* 
 Testing get game
*/
describe('/GET /game/:id', () => {
    /*
     * Testing get game with correct id
     */
    it('respond with json containing the requested game', done => {
        request(app)
            .get('/game/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })

     /*
     * Testing get game with wrong id
     */
    it('respond with json "Game not found." when the game does not exists', done => {
        request(app)
            .get('/game/non-existing-id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})

/* 
 Testing update game
*/
describe('/POST /game', () => {
    /*
     * Testing update game with correct req.body
    */
    it('respond with a json containing the updated game', done => {
        const body = {
            id: 10,
            cells: ["A1","B2","C3"]
        }
        request(app)
            .post('/game')
            .send(body)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })

    /*
     * Testing update game with wrong req.body
    */
    it('respond with a status code 400 on bad request.', done => {
        const body = {};
        request(app)
            .post('/game')
            .send(body)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})