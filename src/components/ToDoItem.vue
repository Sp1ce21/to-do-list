<template>
  <tr>
    <td v-if="!isEdit" :class="toDoStyle.done && 'inputDone'">{{ task.task }}</td>
    <td v-else>
      <input
        type="text"
        :value="task.task"
        class="input"
        v-focus
        @blur="switchEdit"
      />
    </td>
    <td @click="$emit('changeStatus')" :class="toDoStyle">
      {{ task.status }}
    </td>
    <td>
      <div class="icons">
        <span @click="$emit('remove')">
          <trash-icon />
        </span>
        <span @click="switchEdit" v-if="isEdit"><tick-icon /></span>
        <span @click="isEdit = true" v-else>
          <edit-icon />
        </span>
      </div>
    </td>
  </tr>
</template>

<script>
import TrashIcon from "@/assets/svgs/TrashIcon.vue";
import EditIcon from "@/assets/svgs/EditIcon.vue";
import TickIcon from "@/assets/svgs/TickIcon.vue";
export default {
  components: {
    TrashIcon,
    EditIcon,
    TickIcon,
  },
  props: {
    task: [Object],
    statusArr: [Array],
  },
  data() {
    return {
      isEdit: false,
      toDoStyle: {
        toDoLink: true,
      },
    };
  },
  methods: {
    switchEdit(e) {
      this.isEdit = false;
      this.$emit("updateTask", {
        newValue: e.target.value,
        oldTask: this.task,
      });
    },
    checkStatus() {
      this.statusArr.forEach((string) => {
        const field = string.replace(/\s/g, "_").toLowerCase();
        if (this.task.status === string) {
          this.toDoStyle[field] = true;
        } else {
          this.toDoStyle[field] = false;
        }
      });
    },
  },
  mounted() {
    this.checkStatus();
  },
  watch: {
    "task.status"() {
      this.checkStatus();
    },
  },
};
</script>

<style scoped>
tr {
  padding: 5px 0;
}
td {
  word-break: break-all;
}
.icons {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.icons span {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.icons span svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.input {
  background: transparent;
  padding: 0;
  min-width: 100%;
  font-size: 16px;
  font-family: "calibri";
}
.toDoLink {
  cursor: pointer;
}
.to_do {
  color: blue;
}
.in_progress {
  color: rgb(255, 115, 0);
}
.done {
  color: rgb(255, 0, 0);
}
.inputDone{
  text-decoration: line-through;
}
</style>
