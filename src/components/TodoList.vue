<template>
    <div class="hello">
        <div class="container">
            <div class="form-group ml-5 mr-5 row">
                <div class="col-10">
                    <input type="text" class="form-control" 
                        v-model.trim="Name"
                        @keyup.enter="addName"
                        placeholder="Nhập tên của bạn">
                </div>
                <div class="col-2">
                    <button 
                        class="btn btn-primary"
                        @click="addName"    
                    >Add</button>
                </div>
            </div>
            <div class="row container">
                <div class="row justify-content-center">
                    <ul class="mt-3 col-6 listTodo" v-if="message != ''">
                        <li>{{ message }}</li>
                    </ul>
                    <ul class="mt-3 col-6 listTodo" v-else>
                        <li class="row" v-for="(name, index) in listName" :key="index">
                            <div class="col"><input type="checkbox"></div>
                            <div class="col">
                                <input type="text" class="border border-0"
                                    v-model="name.name"
                                    @keyup.enter="updateName">
                            </div>
                            <div class="col"><button class="text-decoration-none" @click="removeName(index)">x</button></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <br>
        <span>Click vào name để sửa, ấn vào Enter để submit</span>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data() {
            return {
                Name: "",
                message: "",
                listName: []
            }
        },
        methods: {
            checkName() {
                if (this.Name === "") {
                    return false
                }

                return true
            },
            addName() {
                const newName = {title: "new" + this.Name, name: this.Name}
                if (this.checkName()) {
                    this.listName.push(newName)
                    this.message = ""
                } else {
                    this.message = "Bạn chưa nhập tên"
                }
            },
            updateName(index) {
                const newName = {title: "new" + index.target.value, name: index.target.value}
                this.listName.splice(index, newName)
                alert('success')
            },
            removeName(index) {
                this.listName.splice(index, 1)
            }
        },
    }
</script>

<style>
li {
    list-style: none;
}
</style>