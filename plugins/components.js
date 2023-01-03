import Vue from 'vue';
import Logo from "~/components/Logo";
import ProfileCard from "~/components/ProfileCard";
import Pages from "~/components/Pages";
import Sidebar from "~/components/Sidebar";
import Navbar from "~/components/Navbar";
import LevelViewer from "~/components/LevelViewer";
import LCarouselImages from "~/components/LCarouselImages";
import LFullScreenImage from "~/components/lFullScreenImage";
import TransitionExpand from 'vue-transition-expand'
import 'vue-transition-expand/dist/vue-transition-expand.css'

Vue.use(TransitionExpand)

Vue.component('logo', Logo);
Vue.component('profile-card', ProfileCard);
Vue.component('pages', Pages);
Vue.component('sidebar', Sidebar);
Vue.component('navbar', Navbar);
Vue.component('level-viewer', LevelViewer);
Vue.component('carousel', LCarouselImages);
Vue.component('full-screen-image', LFullScreenImage);
