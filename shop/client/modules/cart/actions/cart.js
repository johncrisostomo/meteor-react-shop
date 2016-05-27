export default {
  removeFromCart({LocalCollections}, itemId) {
    LocalCollections.Cart.remove(itemId);
  },
  checkout({Meteor, LocalCollections}, name, email, address) {
    const cartContents = LocalCollections.Cart.find().fetch();

    var cartTotal = 0;

    const products = cartContents.map((product) => {
        cartTotal += cartTotal + (product.productPrice * product.productQty);
        return {
          name: product.productName,
          price: product.productPrice * product.productQty,
          qty: product.productQty,
          category: product.productCategory,
          image_url: product.productImage,
        };
    });

    Meteor.call('checkout', products, cartTotal, name, address, email);
    LocalCollections.Cart.remove({});
  },
}
