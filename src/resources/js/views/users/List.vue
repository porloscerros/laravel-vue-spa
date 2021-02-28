<template>
    <div class="list">
        <div style="overflow-x:auto;">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in users" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.role.name }}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { apiFactory } from "../../api/apiFactory";
const usersApi = apiFactory.get('users');

export default {
    name: "List",
    data() {
        return {
            users: [],
        };
    },
    created() {
        this.fetchTableData();
    },
    methods: {
        async fetchTableData () {
            try {
                const { data } = await usersApi.get({
                    with_roles: true,
                });
                this.users = data;
            } catch(error) {
                // swal.error(error.title, error.content);
            }
        },
        async onDelete(id) {
            await usersApi.delete(id);
            swal.success();
            return this.fetchTableData();
        },
    },
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    background: lightgrey;
}
table, th, td {
    border: 1px solid black;
    text-align: center;
}
table th {
    background: #555;
    color: #f2f2f2;
}
table td {
    /*opacity: 0.8;*/
}
th, td {
    padding: 15px;
    text-align: center;
}
tr:hover {background-color: #f5f5f5;}
</style>
