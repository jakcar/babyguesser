<template>
  <div>
    <div class="w-full bg-green-400  rounded-tl rounded-tr shadow py-1 text-xl">
      Facit
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-5 border-l border-r border-b rounded-bl rounded-br shadow-md mb-4 p-2 text-gray-700"
    >
      <div class="flex m-auto my-2 w-full">
        <div class="w-1/2 sm:text-right sm:pr-2">
          <font-awesome-icon icon="venus-mars" />
        </div>
        <div class="w-1/2 sm:text-left">
          <span v-if="!correct.gender">TBA</span>{{ correct.gender }}
        </div>
      </div>
      <div class="flex m-auto my-2 w-full">
        <div class="w-1/2 sm:text-right sm:pr-2">
          <font-awesome-icon icon="balance-scale-left" />
        </div>
        <div class="w-1/2 sm:text-left">
          <span v-if="!correct.weigth">TBA</span>{{ correct.weigth }}
        </div>
      </div>
      <div class="flex m-auto my-2 w-full">
        <div class="w-1/2 sm:text-right sm:pr-2">
          <font-awesome-icon icon="ruler" />
        </div>
        <div class="w-1/2 sm:text-left">
          <span v-if="!correct.length">TBA</span>{{ correct.length }}
        </div>
      </div>
      <div class="flex m-auto my-2 w-full">
        <div class="w-1/2 sm:text-right sm:pr-2">
          <font-awesome-icon icon="calendar-day" />
        </div>
        <div class="w-1/2 sm:text-left">
          <span v-if="!correct.day">TBA</span>
          {{ format_day(correct.day) }}
        </div>
      </div>
      <div class="flex m-auto my-2 w-full">
        <div class="w-1/2 sm:text-right sm:pr-2">
          <font-awesome-icon icon="clock" />
        </div>
        <div class="w-1/2 sm:text-left">
          <span v-if="!correct.time">TBA</span>{{ format_time(correct.time) }}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xl">
      <div
        v-for="participant in participants"
        :key="participant.participant"
        class=" border rounded shadow-md"
      >
        <h2 class="bg-gray-200 text-xl p-1 pb-2">
          {{ participant.participant }}
        </h2>
        <table class="w-full mb-4 text-gray-700">
          <tr>
            <td class="border border-l-0 px-4 py-2 w-1/2">
              <font-awesome-icon icon="venus-mars" />
            </td>
            <td class="border border-r-0 px-4 py-2">
              {{ participant.gender }}
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border border-l-0 px-4 py-2">
              <font-awesome-icon icon="balance-scale-left" />
            </td>
            <td class="border border-r-0 px-4 py-2">
              {{ participant.weigth }} g
            </td>
          </tr>
          <tr>
            <td class="border border-l-0 px-4 py-2">
              <font-awesome-icon icon="ruler" />
            </td>
            <td class="border border-r-0 px-4 py-2">
              {{ participant.length }} cm
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border border-l-0 px-4 py-2">
              <font-awesome-icon icon="calendar-day" />
            </td>
            <td class="border border-r-0 px-4 py-2">
              {{ format_day(participant.day) }}
            </td>
          </tr>
          <tr>
            <td class="border border-l-0 px-4 py-2">
              <font-awesome-icon icon="clock" />
            </td>
            <td class="border border-r-0 px-4 py-2">
              {{ format_time(participant.time) }}
            </td>
          </tr>
        </table>

        <h2 class="text-2xl">Poäng: {{ participant.points }}</h2>
        <ul class="py-4 text-base">
          <li v-for="comment in participant.comments" :key="comment">
            {{ comment }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('sv')
export default {
  name: 'Participants',
  data() {
    return {
      participants: [
        {
          participant: 'Adam',
          gender: 'P',
          weigth: 3535,
          length: 52,
          day: moment('2021-02-20'),
          time: moment('2021-02-20 05:20'),
          comments: [],
          points: 0
        },
        {
          participant: 'Anna',
          gender: 'P',
          weigth: 3200,
          length: 50,
          day: moment('2021-02-21'),
          time: moment('2021-02-20 18:37'),
          comments: [],
          points: 0
        },
        {
          participant: 'Axel',
          gender: 'P',
          weigth: 3700,
          length: 53,
          day: moment('2021-02-25'),
          time: moment('2021-02-20 05:00'),
          comments: [],
          points: 0
        },
        {
          participant: 'Bernhard',
          gender: 'P',
          weigth: 3526,
          length: 51,
          day: moment('2021-02-25'),
          time: moment('2021-02-20 04:30'),
          comments: [],
          points: 0
        },
        {
          participant: 'Jakob',
          gender: 'F',
          weigth: 3079,
          length: 49,
          day: moment('2021-02-23'),
          time: moment('2021-02-20 04:20'),
          comments: [],
          points: 0
        },
        {
          participant: 'Julia',
          gender: 'F',
          weigth: 3650,
          length: 51,
          day: moment('2021-02-15'),
          time: moment('2021-02-20 18:06'),
          comments: [],
          points: 0
        },
        {
          participant: 'Linus',
          gender: 'H',
          weigth: 4200,
          length: 66.6,
          day: moment('2021-02-25'),
          time: moment('2021-02-20 01:01'),
          comments: [],
          points: 0
        },
        {
          participant: 'Liselotte',
          gender: 'F',
          weigth: 3720,
          length: 50,
          day: moment('2021-02-02'),
          time: moment('2021-02-20 12:25'),
          comments: [],
          points: 0
        },
        {
          participant: 'Maria',
          gender: 'P',
          weigth: 3600,
          length: 51,
          day: moment('2021-02-24'),
          time: moment('2021-02-20 20:30'),
          comments: [],
          points: 0
        },
        {
          participant: 'Mats',
          gender: 'F',
          weigth: 3333,
          length: 50,
          day: moment('2021-02-28'),
          time: moment('2021-02-20 08:20'),
          comments: [],
          points: 0
        },
        {
          participant: 'Patrik',
          gender: 'F',
          weigth: 3110,
          length: 49,
          day: moment('2021-03-01'),
          time: moment('2021-02-20 14:32'),
          comments: [],
          points: 0
        },
        {
          participant: 'Randi',
          gender: 'F',
          weigth: 3200,
          length: 49,
          day: moment('2021-02-22'),
          time: moment('2021-02-20 02:15'),
          comments: [],
          points: 0
        },
        {
          participant: 'Sanna',
          gender: 'F',
          weigth: 3500,
          length: 52,
          day: moment('2021-02-20'),
          time: moment('2021-02-20 22:10'),
          comments: [],
          points: 0
        },
        {
          participant: 'Sarah',
          gender: 'F',
          weigth: 3400,
          length: 50,
          day: moment('2021-02-17'),
          time: moment('2021-02-20 06:00'),
          comments: [],
          points: 0
        },
        {
          participant: 'Viggo',
          gender: 'P',
          weigth: 3570,
          length: 50,
          day: moment('2021-02-09'),
          time: moment('2021-02-20 11:00'),
          comments: [],
          points: 0
        },
        {
          participant: 'Villiam',
          gender: 'P',
          weigth: 3317,
          length: 48,
          day: moment('2021-02-12'),
          time: moment('2021-02-20 13:37'),
          comments: [],
          points: 0
        },
        {
          participant: 'Ylva',
          gender: 'F',
          weigth: 3700,
          length: 53,
          day: moment('2021-02-26'),
          time: moment('2021-02-20 16:00'),
          comments: [],
          points: 0
        }
      ],
      correct: {
        gender: 'F',
        weigth: 4180,
        length: 51,
        day: moment('2021-02-14'),
        time: moment('2021-02-14 23:07')
      },
      guessedCorrectLength: false,
      guessedCorrectWeight: false,
      guessedCorrectDay: false,
      guessedCorrectTime: false
    }
  },
  created: function() {
    this.participants.forEach(guess => {
      if (guess.gender == this.correct.gender) {
        guess.points += 1
        guess.comments.push('+1 poäng för rätt kön.')
      }
      if (guess.length == this.correct.length) {
        guess.points += 2
        guess.comments.push('+2 poäng för rätt längd.')
        this.guessedCorrectLength = true
      }

      if (this.diffDays(guess.day) == 0) {
        guess.points += 2
        guess.comments.push('+2 poäng för rätt dag.')
        this.guessedCorrectDay = true
      }
      if (guess.weigth == this.correct.weigth) {
        guess.points += 4
        guess.comments.push('+4 poäng för rätt vikt.')
        this.guessedCorrectWeight = true
      } else if (Math.abs(guess.weigth - this.correct.weigth) < 11) {
        guess.points += 2
        guess.comments.push('+2 poäng för vikt inom 10 gram.')
      } else if (Math.abs(guess.weigth - this.correct.weigth) < 51) {
        guess.points += 1
        guess.comments.push('+1 poäng för vikt inom 50 gram.')
      }

      if (this.diffTime(guess.time) == 0) {
        guess.points += 4
        guess.comments.push('+4 poäng för rätt tid.')
        this.guessedCorrectTime = true
      } else if (this.diffTime(guess.time) < 11) {
        guess.points += 2
        guess.comments.push('+2 poäng för tid inom 10 minuter.')
      } else if (this.diffTime(guess.time) < 31) {
        guess.points += 1
        guess.comments.push('+1 poäng för tid inom 30 minuter.')
      }
    })

    if (!this.guessedCorrectWeight && this.correct.weigth != null) {
      let weights = this.participants.map(x =>
        Math.abs(x.weigth - this.correct.weigth)
      )
      this.findMinimumIndexes(weights).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('+1 poäng för närmast vikt.')
      })
    }

    if (!this.guessedCorrectLength && this.correct.length != null) {
      let lengths = this.participants.map(x =>
        Math.abs(x.length - this.correct.length)
      )
      this.findMinimumIndexes(lengths).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('+1 poäng för närmast längd.')
      })
    }

    if (!this.guessedCorrectDay && this.correct.day != null) {
      let days = this.participants.map(x => Math.abs(this.diffDays(x.day)))
      this.findMinimumIndexes(days).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('+1 poäng för närmast dag.')
      })
    }

    if (!this.guessedCorrectTime && this.correct.time != null) {
      let times = this.participants.map(x => this.diffTime(x.time))
      this.findMinimumIndexes(times).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('+1 poäng för närmast tid.')
      })
    }

    this.participants.sort((a, b) => b.points - a.points)
  },
  methods: {
    format_day(value) {
      if (value) {
        return moment(value).format('MMM Do')
      }
    },
    format_time(value) {
      if (value) {
        return moment(value).format('LT')
      }
    },
    diffDays(day) {
      const oneDay = 24 * 60 * 60 * 1000
      const firstDay = this.correct.day
      const secondDay = day
      const diffDays = Math.round(Math.abs((firstDay - secondDay) / oneDay))
      return diffDays
    },
    diffTime(guessedTime) {
      let correctT = this.correct.time
      let guessedT = guessedTime
      let difference = guessedT / 1000 / 60 - correctT / 1000 / 60
      if (difference > 720) {
        difference = 1400 - difference
      }
      // console.log(String(guessedTime), Math.abs(difference))
      return Math.abs(difference)
    },
    findMinimumIndexes(array) {
      let min = Math.min.apply(Math, array)
      let indexes = []

      array.forEach(function(item, idx) {
        if (item === min) {
          indexes.push(idx)
        }
      })
      return indexes
    }
  }
}
</script>
