const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

import module from './module1.js';
const postResponse = module.postResponse;

import bskt from './basket.js';
const Basket = bskt.Basket;

import srch from './search.js';
const Search = srch.Search;

import hdr from './header.js';
const Header = hdr.Header;

import gItm from './gooditem.js';
const gItem = gItm.gItem;

import gLst from './goodlist.js';
const gList = gLst.gList;

import vmn from './vuemain.js';
const vueMain = vmn.vueMain;


var stat = {
  action: "",
  product_name: "",
  time: 0
}





const e_shop = new Vue({
  el: "#page",
  template: `
  <div>
    <vue-header :goods="goods" :basketGoods="basketGoods" @vBasket="viewBasket" @showFiltered="showFiltered" ></vue-header>
    <vue-main :goods="foundGoods" @add="addToBasket"></vue-main>
    <basket :basketGoods="basketGoods" :visibility="isVisibleCard" @del="deleteFromBasket"></basket>
  </div>
  `,
  data: {
    isVisibleCard: false,
    goods: [],
    searchLine: '',
    foundGoods: [],
    basketGoods: []
  },
  methods: {
    viewBasket() {
      this.isVisibleCard = !this.isVisibleCard;
    },
    showFiltered(fG) {
      this.foundGoods = fG;

    },
    addToBasket(item) {
      this.basketGoods.push(item);
      postResponse('/addToCart', item);
      stat.action = "Add";
      stat.product_name = item.product_name;
      var now = new Date();
      stat.time = now;
      postResponse('/addAction', stat);
    },


    deleteFromBasket(index) {
      stat.action = "Delete";
      stat.product_name = this.basketGoods[index].product_name;
      var now = new Date();
      stat.time = now;
      postResponse('/addAction', stat);

      this.basketGoods.splice(index, 1);
      postResponse('/deleteFromCart', this.basketGoods);

    },

    basketSum() {
      var sum = 0;
      for (var i = 0; i < this.basketGoods.length; i++) sum += this.basketGoods.price;

      return sum;
    },

    numberOfGoods() {
      return this.basketGoods.length;
    }

  },
  mounted: async function fetchGoods() {
    return await fetch(`/catalog`)
      .then(resp => resp.json())
      .then(data => {
        this.goods = data;
        this.foundGoods = data;
      });
  },


});

