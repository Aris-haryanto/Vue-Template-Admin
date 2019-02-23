<template>
    <div class="right_col" role="main">
      <div class="">
        <div class="page-title">
          <div class="title_left">
            <h3>Home</h3>
          </div>

        <div class="row">
          
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">

              <div class="x_content">
                <div class="table-responsive">
                  <table class="table table-striped jambo_table bulk_action">
                    <thead>
                      <tr class="headings">
                        <th class="column-title">User ID </th>
                        <th class="column-title">ID </th>
                        <th class="column-title">Title </th>
                        <th class="column-title">Body </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(v, k) in list">
                        <td>{{ v.userId }}</td>
                        <td>{{ v.id }}</td>
                        <td>{{ v.title }}</td>
                        <td>{{ v.body }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
				
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  // state: {
  //   list: [],
  //   assemblyHTML: '',
  // },
  data () {
    return {
      list: {},
    }
  },
  mounted () {
    this.$http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          this.list = response.data
          // console.log(response.data) do not ever forget this shit .data hell
      })
  }
}
</script>