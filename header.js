const Header=Vue.component('vue-header', {
  props: ['goods', 'basketGoods'],
  template: `
    <header class="header_block">
      <div class="header_wrapper">
        <search :goods="goods" @showFiltered="showFiltered"></search>
        <button class="basket_button" type="button" id="basket_button" @click="changeVisibility">Корзина</button> 
        </div>
   </header> 
`,
  data() {
    return { goods: [] };
  },
  methods: {
    changeVisibility() {
      this.$emit("vBasket", this.goods);
    },
    showFiltered(fGoods) {
      this.$emit("showFiltered", fGoods);

    }
  }
});

export default {
  Header: Header
};