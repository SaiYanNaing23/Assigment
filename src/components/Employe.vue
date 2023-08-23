<template>
    <el-container>
        <div class="employee">
            <h3>Employees</h3>
            <ul class="employee-link">
                <li>
                    <a href="#">Directory</a>
                </li>
                <li>
                    <a href="#">Update Request</a>
                </li>
                <li>
                    <a href="#">Reporting Lines</a>
                </li>
                <li>
                    <a href="#">Department structures</a>
                </li>
            </ul>
        </div>
    </el-container>

</template>

<script>
export default {
    name: "EmployeVue",
}
</script>

<style>
.employee{
    padding: 20px 20px 0;
    height: 100vh;
    /* white-space: pre; */
}
.employee-link{
    list-style: none;
    display: inline-block;
    margin: 12px 0;
}
.employee-link li{
    margin: 13px 0;

}
.employee-link li a{
    text-decoration: none;
    color: #757575;
}
.employee-link li a:hover,
.employee-link li a:active {
    color: #1ED292;
}
</style>