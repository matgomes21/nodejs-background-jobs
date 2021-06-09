export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = { name, email, password };

    // TODO send email
    return res.json(user);
  },
};
