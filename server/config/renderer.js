module.exports = {
	handleResponse: ({ res, statusCode = 200, msg = "Success", data = {}, result = 1 }) => {
		res.status(statusCode).send({ result, msg, data });
	},
	handleError: ({
		res,
		statusCode = 500,
		err_msg = "Something Went Wrong",
		data = {},
		result = 0,
	}) => {
		res.status(statusCode).send({
			result,
			err_msg,
			data,
		});
	},

	handleHeaderResponse: ({ res, headerName, headerData, statusCode = 200, data = {} }) => {
		res.setHeader("Access-Control-Expose-Headers", headerName);
		res.header(headerName, headerData).status(statusCode).send(data);
	},

	unAuthorized: res => {
		res.status(401).send({
			msg: "Unauthorized! you're not authorized for this route!",
		});
	},
};