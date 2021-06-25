const Search=Vue.component('search', {
  props: ['goods'],
  template: `
    <div class="search_block">
      <input type="text" class="search_Line" v-model="searchLine">
      <button class="search_button" @click="filterGoods(searchLine)">Поиск</button>
    </div>
  `,
  data() {
    return { foundGoods: {} };

  },
  methods: {
    filterGoods(sline) {

      this.foundGoods = this.goods.filter((elem) => elem.product_name.toLowerCase().indexOf(sline.toLowerCase()) > -1);
      this.$emit("showFiltered", this.foundGoods);
    }
  }
});

export default {
  Search: Search
};