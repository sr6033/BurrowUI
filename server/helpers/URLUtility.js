var request = require('request');

module.exports = URLUtility;
function URLUtility(baseUrl) {

  this.BASE_URL = baseUrl;

}

URLUtility.prototype.GetBase =  function (result) {

  request(this.BASE_URL, function(error, response, body) {
    result(error, body)
  })

};

URLUtility.prototype.Get = function (endpoint, result) {

  request((this.BASE_URL + endpoint), function(error, response, body) {
    result(error, body)
  })

};
