const request = require('supertest')
const expect = require('chai').expect

const app = require('../app')
const showAvg = require('../routes/index').runtimesArray;

describe('GET /', function () {
    it('responds with html', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(200)
            .then(done())
    })
})

describe('avgshowtimes', function(){
    describe('#showAvg()', function (){
        it('averages showtimes in seconds', (done) => {
            let averages = showAvg([1,2,3,5])
            expect(averages).to.equal(2.75)
        })
    })
})


