import app from '../app';
import Request from 'supertest';
import '@types/jest';

describe('Server', () => {
    const request = Request(app);

    describe('/api', () => {
        it('Should return a 404 when invalid route', done => {
            request
                .post('/api/notfound')
                .expect(404)
                .end(done);
        });
    });
});