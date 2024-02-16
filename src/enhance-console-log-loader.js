module.exports = function (content, map, meta) {
  return content.replace("log", "info");
};
