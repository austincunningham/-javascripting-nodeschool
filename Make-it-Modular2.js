
module.exports = function ls(path, ext, callback) 
{
	var fs = require('fs');
    ext = "."+ ext;
	fs.readdir(path, function(err, list)
	{
		if(err) return callback(err);
		var newlist = [];
		for (var j=1; j < list.length; j++) 
		{
	        if (list[j].match(ext)) 
	        {
	        	newlist.push(list[j]);
	        	
	        }

    	}	
        return callback(null,newlist);	
	});
}

