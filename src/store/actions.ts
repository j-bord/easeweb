// import { getStaffAndCustomerCode } from '@/api';
import store from '@/store';
import { ActionTree } from 'vuex';

export const actions: ActionTree<any, any> = {
  async showModal(vuex) {
    vuex.commit('SHOW_MODAL');
  },
  async closeModal(vuex) {
    vuex.commit('CLOSE_MODAL');
  },
};
