const vueMain=Vue.component('vue-main', {
  props: ['goods'],
  template: `<vue-goods-list :goods="goods" @add="addToBasket"></vue-goods-list>`,
  data() {
    return {
      goods: []
    }
  },
  methods: {
    addToBasket(good) {
      this.$emit("add", good);
    }
  }
});

export default {
  vueMain: vueMain
};

