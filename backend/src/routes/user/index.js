module.exports = (router) => {

    router.route('/users')
        .get( (req, res, next) => {
    
    res.send('rota para listar usuarios');
    
    });
    
    router.route('/users/:id')
        .get((req, res, next) => {
        res.send('rota para listar um usuario por ID' + req.params)
    });
    
    router.route('/users/:id/travels')
        .post((req, res, next) => {
        res.send({
            ...req.params,
            ...req.body
        })
    });

    router.route('/users/:id')
        .delete((req, res, next) => {
        res.send({
            ...req.params,
            ...req.body
        })
    })

}