import Vue from "nativescript-vue";
import routes from "./routes";
import BackendService from "./services/backend-service";
import Login from "./components/Login";
import VueDevtools from 'nativescript-vue-devtools';
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import { TNSFontIcon, fonticon } from './nativescript-fonticon';
const backendService = new BackendService();
Vue.prototype.$backendService = backendService;
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    'fa': './fonts/fa5-all.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);
Vue.use(RadSideDrawer);
Vue.config.silent = false;

Vue.use(VueDevtools);
new Vue({
    template: `
        <Frame>
            <Login />
        </Frame>`,
    components: {
        Login
    },
    render: h => h("frame", [h(backendService.isLoggedIn() ? routes.login : routes.main)])
}).$start();
