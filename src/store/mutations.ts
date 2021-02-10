import { MutationTree } from 'vuex';

export const mutations: MutationTree<any> = {
  SHOW_MODAL(state: any) {
    state.modal = true;
  },
  CLOSE_MODAL(state: any) {
    state.modal = false;
  },
};
