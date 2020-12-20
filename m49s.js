const m49sRelease ="0.1.2 build 20.12.20";
//npm install express express-ip cors mysql helmet --save
const express = require('express');
const expressip = require('express-ip');
const cors = require('cors');
const mysql = require('mysql');
const helmet = require('helmet');
const m49sconfig = require('./m49sConfig');
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.disable('x-powered-by');
app.use(expressip().getIpInfoMiddleware);
const info="M49s SQL API rel. "+m49sRelease+" id:"+Date.now();
console.log(info);

app.get('/m49s/info',(req, res)=>{
  res.status(200).send(info);
});
app.use('/', express.static('dist/m49s')); //ng build --prod
app.post('/m49s', function(request, response){
 	const bodyJson = request.body;
  console.log(bodyJson, bodyJson['sql']);// collega l db ed esegue la query sql

  const con = mysql.createConnection({
    host     : m49sconfig.dbhost,
    user     : m49sconfig.dbusername,
    password : m49sconfig.dbpassword,
    database : m49sconfig.db,
    connectionLimit : m49sconfig.connectionLimit
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query( bodyJson['sql'], function (err, result, fields) {
      if (err) throw err;
      //console.log(result); //abilita in debug
      response.status(200).json(result);	 // echo the result back
    });
  });



  //
});
app.listen(m49sconfig.port, function () {
    console.log('Start M49s http://localhost:'+m49sconfig.port+'/m49s')
  });
/*
app.get('/m49s', (req, res) => {
    const con = mysql.createConnection({
            host     : m49sconfig.dbhost,
            user     : m49sconfig.dbusername,
            password : m49sconfig.dbpassword,
            database : m49sconfig.db,
            connectionLimit : m49sconfig.connectionLimit
      });

      con.connect(function(err) {
          const m49sEseguiQuery=ListaQuery(req.query['id']);
          console.log(req.ipInfo['ip'],req.query,m49sEseguiQuery);

        if (err) {
            console.log(err);
            res.status(501).send(err);
        } else
        {
            con.query(m49sEseguiQuery, function (err, result, fields) {
                if (err) {
                    console.log(err);
                    res.status(501).send('sql error');

            } else {

                res.status(200).json(result);
            }
        });}
    });
})


function ListaQuery(id) {
    switch (parseInt(id)) {
        case 0:
            return 'SELECT * FROM SnmpComunity';
            break;

        default:
            console.log(id);
            break;
    }

}
*/
