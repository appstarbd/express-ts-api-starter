export function JsonApiTest(request, baseUrl, schema, data, updatedData) {
    it('should be able to create on POST ', done => {
      request.post(baseUrl + '')
      .send(data)
      .expect(200, done)
    })

    it('should be able to retrieve on GET with an id', done => {
      request.get(baseUrl + '/1')
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({data: {}})
        done()
      })
    })

    it('should be able to update on PATCH', done => {
      request.patch(baseUrl + '')
      .set('Content-Type', 'application/json')
      .send(updatedData)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body).toMatchObject(updatedData)
        done()
      })
    })

    it('should be able to list on GET', done => {
      request.get(baseUrl + '')
      // .expect(200, done)
      .then(response => {
        expect(response.body).toHaveProperty('data')
        done()
      })
    })

    it('should be able to delete on DELETE', done => {
      request.delete(baseUrl + '/1')
      .expect(200, done)
    })

    it('should respond with 404 when an unknown ID is specified on retrieve', done => {
      request.get(baseUrl + '/9876')
      .expect(404, done)
    })

    it('should respond with 404 when an unknown ID is specified on update', done => {
      request.put(baseUrl + '')
      .set('Content-Type', 'application/json')
      .send(updatedData)
      .expect(404, done)
    })

    it('should respond with 404 when an unknown ID is specified on delete', done => {
      request.delete(baseUrl + '/9876')
      .expect(404, done)
    })
}