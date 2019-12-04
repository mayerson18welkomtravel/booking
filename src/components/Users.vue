<template>
  <div id="users">
    <label >Usuarios</label>
    <v-select
      v-model="userSelected"
      :options="users"
      label="email"
    >
    </v-select>
    <div v-if="userSelected !== ''">
      <div class="flex mt">
        <p><strong>Status: </strong> {{userSelected.verifiedEmail ? 'Verificado' : 'No verificado' }} </p>
        <p><strong>Nombre: </strong> {{ userSelected.firstName ? userSelected.firstName : 'No tiene nombre' }} </p>
        <p><strong>Telefono: </strong> {{ userSelected.phone ? userSelected.phone : 'No tiene telefono' }} </p>
      </div>
      <div class="flex mt">
        <b-button
          v-if="!userSelected.verifiedEmail"
          type="is-primary"
          @click="resendMailRegister('create_user')"
        >Reenviar correo de registro</b-button>
        <b-button
          type="is-warning"
        >Reenviar recuperación de contraseña</b-button>
        <b-button 
          type="is-info"
          @click="verifyEmail()"
          v-if="!userSelected.verifiedEmail"
        >Validar correo</b-button>
      </div>
    </div>
    <sweet-modal icon="success" ref="modalSuccess">
      {{msg}}
    </sweet-modal>
    <sweet-modal icon="error" ref="modalError">
      {{msg}}
    </sweet-modal>
  </div>
</template>

<script>
import { SEND_MAIL} from '../graphql/queries/mail'
import { VERIFY_EMAIL} from '../graphql/queries/users'
import { SweetModal } from 'sweet-modal-vue'

export default {
  name: 'Users',
  components: {
		SweetModal
  },
  props: ['users', 'setUser', 'apollo'],
  data () {
    return {
      userSelected: '',
      msg: ''
    }
  },
  methods: {
    async resendMailRegister(channel) {
      // Call to the graphql mutation
      const variables = {
        input: {
          userId: this.userSelected.id,
          channel
        }
      }
      try {
          
        const result = await this.$apollo.mutate({
          // Query
          mutation: SEND_MAIL,
          // Parameters
          variables
        })
        /*eslint no-console: ["error", { allow: ["log"] }] */
        console.log(result);
        this.msg = 'Correo enviado exitosamente :3';
        this.$refs.modalSuccess.open();
      } catch(err) {
        this.msg = 'Algo salio mal :c';
        this.$refs.modalError.open();
      }
    },
    async verifyEmail() {
      // Call to the graphql mutation
      if( !this.userSelected.id || this.userSelected.id === '') {
        this.msg = 'Algo salio mal :c';
        this.$refs.modalError.open();
        return;
      }
      const variables = {
        id: this.userSelected.id,
        verifiedEmail: "2019-10-09 10:09:12"
      }
      try {
        const result = await this.$apollo.mutate({
          mutation: VERIFY_EMAIL,
          variables
        })
        /*eslint no-console: ["error", { allow: ["log"] }] */
        this.apollo.queries.users2.refetch()
        console.log(result)
        console.log(this.apollo.queries.users2)
        this.msg = 'Usuario validado :3';
        this.$refs.modalSuccess.open();
        this.userSelected = '';
      } catch(err) {
        this.msg = 'Algo salio mal :c';
        this.$refs.modalError.open();
      }
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: space-between;
  }

  .mt {
    margin-top: 2em;
  }
</style>
