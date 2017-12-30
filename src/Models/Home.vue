<i18n>
{
  "en": {
    "vue_project": "Vue project"
  },
  "ru": {
    "vue_project": "Проект на Vue"
  }
}
</i18n>

<template lang="pug">
  v-ons-page#home
    v-ons-toolbar
      .center {{ title }}
    v-ons-card(v-if="!loggedIn")
      .content
        form
          v-ons-list(modifier="noborder")
            v-ons-list-item
              v-ons-input(type="email" v-model="form.email" input-id="email" placeholder="Email" float)
          v-ons-list(modifier="noborder")
            v-ons-list-item
              v-ons-input(type="password" v-model="form.password" input-id="password" placeholder="Password" float)
          v-ons-list(modifier="noborder")
            v-ons-list-item
              v-ons-button(modifier="large" @click="submitForm") Submit
</template>

<script type="babel">
export default {
  name: 'home',
  data() {
    let instance = this.axios.create({
      baseURL: 'http://127.0.0.1:8000/api/',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return {
      title: 'Movieny',
      form: {
        email: '',
        password: ''
      },
      instance: instance,
      storage: '',
      loggedIn: false,
      sessionKey: ''
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val;
    }
  },
  created() {
    // this.$cookie.set('test', 'Hello world!', 1);
    this.storage = window.localStorage;
    this.sessionKey = this.storage.getItem('sessionKey');
    this.loggedIn = this.checkLoggedIn();
    if(this.loggedIn) {
      this.instance = this.axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this.sessionKey
        }
      });
    }
  },
  methods: {
    submitForm() {
      let data = this.form;
      this.instance.post('/login', data)
      .then((response) => {
        console.log(response);
      })
    },
    checkLoggedIn() {
      this.instance.get('/user')
      .then((response) => {
        return true;
      })
      .catch((error) => {
        return false;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  #home{
  }
</style>
