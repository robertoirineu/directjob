<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/views/Home.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'

export default {
  name: 'Conteudo',
  
  components: {
    Home,
    PublicarVaga
  },

  props:{
    conteudo:{
      type: String,
      required: true
    }
  },
  methods: {
    atualizarComponente() {
      this.titulo += '*'
    }
  },
}
</script>

<style module>
.teste {
  background-color: red
}
#teste-2 {
  background-color: yellow
}
</style>
