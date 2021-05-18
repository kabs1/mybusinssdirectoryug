module.exports = (app) => {
  app.post(`/coupon`, require('./couponCreate'));
  app.put(`/coupon/:id`, require('./couponUpdate'));
  app.post(`/coupon/import`, require('./couponImport'));
  app.delete(`/coupon`, require('./couponDestroy'));
  app.get(
    `/coupon/autocomplete`,
    require('./couponAutocomplete'),
  );
  app.get(`/coupon`, require('./couponList'));
  app.get(`/coupon/:id`, require('./couponFind'));
};
