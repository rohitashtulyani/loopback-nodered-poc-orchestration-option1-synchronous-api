module.exports = function(Iam) {
 
 Iam.observe('before save', function (ctx, callback) {
		console.log("Inside before iam save observer :::::::: ");
		if(ctx.instance.iamNumber === "67890"){
			return callback(new Error(" Iam Number is not valid."));
		} else {
			return callback();
		}
	
	});

};
