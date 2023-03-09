<template>
  <div>
    <vagas-favoritas />
    <topo-padrao @navegar="pagina = $event"/>
    <alerta v-if="exibirAlerta" :tipo="alerta.tipoAlerta" >
      <template  v-slot:titulo>
          <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{alerta.mensagem}}</p>
    </alerta>
    <conteudo :conteudo="pagina" />
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import Alerta from '@/components/comuns/Alerta.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    pagina: 'Home',
    exibirAlerta: false,
    alerta:{titulo:'', mensagem:'', tipoAlerta: ''}
  }),
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas
  },
  mounted(){
    this.emitter.on('alerta', (a)=>{
      this.exibirAlerta = true;
      this.alerta = a;
      setTimeout(()=>this.exibirAlerta = false, 4000);
    })
  }
}
</script>

<style scoped></style>
