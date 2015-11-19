var database = require("./database.js")

var sampleCollection = database.get("Sample")

var  sample = {
    getByName : function(req, res){
		var name = req.params.name	
		var regex = new RegExp('^' + name, 'gi')
		sampleCollection.find({"name":regex}, function(err, data){
			res.json(data)
		})
	},
    getAll : function(req,res){
		sampleCollection.find({}, function(err, data){
			res.json(data)
		})
	},
    getExactName : function(req, res){
		var name = req.params.name
        var regex = new RegExp(["^", name, "$"].join(""), "i");
		sampleCollection.find({"name":regex}, function(err, data){
			res.json(data)
		})
	},
    addSampleItem : function(req, res){    
        var newItem = req.body   
        sampleCollection.insert(newItem, function(err, data){ 
            if(data != undefined){
                console.log("success!")
            } else {
                console.log("there was an error")
            }
        })
    },
    updateSampleItem : function(req, res){
    	var updateItem = req.body
    	console.log(updateItem)
    	sampleCollection.update({"_id":updateItem._id}, updateItem, function(err, data){
    		console.log(updateItem)
    		res.json(updateItem)
    	})
    }
}

module.exports = sample