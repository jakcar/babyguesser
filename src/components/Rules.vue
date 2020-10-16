<template>
  <div>
    <table class="w-full mb-4 text-gray-700 rounded shadow-md">
      <tr class="bg-gray-100">
        <td class="border py-2 w-1/2">
          Rätt <font-awesome-icon icon="venus-mars" />
        </td>
        <td class="border px-4 py-2">
          1 poäng
        </td>
      </tr>
      <tr>
        <td class="border px-4 py-2">
          Rätt <font-awesome-icon icon="balance-scale-left" />
        </td>
        <td class="border px-4 py-2">4 poäng</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2">
          <font-awesome-icon icon="balance-scale-left" /> inom 10g
        </td>
        <td class="border px-4 py-2">2 poäng</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">
          <font-awesome-icon icon="balance-scale-left" /> inom 50g
        </td>
        <td class="border px-4 py-2">1 poäng</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2">
          Rätt <font-awesome-icon icon="ruler" />
        </td>
        <td class="border px-4 py-2">2 poäng</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">
          Rätt <font-awesome-icon icon="calendar-day" />
        </td>
        <td class="border px-4 py-2">
          2 poäng
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2">
          Rätt <font-awesome-icon icon="clock" />
        </td>
        <td class="border px-4 py-2">
          4 poäng
        </td>
      </tr>
      <tr>
        <td class="border px-4 py-2">
          <font-awesome-icon icon="clock" /> inom 10 min
        </td>
        <td class="border px-4 py-2">
          2 poäng
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="border px-4 py-2">
          <font-awesome-icon icon="clock" /> inom 30 min
        </td>
        <td class="border px-4 py-2">
          1 poäng
        </td>
      </tr>
    </table>

    <p>
      1 extrapoäng för närmast gissad dag, vikt, längd och klockslag, förutsatt
      att ingen gissat exakt. Exakta gissningar erhåller poäng enligt tabell
      ovan.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Rules',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
