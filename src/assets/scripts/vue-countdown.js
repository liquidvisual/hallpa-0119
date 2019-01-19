/*
    VUE-COUNTDOWN.JS
    updated: 14.01.19

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
        https://unpkg.com/axios/dist/axios.min.js
        https://unpkg.com/vue-paypal-checkout/dist/vue-paypal-checkout.min.js

    NOTES: - https://codepen.io/liquidvisual/pen/ZKKQeN
           - https://github.com/mckamey/countdownjs
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/*
Vue.config.productionTip = false;

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

Vue.component('vue-countdown', {
    template: `
        <div class="countdown">
            <ul v-cloak class="block-grid-xs-3" :class="'block-grid-md-'+digitColumns">
                <li v-if="years > 0">
                    <div class="digit" v-text="years"></div>
                    <span class="text">Years</span>
                </li>
                <li v-if="months > 0">
                    <div class="digit" v-text="months"></div>
                    <span class="text">Months</span>
                </li>
                <li v-if="weeks > 0">
                    <div class="digit" v-text="weeks"></div>
                    <span class="text">Weeks</span>
                </li>
                <li>
                    <div class="digit" v-text="days"></div>
                    <span class="text">Days</span>
                </li>
                <li>
                    <div class="digit" v-text="hours"></div>
                    <span class="text">Hours</span>
                </li>
                <li>
                    <div class="digit" v-text="minutes"></div>
                    <span class="text">Minutes</span>
                </li>
                <li>
                    <div class="digit" v-text="seconds"></div>
                    <span class="text">Seconds</span>
                </li>
            </ul>
        </div>
    `,
    props: {
        DateTime: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            countdownTimer: null,
            currentDateTime: new Date(),
            endDateTime: new Date(this.DateTime),
            years: '00',
            months: '00',
            weeks: '00',
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        }
    },
    computed: {
        digitColumns() {
            const defaultCols = 4;
            let years = Number(this.years) > 0;
            let months = Number(Number(this.months) > 0);
            let weeks = Number(Number(this.weeks) > 0);
            return defaultCols + years + months + weeks;
        }
    },
    created() {
        this.countdownTimer = setInterval((event) => {
            let counter = countdown(this.endDateTime, null, countdown.ALL);

            // IF PAST
            if (counter.value < 0) {

                this.years   = ('0' + counter.years).slice(-2);
                this.months  = ('0' + counter.months).slice(-2);
                this.weeks   = ('0' + counter.weeks).slice(-2);
                this.days    = ('0' + counter.days).slice(-2);
                this.hours   = ('0' + counter.hours).slice(-2);
                this.minutes = ('0' + counter.minutes).slice(-2);
                this.seconds = ('0' + counter.seconds).slice(-2);

            // IF FUTURE
            } else {
                this.destroy();
            }

        }, 1000);
    },
    beforeDestroy() {
        this.destroy();
    },
    methods: {
        destroy() {
            clearInterval(this.countdownTimer);
            this.countdownTimer = null;
        }
    }
});

//-----------------------------------------
// VUE
//-----------------------------------------

new Vue({
   el: '#vue-app'
})
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================