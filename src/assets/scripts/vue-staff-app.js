/*
    VUE-PEOPLE-SORT.JS - Last updated: 31.01.19

    NOTES:
        - https://codepen.io/liquidvisual/pen/ErNNbZ?editors=1011
        - https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// SORT SELECT COMPONENT
//-----------------------------------------------------------------

Vue.component('sort-select', {
    template: `
        <select
            class="custom-select"
            :sort-order="sortOrder"
            v-model="sortOrder"
            @change="$emit('input', sortOrder)"
        >
            <option
                v-for="sortKey in Object.keys(sortOptions)"
                v-text="sortKey"
                :value="sortKey">
            </option>
        </select>
    `,
    props: {
        sortOptions: Object
    },
    data() {
        return {
            sortOrder: 'All' // need this to init with
        }
    }
 });

//-----------------------------------------------------------------
// PEOPLE GRID COMPONENT
//-----------------------------------------------------------------

new Vue({
    el: "#vue-staff-app",
    data() {
        return {
            list: null,
            sortOrder: "All",
        }
    },
    computed: {
        sortOptions() {
            return {
                "All": () => {
                    return this.list;
                },
                "Location": () => {
                   return this.list.slice().sort(function(a, b) {
                      if (a.location === b.location) {
                         // name is only important when locations are the same
                         return a['lastName'].localeCompare(b['lastName']);
                      }
                      return a['location'].localeCompare(b['location']);
                   });
                },
                "Position": () => {
                   return this.list.slice().sort(function(a, b) {
                      if (a.position === b.position) {
                         return a['lastName'].localeCompare(b['lastName']);
                      }
                      return a['position'].localeCompare(b['position']);
                   });
                },
                "Surname": () => {
                    // Set slice() to avoid to generate an infinite loop!
                    return this.list.slice().sort(function(a, b) {
                        return a['lastName'].localeCompare(b['lastName']);
                    });
                }
            }
        }
    },
    created() {
        // roll through list and create 'last name' prop
        for (var i=0; i<staffList.length; i++) {
            var obj = staffList[i];
            obj.lastName = this.getLastName(obj.name);
        }
        // init
        this.list = staffList;
    },
    methods: {
        sort(sortOrder){
            return this.sortOptions[sortOrder]()
        },
        getLastName(fullName) {
            return String(fullName.split(' ').splice(-1,1));
        },
    }
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================