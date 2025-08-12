import Backbone from "backbone";

export const BuyCornView = Backbone.View.extend({
  events: {
    "input #clientId": "onClientIdChange",
    "click #buy-btn": "onBuyClick",
  },

  initialize() {
    this.listenTo(
      this.model,
      "change:loading change:error change:successMessage change:cornCount",
      this.updateUI
    );
    this.render();
  },

  render() {
    this.$el.html(`
      <div class="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <h1 class="text-3xl font-bold text-center text-yellow-800 p-6 m-6">
            🌽 Bob's Corn Store (Backbone)
        </h1>
        <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="clientId" class="text-sm font-medium text-gray-700">
              Client ID:
            </label>
            <input
              type="text"
              id="clientId"
              class="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your client ID"
            />
          </div>

          <button
            id="buy-btn"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Buy Corn
          </button>

          <p id="error-msg" class="text-red-500 text-sm hidden"></p>
          <p id="success-msg" class="text-green-600 text-sm hidden"></p>

          <div class="bg-yellow-50 border border-yellow-200 rounded-md p-3 text-center">
            🌽 Corn Count: <span id="corn-count" class="font-bold">0</span>
          </div>
        </div>
      </div>
    `);
    return this;
  },

  updateUI() {
    const { clientId, loading, error, successMessage, cornCount } =
      this.model.toJSON();

    const input = this.$("#clientId");
    if (input.val() !== clientId) {
      input.val(clientId);
    }
    input.prop("disabled", loading);

    const btn = this.$("#buy-btn");
    btn.text(loading ? "Loading..." : "Buy Corn");
    btn.prop("disabled", loading);

    const errorEl = this.$("#error-msg");
    errorEl.text(error || "");
    errorEl.toggle(!!error);

    const successEl = this.$("#success-msg");
    successEl.text(successMessage || "");
    successEl.toggle(!!successMessage);

    this.$("#corn-count").text(cornCount);
  },

  onClientIdChange(e: JQuery.TriggeredEvent) {
    this.model.set("clientId", (e.target as HTMLInputElement).value);
  },

  async onBuyClick() {
    this.model.set({ loading: true, error: "", successMessage: "" });

    try {
      const clientId = this.model.get("clientId");
      if (!clientId) throw new Error("client_id is required");

      const res = await fetch("http://localhost:3001/buy-corn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: clientId }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Request failed");
      }

      const data = await res.json();
      this.model.set({
        successMessage: data.message,
        cornCount: this.model.get("cornCount") + 1,
      });
    } catch (err: any) {
      this.model.set({ error: err.message });
    } finally {
      this.model.set({ loading: false });
    }
  },
});
