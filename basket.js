const Basket=Vue.component('basket', {
  props: ['basketGoods', 'visibility'],
  template: `
    <div class="basket_block" v-if="visibility">
      <div v-if="basketGoods.length>0">
        <div class="basket_items" v-for="(item, index) in basketGoods">
          <div class="b_item">
              <h3>{{item.product_name}}</h3>
              <p>{{item.price}}</p>
              <button class="delete_button" @click="deleteFromBasket(index)">Удалить</button>
          </div>
        </div>
      </div>
    <div v-else>Корзина пуста</div>

  `,
  methods: {
    deleteFromBasket(index) {
      this.$emit("del", index);
    }
  }


});

export default {
  Basket: Basket
};