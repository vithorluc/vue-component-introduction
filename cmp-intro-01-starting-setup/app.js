const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0124 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  computed: {},
  methods: {
    toogleDetails() {
      return (this.detailAreVisible = !this.detailAreVisible);
    },
  },
});
//  components are apps the belogs to another app "mini apps"
app.component("friend-contact", {
  template: `<li :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toogleDetails">
        {{ detailAreVisible ? 'Hide' : 'Show'}}
    </button>
    <ul v-if="detailAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
</li>`,
  data() {
    return {
      detailAreVisible: true,
      friend: {
        id: "julie",
        name: "Julie Jones",
        phone: "09876 543 221",
        email: "julie@localhost.com",
      },
    };
  },
  methods: {
    toogleDetails() {
      return (this.detailAreVisible = !this.detailAreVisible);
    },
  },
});

app.mount("#app");
