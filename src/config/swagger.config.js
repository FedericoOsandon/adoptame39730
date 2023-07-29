const  {dirname} = require('path') 
exports.swaggerOpotion = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de adoptame',
            description: 'ESta es la descripción de la documentación'
        }
    },
    apis: [`${dirname(__dirname)}/docs/**/*.yaml`]
}