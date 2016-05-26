export default {
  "addToCart"({LocalCollections}, id, name, price, img) {
    LocalCollections.Cart.update({_id: id},
      { $set: {
        productId: id,
        productName: name,
        productPrice: price,
        productImage: img,
      }, $inc: { productQty: 1, productTotal: price } }, {upsert: true}
  );
  },
}
