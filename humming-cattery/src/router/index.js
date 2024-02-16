import { createRouter, createWebHistory  } from 'vue-router'
import Home from "@/views/Home.vue";
import Mollies from "@/views/Mollies.vue"
import Castrates from "@/views/Castrates.vue"
import InMemoriam from "@/views/InMemoriam.vue"
import News from "@/views/News.vue"
import KittenBasket from "@/views/KittenBasket.vue"
import KittenInfo from "@/views/KittenInfo.vue"
import Breeder from "@/views/Breeder.vue"
import Contact from "@/views/Contact.vue"

const routes = [
  {
    path: "/Humming",
    name: "Home",
    component: Home,
  },
  {
    path: "/Mollies",
    name: "Mollies",
    component: Mollies,
  },
  {
    path: "/Castrates",
    name: "Castrates",
    component: Castrates,
  },
  {
    path: "/InMemoriam",
    name: "InMemoriam",
    component: InMemoriam,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/KittenBasket",
    name: "KittenBasket",
    component: KittenBasket,
  },
  {
    path: "/KittenInfo",
    name: "KittenInfo",
    component: KittenInfo,
  },
  {
    path: "/Breeder",
    name: "Breeder",
    component: Breeder,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
