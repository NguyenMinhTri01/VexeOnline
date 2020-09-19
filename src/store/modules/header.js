const state = {
  title : "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
  description : "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
  keywords : "Tốt Nhất Cho Đặt Vé Xe Trực Tuyến - VeXe Online",
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