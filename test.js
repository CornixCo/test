function myFunctions(){
  function mainvalidation() {

    var mysql = require('mysql');

    var cons = mysql.createConnection({
      multipleStatements: true,
      host: "localhost",
      user: "test",
      password: "password",
      database: "test"
    });
  let higher_scope_results;
    cons.connect(function(err) {
      if (err) throw err;
      var sqls = "(SELECT post_title, post_type FROM wp_posts WHERE post_type = 'draws' ORDER BY `wp_posts`)";


      cons.query(sqls, function (err, results) {
        if (err) throw err;
        higher_scope_results = results;
        return higher_scope_results;
        
console.log(higher_scope_results);


      });

    });
    console.log(higher_scope_results);
  };
mainvalidation();
console.log(higher_scope_results);
}


module.exports = {
  myFunctions
}
