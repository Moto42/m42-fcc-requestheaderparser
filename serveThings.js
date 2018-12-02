
function serveThings(req,res){
  const send = req.headers;
  
  
  res.send({
    "ipaddress": req.headers["x-forwarded-for"],
    "language" : req.headers["accept-language"],
    "software" : req.headers["user-agent"],
  })
}

module.exports = serveThings;