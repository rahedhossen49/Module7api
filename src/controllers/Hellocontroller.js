exports.Hello = (req, res) => {
    res.status(200).json({ status: "Success", data: "The first API" });
};
