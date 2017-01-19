module.exports = function(Customer) {
	console.log("Inside Customer :::::::: ");

	Customer.observe('before save', function (ctx, callback) {
		console.log("Inside customer before save observer :::::::: ");
		if(ctx.instance.firstName === "Test"){
			var error = new Error("First Name is reserve.");
			console.log(";error is :::", error);
			error.component = "Customer";
			return callback(error);
		} else {
			return callback();
		}
	});

	Customer.createCustomer = function(payload, callback){
		console.error("payload is ::: ", payload);
        return Customer.create(payload, callback);
    };

    Customer.remoteMethod('createCustomer', {
        isStatic: true,
        consumes: ['application/json'],
        produces: ['application/json'],
        accepts: [{
            arg: 'Customer',
            type: 'Customer',
            description: 'New Customer to add.',
            required: true,
            http: {
                source: 'body'
            }
        }],
        returns: [{
            description: 'New customer Creation Successful Response',
            type: 'Status',
            arg: 'data',
            root: true
        }],
        http: {
            verb: 'post',
            path: '/'
        },
        description: 'Creates a customer.'
    });
};
