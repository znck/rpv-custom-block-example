<template>
  <span>{{ $t('hello', { name }) }}</span>
</template>

<script>
export default {
  props: ['name']
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello {name}!"
  },
  "es": {
    "hello": "Hola {name}!"
  }
}
</i18n>