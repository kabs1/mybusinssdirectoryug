import noticeListStore from '@/modules/notice/notice-list-store';
import noticeViewStore from '@/modules/notice/notice-view-store';
import noticeImporterStore from '@/modules/notice/notice-importer-store';
import noticeFormStore from '@/modules/notice/notice-form-store';
import noticeDestroyStore from '@/modules/notice/notice-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: noticeDestroyStore,
    form: noticeFormStore,
    list: noticeListStore,
    view: noticeViewStore,
    importer: noticeImporterStore,
  },
};
