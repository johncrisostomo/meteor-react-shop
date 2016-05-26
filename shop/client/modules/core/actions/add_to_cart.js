export default {
  "addToCart"({LocalCollections}, id, name, price, img) {
    LocalCollections.Cart.insert({
      productId: id,
      productName: name,
      productPrice: price,
      productImage: img,
    });

    const samp = LocalCollections.Cart.find().fetch();
    console.log(samp);
  },
}
