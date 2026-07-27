import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Ruta por defecto activa" });
});

//funcion de sumar dos numeros
app.post("/sumar", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 + num2;
  res.json({ resultado });
});

export default app;
