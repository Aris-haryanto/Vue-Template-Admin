<template>
	<div class="bg-gray">
		<div class="login_wrapper">
	        <div class="animate form login_form">
	          <section class="login_content">
	            <form>
	              <h1>Login Form</h1>
	              <div>
	                <input type="text" class="form-control" value="sheani2@gmail.com" placeholder="Username" v-model="email" required autofocus />
	              </div>
	              <div>
	                <input type="password" class="form-control" placeholder="Password" v-model="password" required />
	              </div>
	              <div>
	              	<label style="color: red">{{ invalid }}</label>
	              </div>
	              <div>
	                <button type="submit" @click="handleSubmit" class="btn btn-default submit">Log in</button>
	              </div>
	            </form>
	          </section>
	        </div>
	      </div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data(){
            return {
                email : "",
                password : "",
                invalid: ""
            }
        },
		methods: {
			handleSubmit(e) {
				e.preventDefault()
				let query = `query { login (
											    email: "${this.email}",
											    password: "${this.password}"
											  ){
											    id
											    username
											    privilege
											  }
									}`
                this.$http.post('url-api', 
					{
						query: query
					},
					{
					    headers: {
					      'Content-Type': 'application/json'
					   	}
					}
                )
                .then(response => {
                	if(response.data.data.login != null){
                		localStorage.setItem('user', JSON.stringify(response.data.data.login))
                		this.$router.push('/management/home')
                	}else{
                		this.invalid = "Username atau Email salah"
                	}
                })
                .catch(function (error) {
                    console.error(error.response);
                });
			}
		}
	}
</script>