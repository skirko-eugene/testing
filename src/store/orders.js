import * as fb from 'firebase'

class Order {
  constructor(
    name,
    phone,
    adId,
    done = false,
    id = null
  ) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.done = done
    this.id = id
  }
}

export default {
  state: {
    orders: []
  },
  getters: {
    doneOrders(state){
      return state.orders.filter(o => o.done)
    },
    undoneOrders(state){
      return state.orders.filter(o => !o.done)
    },
    orders(state, getters){
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  },
  mutations: {
    loadOrders(state, paylaod) {
      state.orders = paylaod
    }
  },
  actions: {
    async createOrder({commit}, {name, phone, adId, ownerId}) {
      const order = new Order(name, phone, adId)
      commit('clearError')
      try {
        await fb.database().ref(`users/${ownerId}/orders`).push(order)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
      
      //эмуляция отправки на сервер
      /*await new Promise((res, rej) =>{
        setTimeout(_=>{
          res()
        }, 4000)
      })*/
    },
    async fetchOrder({commit, getters}) {
      commit('setLoading', true)
      commit('clearError')
      
      const resultOrders = [];console.log(getters.user.id);
      
      try {
        const fbVal = await fb.database().ref(`users/${getters.user.id}/orders/`).once('value')
        const orders = fbVal.val();console.log(orders);
        
        Object.keys(orders).forEach(key=>{
          const order = orders[key]
          resultOrders.push(
            new Order(
              order.name,
              order.phone,
              order.adId,
              order.done,
              key
            )
          )
        })
        commit('loadOrders', resultOrders)
        
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
      
      //эмуляция отправки на сервер
      /*await new Promise((res, rej) =>{
        setTimeout(_=>{
          res()
        }, 4000)
      })*/
    },
    async markOrderDown({commit, getters}, payload){
      commit('clearError')
      try {
        await fb.database().ref(`users/${getters.user.id}/orders`).child(payload).update({
          done: true
        })
      }catch (error) {
        commit('setError', error.message)
        throw error
      }
    }
  }
}
