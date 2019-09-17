<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
export default {
  created () {
    this.chartData = {
      columns: ['日期', '销售量','比率'],
      rows: [
        { '日期': '1月1日', '销售量': 123 ,'比率':113.12},
        { '日期': '1月2日', '销售量': 1223,'比率':2333.22 },
        { '日期': '1月3日', '销售量': 2123,'比率':435.52 },
        { '日期': '1月4日', '销售量': 4123,'比率':844.32 },
        { '日期': '1月5日', '销售量': 3123,'比率':626.82 },
        { '日期': '1月6日', '销售量': 7123,'比率':3352.42 }
      ]
    }
  },

  components: { VeLine }
}
</script>

<style>
</style>
