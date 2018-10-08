import message from '@/utils/message';

const DATA_KEY = 'tallyList';

const tallyStore = {
  namespaced: true,
  state: {
    loading: false,
    currentPage: 1,
    pageSize: 10,
    total: 0,
    dataList: [],
  },
  actions: {
    getDataList(context) {
      context.commit('setLoading', true);
      wx.getStorage({
        key: DATA_KEY,
        success: (res) => {
          console.log(res);
          context.commit('setDataList', res.data || []);
        },
        fail: (e) => {
          if (e.errMsg === 'getStorage:fail data not found') {
            context.commit('setDataList', []);
            return;
          }
          console.error(e);
          message.info('获取数据失败');
        },
        complete: () => {
          context.commit('setLoading', false);
        }
      })
    },
    addTally(context, _data) {
      context.commit('setLoading', true);
      const { dataList } = context.state;
      dataList.unshift(_data);
      const data = JSON.parse(JSON.stringify(dataList));
      return new Promise((resolve, reject) => {
        wx.setStorage({
          key: DATA_KEY,
          data,
          success: (res) => {
            console.log(res);
            context.commit('setDataList', data || []);
          },
          fail: (e) => {
            console.error(e);
            message.info('添加数据失败');
          },
          complete: () => {
            context.commit('setLoading', false);
            resolve();
          }
        })
      })
    }
  },
  mutations: {
    setLoading(state, v) {
      if (v) {
        wx.showLoading({
          title: '加载数据中...'
        })
      } else {
        wx.hideLoading()
      }
      state.loading = v;
    },
    setDataList(state, v) {
      state.dataList = v;
    }
  },
  getters: {

  }
}
export default tallyStore;