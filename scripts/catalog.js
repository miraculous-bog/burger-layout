// import { items } from "./items.js";
let items;
let jsonItems;
let currentType = "Бургери";
const refs = {
  net: document.querySelector(".catalog-net"),
  flitr: document.querySelector(".filter__buttons"),
  modal: document.querySelector(".modal-body"),
};

// const getJSON = (itemsArr) => {
//   console.log(JSON.stringify(itemsArr));
// }
// getJSON(items);

fetch('food.xml').then((response) => {
  response.text().then((xml) => {
    xmlContent = xml;
    // console.log(xmlContent);
    let x2js = new X2JS();
    items = x2js.xml_str2json(xmlContent).root.element;
    // let json2 = JSON.stringify(json.root.element)
    // console.log(JSON.stringify(json.root.element));
    // items =
    console.log(items);
    // console.log(JSON.parse(items));
    // JSON.parse(items);
    refs.flitr.addEventListener("click", hadleTodoListClick);
    // button.classList.add("filter__buttons-item--active");

    const getTypes = () => {
      const newAllTypes = [];

      for (let i = 0; i < items.length; i++) {
        let el = items[i].type;
        if (!newAllTypes.includes(el)) {
          newAllTypes.push(el);
        }
      }
      return newAllTypes;
    };

    const createFiltr = function () {
      return getTypes().map(
        (name) =>
          `<li><button class="filter__buttons-item" id="${name}">${name}</button></li>`
      );
    };

    const filtrMurcup = createFiltr().join("");

    refs.flitr.insertAdjacentHTML("afterbegin", filtrMurcup);

    const createCatalog = function () {
      console.log("call createCatalog");

      return items.map((item) => {
        const topMurcup = `<span class="catalog-net__item-img--top">top</span>`;
        const murcup = `<div class="catalog-net__item" data-id="${item.id}">
	<div class="catalog-net__item-img">
	${item.top ? topMurcup : null}
	  <img src="items-img/${item.img}.png" alt="food" />
	</div>
	<div class="catalog-net__item-info">
	  <h3 class="catalog-net__title">${item.name}</h3>
	  <p class="catalog-net__text">
	  ${item.descritpion}
	  </p>
	  <div class="catalog-net__item-buy">
		<p class="item-buy__price">${item.price} грн.</p>
		<button class="buy-button item-buy__buy">У кошик</button>
	  </div>
	</div>
  </div>`;
        if (item.type === currentType) return murcup;
      });
    };

    const variable = () => createCatalog().join("");

    refs.net.insertAdjacentHTML("afterbegin", variable());

    function hadleTodoListClick(e) {
      //   console.log(e.target);
      //   console.dir(e.target);
      if (e.target.nodeName != "BUTTON") {
        return;
      }
      const button = e.target;
      // console.log("button", button);
      const lastActive = document.querySelector(`#${currentType}`);
      // console.log("lastActive", lastActive);

      if (lastActive.classList.contains("filter__buttons-item--active"))
        lastActive.classList.remove("filter__buttons-item--active");
      button.classList.add("filter__buttons-item--active");
      // console.log("button", button);

      currentType = button.textContent;
      // console.log("currentType", currentType);

      refs.net.innerHTML = "";
      refs.net.insertAdjacentHTML("afterbegin", variable());
      // const li = button.closest('li.todo-list__item');
      // const todoId = li.dataset.id;
      // console.log(todoId);

      // todos.delete(Number(todoId));
      // // console.log(todos.items);
      // li.remove();
    }

    const findItem = (id) => items.find(item => item.id = id);

    const createBasket = (item) => {
      return `<div class="modal__body-item">
      <img class="modal__body-img" src="items-img/${item.img}.png" alt="">
      <h3 class="modal__body-title">${item.name}</h3>

      <p class="modal__body-price">${item.price} $</p>
      <button data-delete="${item.id}">delete</button>
    </div>`;
    }

    const handlerNet = (e) => {
      let item = e.target.parentNode.parentNode.parentNode.dataset.id;
      // const variableB = () => createBasket(findItem(item)).join("");
      refs.modal.insertAdjacentHTML("afterbegin", createBasket(findItem(item)));
      // console.log(createBasket(findItem(item)));
    }



    refs.net.addEventListener("click", handlerNet);

  });
});


