export default {
  "addToCart"({LocalCollections}, id, name, qty, price, img) {
    LocalCollections.Cart.update({_id: id},
      { $set: {
        productId: id,
        productName: name,
        productPrice: price,
        productImage: img,
      }, $inc: { productQty: qty, productTotal: price*qty } }, {upsert: true}
  );
  },
}
