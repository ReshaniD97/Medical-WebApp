import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import { all } from 'core-js/fn/promise';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'md' || 'fa'
    },
    theme: {
        themes: {
            light: {
                background: colors.grey.lighten2,       //not automatically applied
            },
            dark: {
                background: colors.shades.white,     //if not using lighten/darken, use base to return hex
            },
        }
    }
});
