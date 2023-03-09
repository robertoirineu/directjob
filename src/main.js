import { createApp } from 'vue'
import App from './App.vue'

//Importando o pacote mitt
import mitt from 'mitt'

//Instanciando o mitt
const emitter = mitt()

//Instancia do Vue com base no componente App
const app = createApp(App)
//createApp(App).mount('#app')


//Configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//Associar a instância do Vue com o elemento do html de id app
app.mount('#app')