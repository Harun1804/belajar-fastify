module.exports = async function (fastify, opts) {
    fastify.get('/books', function (request, reply) {
        fastify.mysql.query('SELECT * FROM books', function (err, rows) {
            if (err) {
                reply.send(err)
            } else {
                reply.send(rows)
            }
        });
    });
    fastify.get('/books/:id', function (request, reply) {
        fastify.mysql.query('SELECT * FROM books WHERE id = ?', request.params.id, function (err, rows) {
            if (err) {
                reply.send(err)
            } else {
                reply.send(rows)
            }
        });
    })
    fastify.post('/books', function (request, reply) {
        fastify.mysql.query('INSERT INTO books SET ?', request.body, function (err, result) {
            if (err) {
                reply.send(err)
            } else {
                reply.send(result)
            }
        });
    });
    fastify.put('/books/:id', function (request, reply) {
        fastify.mysql.query('UPDATE books SET ? WHERE id = ?', [request.body, request.params.id], function (err, result) {
            if (err) {
                reply.send(err)
            } else {
                reply.send(result)
            }
        });
    });
    fastify.delete('/books/:id', function (request, reply) {
        fastify.mysql.query('DELETE FROM books WHERE id = ?', request.params.id, function (err, result) {
            if (err) {
                reply.send(err)
            } else {
                reply.send(result)
            }
        });
    });
}
