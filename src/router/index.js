import Vue from 'vue'
import Router from 'vue-router'

import AppMessage from '@/components/Message';
import AppQuestion from '@/components/Question';
import AppStartScreen from '@/components/StartScreen';
import AppResultScreen from '@/components/ResultScreen';
import AppHelloWorld from '@/components/HelloWorld';

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: '',
      path: '/',
      component: AppStartScreen
    },
    {
      name: 'Question',
      path: '/question',
      component: AppQuestion
    },
    {
      name: 'Message',
      path: '/message',
      component: AppMessage
    },
    {
      name: 'ResultScreen',
      path: '/result',
      component: AppResultScreen
    },
    {
      name: 'HelloWorld',
      path: '/hello',
      component: AppHelloWorld
    },
  ],
  mode: 'history'
})
