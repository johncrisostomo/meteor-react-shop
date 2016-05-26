export default {
  removeFromCart({LocalCollections}, itemId) {
    LocalCollections.Cart.remove(itemId);
  },
}
