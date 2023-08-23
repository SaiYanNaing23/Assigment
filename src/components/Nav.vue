<template>
  <div>
    <nav>
        <div>
            <div class="logo">
                <a href="#"><img src="@/assets/logo.svg" alt=""></a>
            </div>
            <ul class="nav-icon">
                <li>
                    <i class="el-icon-monitor"></i>
                </li>
                <li>
                    <i class="el-icon-time"></i>
                </li>
                <li>
                    <i class="el-icon-suitcase-1"></i>
                </li>
                <li>
                    <i class="el-icon-timer"></i>
                </li>
                <li>
                    <i class="el-icon-user-solid"></i>
                </li>
                <li>
                    <i class="el-icon-refresh"></i>
                </li>
                <li>
                    <i class="el-icon-bell"></i>
                </li>
                <li>
                    <i class="el-icon-bank-card"></i>
                </li>
                <li>
                    <i class="el-icon-chat-dot-square"></i>
                </li>
                <li>
                    <i class="el-icon-more"></i>
                    <span class="more">More</span> 
                </li>
            </ul>
        </div>
        <div class="nav-bottom">
            <div>
            <ul class="nav-icon">
                <li>
                    <i class="el-icon-document-checked"></i>
                </li>
                <li>
                    <i class="el-icon-chat-line-square"></i>
                </li>
            </ul>
                <div class="demo-type">
                <el-avatar :size="40">
                <img src="@/assets/nav-avatar.svg"/>
                </el-avatar>
            </div>
            </div>
            
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "NavVue",
}
</script>

<style>
nav{
    background: #E5E5E5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.logo{
    text-align: center;
    padding: 10px 0;
    background-color: #E5E5E5;
}

.nav-icon{
    text-align: center;
    list-style: none;
}

.nav-icon li{
    padding: 10px 12px;
}

.nav-icon li i{
    font-size: 24px;
}

.nav-icon li:hover{
    background-color: #fff;
    color: #1ED292;
    cursor: pointer;
}
.more{
    font-size: 12px;
}
.nav-bottom{
    text-align: center;
}
.demo-type{
    padding: 10px;
}
</style>