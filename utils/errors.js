class ValidationError extends Error {
};

function handleError(err, req, res, next) {
    console.log(err)

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error.hbs', {
            message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka minut'
        })

}

module.exports = {
    handleError,
    ValidationError
}