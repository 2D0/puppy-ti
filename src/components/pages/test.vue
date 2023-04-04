<template>
  <div>
    <ul>
      <li v-for="(item, index) in testData" :key="index">
        <button
          @click="setData(index, buttonItem)"
          v-for="(buttonItem, buttonIndex) in buttons"
          :key="buttonIndex"
          :class="{
            'activeLeft': item.state.score <= 3,
            'activeCenter': item.state.score === 0,
            'activeRight': item.state.score >= 4,
          }">{{ buttonItem }}</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          score: 1,
          type: 'left'
        },
        {
          score: 2,
          type: 'left'
        },
        {
          score: 3,
          type: 'left'
        },
        {
          score: 4,
          type: 'center'
        },
        {
          score: 5,
          type: 'right'
        },
        {
          score: 6,
          type: 'right'
        },
        {
          score: 7,
          type: 'right'
        }
      ],
      testData: [
        {
          title: '타이틀1',
          mbti: 1,
          state: {
            type: '',
            score: 0
          }
        },
        {
          title: '타이틀2',
          mbti: 2,
          state: {
            type: '',
            score: 0
          }
        },
      ]
    }
  },
  methods: {
    setData(index, buttonItem) {
      this.testData[index] = {
        ...this.testData[index],
        state: {
          type: buttonItem.type,
          score: buttonItem.score
        }
      }
    }
  }
}
</script>