export default {
  data() {
    return {
      redirect: undefined,
      otherQuery: {},
      loginForm: {
        username: 'admin',
        password: '123456'
      }

    }
  },
  mounted() {},
  created() {},
  methods: {
    loginClick() {
      this.$store.dispatch('user/login', this.loginForm).then(() => {
        this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      }).catch(() => {
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  }
}
