// Defining the GET /user route to retrieve users based on input
app.get("/user", async function (req, res) {
  // Getting search information from the request
  const { searchKey } = req.query;

  console.log("instance"); // Printing a string to the console

  try {
    // Using a ternary operator to determine whether to use a SQL query with a WHERE that matches the search value or execute a standard SQL query to get all users
    const personas = searchKey
      ? await sequelize.query(
          `SELECT * FROM user WHERE name = :searchKey OR email = :searchKey`,
          {
            replacements: { searchKey },
            type: sequelize.QueryTypes.SELECT,
          }
        )
      : await sequelize.query("SELECT * FROM user", {
          type: sequelize.QueryTypes.SELECT,
        });

    console.log(personas); // Printing the results to the console
    res.send(personas); // Sending the results as a response to the client
  } catch (error) {
    console.error(error); // Printing the error to the console
    res.status(500).send("Internal server error");
    // Sending an error message as a response to the client with a 500 status code
  }
});

app.listen(3000, function () {
  console.log("Sistema funcionando en el puerto 3000");
});
