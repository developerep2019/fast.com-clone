const FastSpeedTest = require("fast-speedtest-api");

module.exports.getInternetSpeed = async (req, res, next) => {
  try {
    let speedTest = new FastSpeedTest({
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
      verbose: false,
      timeout: 5000,
      https: true,
      urlCount: 5,
      bufferSize: 8,
      unit: FastSpeedTest.UNITS.Mbps,
    });
    speedTest
      .getSpeed()
      .then((speed) => {
        res.status(200).send({ speed: speed.toFixed(1) });
      })
      .catch((err) => res.status(400).send(ex.message));
  } catch (err) {
    res.status(400).send(err.message);
  }
};
