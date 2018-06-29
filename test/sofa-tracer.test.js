'use strict';

const mock = require('egg-mock');

describe('test/sofa-tracer.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sofa-tracer-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sofaTracer')
      .expect(200);
  });
});
