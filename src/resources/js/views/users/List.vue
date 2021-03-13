<template>
    <div class="w-full p-3">
        <!--Table Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow">
            <div class="border-b border-gray-800 p-3">
                <h5 class="font-bold uppercase text-gray-600">Users</h5>
            </div>
            <div class="p-5">
                <table class="w-full p-5 text-gray-700 table-auto">
                    <thead>
                    <tr>
                        <th class="text-left text-gray-600">Name</th>
                        <th class="text-left text-gray-600">Username</th>
                        <th class="text-left text-gray-600">Email</th>
                        <th class="text-left text-gray-600">Role</th>
                        <th class="text-left text-gray-600">Actions</th>
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
        <!--/table Card-->
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
            // swal.success();
            return this.fetchTableData();
        },
    },
}
</script>

<style scoped>

</style>
