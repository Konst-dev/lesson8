const gItem=Vue.component('vue-goods-item', {
  props: ['good'],
  template: `
    <div class="goods-item">
       <h3 class="card_title">{{good.product_name}}</h3>
       <p class="card_price">{{good.price}}</p>
       <button class="buy-button" @click="addToBasket">Купить</button>
    </div>
  `,
  methods: {
    addToBasket() {
      this.$emit("add", this.good);
    }
  }
});

export default {
  gItem: gItem
};
