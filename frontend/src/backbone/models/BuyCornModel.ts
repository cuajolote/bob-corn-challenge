import Backbone from 'backbone';
import $ from 'jquery';

const BuyCornModel = Backbone.Model.extend({
  defaults: {
    clientId: '',
    loading: false,
    error: '',
    successMessage: '',
    cornCount: 0
  },

  buyCorn: function () {
    const clientId = this.get('clientId');

    if (!clientId) {
      this.set({ error: 'client_id is required', successMessage: '' });
      return;
    }

    this.set({ loading: true, error: '', successMessage: '' });

    $.ajax({
      url: 'http://localhost:3001/buy-corn',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ client_id: clientId }),
      success: (res) => {
        this.set({
          loading: false,
          successMessage: res.message,
          cornCount: this.get('cornCount') + 1
        });
      },
      error: (xhr) => {
        const err = xhr.responseJSON?.error || 'Something went wrong';
        this.set({ loading: false, error: err });
      }
    });
  }
});

export default BuyCornModel;
