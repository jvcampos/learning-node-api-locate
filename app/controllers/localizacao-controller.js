var Sequelize = require('sequelize');
// var buscaCep = require('busca-cep');
var NodeGC = require('node-geocoder');
// var request = require('request');

exports.formFind = async (req, res, next) => {
    await res.render('buscarlocalizacao/find-locale')
}

exports.local = (req, res, next) => {
    var { endereco , cidade } = req.body;
    var endereco = endereco + cidade
    var options = {
        provider: 'google',

        httpAdapter: 'https',
        apiKey: 'AIzaSyDeLZ4e2fdBNPO9wjhN70vHJHjvSpBYMik',
        formatter: null
      };
      var geocoder = NodeGC(options);

      geocoder.geocode(endereco, (err, data) => {
        var localidades = [
              lat = JSON.stringify(data[0].latitude),
                long = JSON.stringify(data[0].longitude)
        ]
        res.render(
            'geolocate/geolocate',
            {local: localidades}
        )
      });
//    try {
//         const { cep } = req.body;
//         const find = await buscaCep(cep)

//         res.json({
//             success: true,
//             find
//         });

//   } catch (err) {
//         res.json({
//             success: false,
//             code: 'CEP_INVALIDED',
//             message: `${err.message}`,
//             statusCode: `${err.statuscode}`
//         });
//    };
};
