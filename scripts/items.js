const items = [
  {
    id: 1,
    type: "Бургери",
    name: "чісбургер",
    descritpion:
      "Lorem чісбургер ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 100,
    top: true,
    img: "burger1",
  },
  {
    id: 2,
    type: "Бургери",
    name: "дабл рояль",
    descritpion:
      "Lorem дабл рояль ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla sapiente. Necessitatibus, nulla",
    price: 150,
    top: true,
    img: "burger2",
  },
  {
    id: 3,
    type: "Бургери",
    name: "бургер",
    descritpion:
      "Lorem бургер ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime",
    price: 70,
    top: true,
    img: "burger3",
  },
  {
    id: 4,
    type: "Бургери",
    name: "біг тейсті",
    descritpion:
      "Lorem біг тейсті  amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 130,
    top: false,
    img: "burger4",
  },
  {
    id: 5,
    type: "Бургери",
    name: "веган рояль",
    descritpion:
      "Lorem вега роляь ipsum dolor sit amet consectetur adipisicingelitVo       sdfsdgsdfluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 170,
    top: false,
    img: "burger5",
  },

  {
    id: 10,
    type: "Напої",
    name: "фанта",
    descritpion:
      "фанта sdfsdgsdfluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 40,
    top: true,
    img: "drink1",
  },
  {
    id: 11,
    type: "Напої",
    name: "спрайт",
    descritpion:
      "спрайт sdfsdgsdfluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 40,
    top: false,
    img: "drink2",
  },
  {
    id: 12,
    type: "Напої",
    name: "полуницевий коктейль",
    descritpion:
      "полуницевий коктейль      sdfsdgsdfluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 60,
    top: false,
    img: "drink3",
  },
  {
    id: 13,
    type: "Напої",
    name: "пепсі",
    descritpion:
      "пепсі     sdfsdgsdfluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 40,
    top: true,
    img: "drink4",
  },
  {
    id: 14,
    type: "Стейки",
    name: "стейк",
    descritpion:
      "стейк ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 200,
    top: false,
    img: "meat1",
  },
  {
    id: 15,
    type: "Стейки",
    name: "біф штекс",
    descritpion:
      "Lorem біф штекс ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 210,
    top: true,
    img: "meat2",
  },
  {
    id: 16,
    type: "Стейки",
    name: "свинний флоу",
    descritpion:
      "Lorem свинний флоу ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 240,
    top: false,
    img: "meat3",
  },
  {
    id: 17,
    type: "Стейки",
    name: "стейк",
    descritpion:
      "Lorem стейк ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 130,
    top: true,
    img: "meat4",
  },
  {
    id: 18,
    type: "Соуси",
    name: "кетчуп",
    descritpion:
      "Lorem кетчуп ipsum dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 15,
    top: true,
    img: "sauce1",
  },
  {
    id: 19,
    type: "Соуси",
    name: "соус сметанний",
    descritpion:
      "Lorem соус сметанний dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 25,
    top: true,
    img: "sauce2",
  },
  {
    id: 20,
    type: "Соуси",
    name: "соус ніжний",
    descritpion:
      "Lorem стейк соус ніжний sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 19,
    top: false,
    img: "sauce3",
  },
  {
    id: 21,
    type: "Соуси",
    name: "соус часниковий",
    descritpion:
      "Lorem соус часниковий dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 20,
    top: false,
    img: "sauce4",
  },
  {
    id: 22,
    type: "Соуси",
    name: "соус карі",
    descritpion:
      "Lorem соус карі dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 25,
    top: true,
    img: "sauce5",
  },
  {
    id: 23,
    type: "Соуси",
    name: "соус сирний",
    descritpion:
      "Lorem соус сирний dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 20,
    top: true,
    img: "sauce6",
  },
  {
    id: 24,
    type: "Картопля",
    name: "фрі з нагетсами",
    descritpion:
      "Lorem фрі з нагетсами dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 40,
    top: true,
    img: "potatto1",
  },
  {
    id: 25,
    type: "Картопля",
    name: "лонг фрі",
    descritpion:
      "Lorem соус лонг фрі consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 30,
    top: false,
    img: "potatto2",
  },
  {
    id: 26,
    type: "Картопля",
    name: "фрі сьоркл",
    descritpion:
      "Lorem фрі сьоркл сирний dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 25,
    top: false,
    img: "potatto3",
  },
  {
    id: 28,
    type: "Картопля",
    name: "картопля фрі",
    descritpion:
      "Lorem артопля фрі dolor sit amet consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla",
    price: 20,
    top: true,
    img: "potatto4",
  },
  {
    id: 33,
    type: "Набір",
    name: "біг мак",
    descritpion:
      "Lorem біг мак consectetur adipisicingelitVoluptatetemporibusrem tempore maxime sapiente. Necessitatibus, nulla tempore maxime sapiente. ",
    price: 210,
    top: true,
    img: "set1",
  },
];
export { items };
