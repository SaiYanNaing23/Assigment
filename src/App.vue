<template>
  <div id="app">
    <el-container>
      <el-col :span="1">
        <NavVue/>
      </el-col>
      <el-col :span="3" class="employee-bg">
            <Employe/>
      </el-col>
      <el-col :span="20" class="table-bg">
        <DataTable/>
      </el-col>
    </el-container>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';
import Employe from './components/Employe.vue';
import NavVue from './components/Nav.vue';
export default {
  name: 'App',
  components:{
    Employe,NavVue,DataTable
  }
}
</script>

<style >
.employee-bg{
      background: #F5F5F5;
}
.table-bg{
  background: #F5F5F5;
  height: 100vh;
}
</style>
