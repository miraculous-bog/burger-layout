const refs = {
    net: document.querySelector(".catalog-net"),
};

const handlerNet = (e) => {
    let item = e.target.parentNode.parentNode.parentNode.dataset.id;
    console.log(item);
}

refs.net.addEventListener("click", handlerNet);