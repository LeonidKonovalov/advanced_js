const goods = [
{ title: 'Shirt', price: 150 },
{ title: 'Socks', price: 50 },
{ title: 'Jacket', price: 350 },
{ title: 'Shoes', price: 250 },
];

const renderGoodsItem = (good, img='https://via.placeholder.com/200x150') => {
    return `<div class="goods-item">
                <img src="${img}" alt="img">
                <h3>${good.title}</h3>
                <p>${good.price}</p>
                <button class="buy-button">В корзину</button>
            </div>`
};
const renderGoodsList = list => {
    document.querySelector('.goods').innerHTML =
        (list.map(goods => renderGoodsItem(goods))).join('');
    console.log(goods)
}
renderGoodsList(goods);
