<template>
  <div  class="table-card">
    <!-- table-nav -->
   <el-row type="flex" justify="space-between" class="table-nav">
    <el-row class="left-nav-table">
        <i class="el-icon-back"></i>
        <h4>Employee Directory</h4>
        <img src="@/assets/general.svg" alt="general">
        <i class="el-icon-search"></i>
        <i class="el-icon-edit" v-if="edit"></i>
    </el-row>
    <div class="right-nav-table">
        <el-button class="employe-btn">Create Employee</el-button>
        <i class="el-icon-more verticle"></i>
    </div>
   </el-row>
   <!-- table -->
   <el-table
    :data="tableData"
    style="width: 100%"
    stripe
    :cell-style="{padding: '0', height: '55px'}"
    @selection-change="handleSelectionChange"
    class="table-reasponsive"
    max-height="780"
    >
    <el-table-column
      type="selection"
      width="50"
      class="table-head"
      >
      <!-- <div class-name="checkbox-bg"><el-checkbox></el-checkbox></div> -->
      <template slot-scope="scope"><div :class="{'checkbox-bg' : scope.row.isSelected}"><el-checkbox v-model="scope.row.isSelected"></el-checkbox></div></template> 
    </el-table-column>
    <el-table-column
      fixed
      prop="name"
      label="Employees"
      width="200"
      height="200"
      >
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">
      <img src="@/assets/employee.svg" alt="employee-image" class="employee-image"> <span class="name-center">{{ scope.row.name }}</span></div></template> 
    </el-table-column>

    <el-table-column
      prop="location"
      label="Location"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.location }}</div></template> 
    </el-table-column>

    <el-table-column
      prop="email"
      label="Email"
      width="200">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.email }}</div></template>
    </el-table-column>

    <el-table-column
      prop="phone"
      label="Phone"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.phone }}</div></template>
    </el-table-column>
    <el-table-column
      prop="department"
      label="Department"
      width="300"
      show-overflow-tooltip
      >
  <template slot-scope="scope">
    <div :class="{'selected-row': scope.row.isSelected}" @dblclick="toggleEdit(scope.row)">
      <input type="text" v-model="scope.row.department" v-if="scope.row.toggle" @keyup.enter="edittoggle(scope.row)">
      <span v-else>{{ scope.row.department }}</span>
    </div>
  </template>
    </el-table-column>

    <el-table-column
      prop="employeeCode"
      label="Employee Code"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.employeeCode }}</div></template>
    </el-table-column>
        <el-table-column
      prop="tag"
      label="Custom tags"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.tag }}</div></template>
    </el-table-column>
        <el-table-column
      prop="position"
      label="Positions"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.position }}</div></template>
    </el-table-column>
        <el-table-column
      prop="NRC"
      label="NRC"
      width="200">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.NRC }}</div></template>
    </el-table-column>
        <el-table-column
      prop="manager"
      label="Manager"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.manager }}</div></template>
    </el-table-column>
        <el-table-column
      prop="managerPosition"
      label="Manager Position"
      width="180">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.managerPosition }}</div></template>
    </el-table-column>
        <el-table-column
      prop="joinned"
      label="Joined Date"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.joinned }}</div></template>
    </el-table-column>
      <el-table-column
      prop="terminate"
      label="Terminate Date"
      width="170">
      <template slot-scope="scope"><div :class="{'selected-row' : scope.row.isSelected}">{{ scope.row.terminate }}</div></template>
    </el-table-column>
  </el-table>
  <!-- table-bottom -->
  <el-row>
    <div class="table-bottom-container">
    <div  class="table-bottom">
    <el-button size="small" class="hover-green"> <span class="page ">50/page</span> <i class="el-icon-arrow-down page-down-arrow"></i></el-button>
    <div>
      <el-button class="hover-green"><i class="el-icon-arrow-left p-left"></i></el-button>
      <el-button class="hover-green">1</el-button>
      <el-button class="hover-green">2</el-button>
      <el-button class="hover-green">3</el-button>
      <el-button class="hover-green"><i class="el-icon-arrow-right p-right"></i></el-button>
    </div>
    <div >
      Go to
      <el-button class="hover-green" style="margin-left:10px">1</el-button>
    </div>
    </div>
    </div>
  </el-row>
  </div>
</template>

