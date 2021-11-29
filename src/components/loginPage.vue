<template>
  <div class="login-container">
    <div class="login-box">
      <form @submit.prevent="onSubmit">
        <div class="row form-row">
          <div class="col-3">
            <label for="username">Username</label>
          </div>
          <div class="col-9">
            <input
              id="username"
              name="username"
              type="text"
              v-model="form.username"
            >
          </div>
        </div>
        <div class="row form-row">
          <div class="col-3">
            <label for="password">Password</label>
          </div>
          <div class="col-9">
            <input
              id="password"
              name="password"
              type="password"
              v-model="form.password"
            >
          </div>
        </div>
        <div
          v-if="formError != null"
          class="row form-row text-danger"
        >
          {{ formError }}
        </div>
        <div class="row form-row">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      formError: null
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.authenticateUser(this.form)
        this.$router.push('/')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style scoped>
.login-container {
   padding: 3rem;
   display: flex;
   justify-content: center;
}

.login-box {
   flex: 0 0 400px;
   padding: 16px;
   background-color: #fff;
   border-radius: 10px;
   height: 150px;
}

input {
   width: 100%;
}
</style>
