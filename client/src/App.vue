<template>
  <div id="app">
    <vue-select-image
      :dataImages="products"
      @onselectimage="onSelectImage"
      :useLabel=true
      h="200px"
    ></vue-select-image>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      products: [
          {
            "src": "https://i.hizliresim.com/KwMUAa.jpg",
            "alt": "Yemek 1",
            "description": "Yemek 1 Açıklaması",
            "slug": "yemek-1"
          },
          {
            "src": "https://i.hizliresim.com/FnJyCY.jpg",
            "alt": "Yemek 2",
            "description": "Yemek 2 Açıklaması",
            "slug": "yemek-2"
          },
          {
            "src": "https://i.hizliresim.com/AqQ24j.jpg",
            "alt": "Yemek 3",
            "description": "Yemek 3 Açıklaması",
            "slug": "yemek-3"
          },
          {
            "src": "https://i.hizliresim.com/Ps7ID3.jpg",
            "alt": "Yemek 4",
            "description": "Yemek 4 Açıklaması",
            "slug": "yemek-4"
          },
          {
            "src": "https://i.hizliresim.com/pjErCY.jpg",
            "alt": "Yemek 5",
            "description": "Yemek 5 Açıklaması",
            "slug": "yemek-5"
          }
        ],
    }
  }
}
</script>