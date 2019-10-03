import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import exmapleProfile from './data'

chai.use(chaiHttp);
chai.should();

describe("Profiles", () => {
    describe("GET /api/profiles", () => {

        it("should get all profiles records", (done) => {
            chai.request(app)
                .get('/api/profiles')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    done();
                });
        });

        it("should create an example profile object", (done) => {
            chai.request(app)
                .post('/api/profiles')
                .set('content-type', 'application/json')
                .send(exmapleProfile)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');                    
                    done();
                });
        });

    });
});