<script>
export default {
    name : "DataTable",
     data() {
      return {
        tableData: [{
          name: 'Ye Min Htun',
          location: 'Yangon office',
          email: 'yeminhtun@better.hr',
          phone: '+959483482381',
          department: 'Product dpt',
          employeeCode: '004-342',
          tag: 'Intern',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Kyi Sin Hsu Thar',
          location: 'Yangon office',
          email: 'Kyisinhsuthar@better.hr',
          phone: '+959483482381',
          department: 'Quality assurance engineering',
          employeeCode: '004-342',
          tag: 'Trainee',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'May Thet Chit',
          location: 'Yangon office Sule',
          email: 'myatthechit@better.hr',
          phone: '+94123456789',
          department: 'Development',
          employeeCode: '004-342',
          tag: 'Spannish Sopken',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Walter',
          location: 'Mandalay office',
          email: 'zayerlinhtun@better.hr',
          phone: '+959483482381',
          department: 'Tech & Development',
          employeeCode: '004-342',
          tag: 'Intern',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Zayer Zay",
          managerPosition : "COO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Johnathan',
          location: 'Yangon office',
          email: 'yeminhtun@better.hr',
          phone: '+959483482381',
          department: 'Customer success',
          employeeCode: '004-342',
          tag: 'Trainee',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Devi',
          location: 'Yangon office',
          email: 'Kyisinhsuthar@better.hr',
          phone: '+959483482381',
          department: 'Customer success',
          employeeCode: '004-342',
          tag: 'Trainee',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Mike',
          location: 'Yangon office Sule',
          email: 'myatthechit@better.hr',
          phone: '+94123456789',
          department: 'Customer success',
          employeeCode: '004-342',
          tag: 'Spainnish Spoken',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Biden',
          location: 'Mandalay office',
          email: 'zayerlinhtun@better.hr',
          phone: '+959483482381',
          department: 'Tech & Development',
          employeeCode: '004-342',
          tag: 'Intern',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Zayer Zay",
          managerPosition : "COO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Eric',
          location: 'Yangon office',
          email: 'yeminhtun@better.hr',
          phone: '+959483482381',
          department: 'Product dpt',
          employeeCode: '004-342',
          tag: 'Intern',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Elanor',
          location: 'Yangon office',
          email: 'Kyisinhsuthar@better.hr',
          phone: '+959483482381',
          department: 'Customer success',
          employeeCode: '004-342',
          tag: 'Trainee',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Wilson',
          location: 'Yangon office Sule',
          email: 'myatthechit@better.hr',
          phone: '+94123456789',
          department: 'Customer success',
          employeeCode: '004-342',
          tag: 'Spannish Spoken',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Luke',
          location: 'Mandalay office',
          email: 'zayerlinhtun@better.hr',
          phone: '+959483482381',
          department: 'Tech & Development',
          employeeCode: '004-342',
          tag: 'Intern',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },{
          name: 'Wilson',
          location: 'Yangon office Sule',
          email: 'myatthechit@better.hr',
          phone: '+94123456789',
          department: 'Customer success',
          employeeCode: '004-342',
          tag: 'Spannish Spoken',
          position : "UX Designer",
          NRC : "12/PaBaTa(N)00700",
          manager : "Myo Zaw Hein",
          managerPosition : "CEO",
          joinned : "12.2.2021",
          terminate : "—",
          isSelected: false,
        },],
        edit : "",
      }
    },
     methods: {
    handleSelectionChange(selection) {
      this.tableData.forEach(row => {
        row.isSelected = selection.includes(row);
        this.edit = row.isSelected
      });
    },
     toggleEdit(row) {
    this.tableData.forEach(r => {
      this.$set(r, 'toggle', false);
    });
    this.$set(row, 'toggle', true);
    },
    edittoggle(row) {
    this.$set(row, 'toggle', false);
    },
  },
}
</script>

<style scoped>
.selected-row {
   background-color: #F2FDF9;
   color: #000;
   padding: 15px 0px;

}
.checkbox-bg{
  background-color: #F2FDF9;
  color: #000;
  padding: 15px 0px;
  box-shadow: inset 10px 0 4px -10px darkgreen;
}
.employee-image{
  width: 25px;
  align-items: center;
  position: absolute;
}
.name-center{
  margin-left: 30px;
}

.table-bottom{
  margin-top: 15px;
  display: flex;
  align-items: flex-end;
  column-gap: 38px;
}
.page-down-arrow{
  padding-left: 10px;
  font-size: 20px;
}
.table-bottom-container {
  display: flex;
  justify-content: flex-end;
}
.p-left,
.p-right{
  font-size: 14px;
}
.page{
  font-size: 16px;
}

.el-checkbox{
  margin-left: 10px !important;
}
.table-head {
  margin-left: 10px !important;
}
</style>

