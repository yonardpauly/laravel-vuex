<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tasks"
      class="elevation-1"
      :server-items-length="total"
      :items-per-page="5"
      @update:page="changePage"
    >
      <template v-slot:item.action="{ item }">
        <button
                type="button"
                class="btn btn-label-info btn-sm btn-icon"
                @click="editItem(item)"
        >
          <i class="fal fa-edit" />
        </button>
        &nbsp;
        <button
                class="btn btn-label-dark btn-sm btn-icon"
                @click="deleteItem(item)"
        >
          <i class="far fa-trash" />
        </button>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headers: [
        {
          text: "Title",
          sortable: true,
          align: "left",
          value: "title",
          width: 200,
        },
        {
          text: "Description",
          sortable: true,
          align: "center",
          value: "description",
          width: 200,
        },
        {
          text: "Date Created",
          align: "center",
          value: "created_at",
          width: 200,
        },
        {
          text: "Actions",
          align: "center",
          value: "action",
          width: 150,
        },
      ],
      total: 1,
      current_page: 1,
      perPage: 5,
    };
  },
  created() {
    this.fetchTasks();
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.taskList;
    },
  },
  methods: {
    fetchTasks() {
      this.$store.dispatch("tasks/FETCH_TASKS", {
        perPage: this.perPage
      }).then(({ data }) => {
        const response = data;
        this.$store.commit("tasks/SET_TASKS", response.data);
        this.total = response.total;
        this.current_page = response.current_page;
      });
    },
    changePage(page) {
      this.$store.dispatch("tasks/FETCH_TASKS", {
        page,
        perPage: this.perPage,
      }).then(({ data }) => {
        const response = data;
        this.$store.commit("tasks/SET_TASKS", response.data);
        this.total = response.total;
        this.current_page = response.current_page;
      });
    }
  },
};
</script>
