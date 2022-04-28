const getAll = (req, res) => {
    const response = {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: [
                {
                    "user": "Elon",
                    "message": "Hello"
                },
                {
                    "user": "Marianne",
                    "message": "Hi"
                }
            ]
        }
    };
    res.json(response);
};

module.exports.getAll = getAll;
