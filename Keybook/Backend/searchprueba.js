const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Ruta que maneja el formulario de búsqueda
app.post("/search", (req, res) => {
  const searchTerm = req.body.searchTerm;

  // Nos aseguramos que searchTerm no sea vacío
  if (!searchTerm) {
    res.status(400).send("Debe proporcionar un término de búsqueda válido.");
  }

  // Buscamos usuarios por nombre o correo electrónico
  User.findAll({
    where: {
      [Sequelize.Op.or]: [
        { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
        { email: { [Sequelize.Op.like]: `%${searchTerm}%` } },
      ],
    },
  })
    .then((users) => {
      // Enviamos la lista de usuarios que coinciden con la búsqueda
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Ocurrió un error al buscar usuarios.");
    });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
