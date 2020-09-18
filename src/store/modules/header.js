const state = {
  title : "VeXe Online - Tốt Nhất Cho Đặt Vé Xe Trực Tuyến",
  description : "VeXe Online - Tốt Nhất Cho Đặt Vé Xe Trực Tuyến",
  keywords : "VeXe Online - Tốt Nhất Cho Đặt Vé Xe Trực Tuyến",
};

const mutations = {
  storeSetHeader(state, payload) {
    Object.keys(payload).forEach (key => {
      state[key] = payload[key]
    })
  }
}

const actions = {
  setHeader ({commit}, header) {
    commit("storeSetHeader", header)
  }
}

export default { state, mutations, actions };