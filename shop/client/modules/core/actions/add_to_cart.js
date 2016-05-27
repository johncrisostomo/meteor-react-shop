export default {
  "addToCart"({LocalCollections}, id, name, qty, price, category, img) {
    LocalCollections.Cart.update({_id: id},
      { $set: {
        productId: id,
        productName: name,
        productPrice: price,
        productCategory: category,
        productImage: img,
      }, $inc: { productQty: qty, productTotal: price*qty } }, {upsert: true}
  );
  },
}
