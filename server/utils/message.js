var generateMessage = function (from, text) {
    return {
        from,
        text
    };
};

module.exports = { generateMessage };