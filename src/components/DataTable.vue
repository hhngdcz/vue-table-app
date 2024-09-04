<template>
  <v-container fluid>
    <!-- 过滤器输入框 -->
    <v-text-field
        v-model="search"
        label="根据名称过滤"
        class="mx-4"
    ></v-text-field>

    <!-- 数据表格 -->
    <v-data-table
        :headers="headers"
        :items="filteredItems"
        :items-per-page="itemsPerPage"
        v-model:page="page"
        item-value="name"
        class="elevation-1"
        show-expand
    >


      <!-- 详情内容 -->
      <template v-slot:expanded-row="{ columns, item }">
        <tr>
          <td :colspan="columns.length">
            <v-card flat>
              <v-card-text>{{ item.details }}</v-card-text>
            </v-card>
          </td>
        </tr>
      </template>


    </v-data-table>

  </v-container>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      search: '',
      page: 1,
      itemsPerPage: 5,
      headers: [

        {
          title: '甜品 (每100g)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {title: '卡路里', key: 'calories'},
        {title: '脂肪 (g)', key: 'fat'},
        {title: '碳水化合物 (g)', key: 'carbs'},
        {title: '蛋白 (g)', key: 'protein'},
        {title: '铁 (%)', key: 'iron'},
        {title: '', key: 'data-table-expand'},


      ],
      items: [

        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
          details: 'This is a frozen yogurt item.',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
          details: 'This is a frozen yogurt item.',
        },


      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.search) {
        return this.items.filter((item) =>
            item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      return this.items;
    },
    pageCount() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  },
  methods: {
    toggleDetails(item) {
      item.showDetails = !item.showDetails;
    },
  },
};
</script>
