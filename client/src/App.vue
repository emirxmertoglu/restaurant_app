<template>
  <div id="app">
    <div v-if="!login" class="login">
      <form @submit.prevent="selectedTable()">
        <b>Welcome!</b> Select a table: 
        <select v-model="table">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.id">
            {{ option.text }}
          </option>
        </select>
        <input type="submit" value="Submit">
      </form>
    </div>

    <div v-else>
      <div class="imageGallery">
        <vue-select-image
          :dataImages="products"
          @onselectimage="orderItem()"
          :useLabel=true
          h="200px"
          >
        </vue-select-image>
      </div>

      <div class="busyTables">
        Busy tables
        <ul>
          <li v-bind:key="table.id" v-for="table in tables">{{ table.table }}</li>
        </ul>
      </div>

      <div class="acceptedOrders">
          <ul>
            <li v-bind:key="order" v-for="order in orders" v-html="order"></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      login: false,
      table: "",
      tables: [],
      orders: [],
      options: [
        { text: 'Table 1', value: 'Table 1' },
        { text: 'Table 2', value: 'Table 2' },
        { text: 'Table 3', value: 'Table 3' },
        { text: 'Table 4', value: 'Table 4' }
      ],
      products: [
          {
            "src": "https://i.hizliresim.com/KwMUAa.jpg",
            "name": "Yemek 1",
            "alt": "Yemek 1 Açıklaması",
            "slug": "yemek-1"
          },
          {
            "src": "https://i.hizliresim.com/FnJyCY.jpg",
            "name": "Yemek 2",
            "alt": "Yemek 2 Açıklaması",
            "slug": "yemek-2"
          },
          {
            "src": "https://i.hizliresim.com/AqQ24j.jpg",
            "name": "Yemek 3",
            "alt": "Yemek 3 Açıklaması",
            "slug": "yemek-3"
          },
          {
            "src": "https://i.hizliresim.com/Ps7ID3.jpg",
            "name": "Yemek 4",
            "alt": "Yemek 4 Açıklaması",
            "slug": "yemek-4"
          },
          {
            "src": "https://i.hizliresim.com/pjErCY.jpg",
            "name": "Yemek 5",
            "alt": "Yemek 5 Açıklaması",
            "slug": "yemek-5"
          }
        ],
    }
  },
  sockets: {
    tables(data) {
      this.tables = data;
    },
    orders(data) {
      this.orders = data;
    }
  },
  methods: {
    selectedTable() {
      this.login = true;
      this.$socket.emit('new_table', this.table);
    },
    orderItem() {
      this.$socket.emit('new_order', {
        table: this.table,
        order: '... food'
      })
    }
  },

}
</script>

<style scoped>
  .login{
    font-size: 20px;
    text-align: center;
  }

  .busyTables{
    font-size: 20px;
    text-align: center;
    list-style-type: none;
  }

  .imageGallery{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .acceptedOrders{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
</style>