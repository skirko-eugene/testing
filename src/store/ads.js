import * as fb from 'firebase'

class Ad {
  constructor(title, descr, ownerId, src = '', promo = false, id = null) {
    this.title = title
    this.descr = descr
    this.ownerId = ownerId
    this.src = src
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state, getters) {
      return state.ads.filter(ad => {
        return ad.ownerId === getters.user.id
      })
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    },
    loadAds(state, payload) {
      state.ads = payload
    },
    updateAd(state, {title, descr, id}) {
      const ad = state.ads.find(a => {
        return a.id === id
      })
      ad.title = title
      ad.descr = descr
    }
  },
  actions: {
    async createAd({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      
      const image = payload.image
      
      try {
        const newAd = new Ad(
          payload.title,
          payload.descr,
          getters.user.id,
          '',
          payload.promo
        )
        //добавляем новое объявление в базу
        const ad = await fb.database().ref('ads').push(newAd)
        //загружаем фотку в сторадж
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image);
        
        const fileSrcUrl = await fb.storage().ref(`ads/${ad.key}.${imageExt}`);
        //получаем абсолютныйы урл из промиса. Способ 1
        // const varName = await fileSrcUrl.getDownloadURL()
        //получаем абсолютныйы урл из промиса. Способ 2
        fileSrcUrl.getDownloadURL().then(url=>{
          //обновляем поле картинки в базе путем к картинке
          fb.database().ref('ads').child(ad.key).update({
            src: url
          })
  
          commit('setLoading', false)
          commit('createAd', {
            ...newAd,
            id: ad.key,
            src: url
          })
        });
        
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        //  кидаем ошибку, чтобы обработать её в промисе
        throw error
      }
    },
    async fetchAds({commit}) {
      commit('clearError')
      commit('setLoading', true)
      
      const resultAds = []
      
      try {
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()
        
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(
              ad.ownerId,
              ad.title,
              ad.descr,
              ad.src,
              ad.promo,
              key
            )
          )
        })
        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
      }
    },
    async updateAd({commit}, {title, descr, id}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        await fb.database().ref('ads').child(id).update({title, descr})
        commit('updateAd', {title, descr, id})
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
}
