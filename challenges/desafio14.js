db.produtos.find({
  ingredientes: {
    $all: ["picles"],
  },
}, {
  nome: true,
  valoresNutricionais: {
    $slice: 3,
  },
  ingredientes: true,
  _id: false,
});