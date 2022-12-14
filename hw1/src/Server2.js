const users = [ ... ];
/user/235
/user/12
/user/324234

app.get('/user/:id', function (req, res) {
  res.send(JSON.stringify(users.find((user) => user.id == req.params.id));
});