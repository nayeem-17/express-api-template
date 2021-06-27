const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
chai.use(chaiHttp);

describe('Test api', () => {

    describe('GET /', () => {
        it('yo', (done) => {
            chai
                .request(server)
                .get('/')
                .end((err, res) => {
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    should.exist(res.body);
                    done();
                })
        });
    })
});