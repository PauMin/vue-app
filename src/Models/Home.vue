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
  b-container#home
    h1 {{ $t("vue_project") }}
      icon(name='smile-o')
</template>

<script type="babel">
export default {
  name: 'home',
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  created: function() {
    this.$cookie.set('test', 'Hello world!', 1);
  }
}
</script>

<style lang="scss" scoped>
  #home{
    h1{
      color: #232322;
      text-align: center;
    }
  }
</style>
