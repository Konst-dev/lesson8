const gList=Vue.component('vue-goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list" id="goods_list">
      <vue-goods-item v-for="good in goods" :good="good" @add="addToBasket"></vue-goods-item>
    </div>
  `,
  methods: {
    addToBasket(good) {
      this.$emit("add", good);
    }
  }
});

export default {
  gList: gList
};