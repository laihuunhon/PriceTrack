var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Holding = new Schema({
  symbol: String,
  volumn: Number,
  btc: Number,
  usd: Number
});

var HoldingModel = mongoose.model('Holding', Holding);

var TrackSymbol = new Schema({
  symbol: String,
});

var TrackSymbolModel = mongoose.model('TrackSymbol', TrackSymbol);

var HeroRelation = new Schema({
  combination: String,
  relationCount: {
    type: Number,
    index: true
  },
  tan_cong: {
    type: Number,
    index: true
  },
  sinh_luc: {
    type: Number,
    index: true
  },
  phong_thu: {
    type: Number,
    index: true
  },
  chan_khi: {
    type: Number,
    index: true
  },
  chinh_xac: {
    type: Number,
    index: true
  },
  ne_tranh: {
    type: Number,
    index: true
  },
  bao_kich: {
    type: Number,
    index: true
  },
  tang_tat_ca: {
    type: Number,
    index: true
  },
  khang_tat_ca: {
    type: Number,
    index: true
  },
  khang_bao: {
    type: Number,
    index: true
  },
  tang_sat_thuong_bao_kich: {
    type: Number,
    index: true
  },
  giam_sat_thuong_bao_kich: {
    type: Number,
    index: true
  },
});

var HeroRelationModel = mongoose.model('HeroRelation', HeroRelation);

module.exports = {
  connect() {
    mongoose.connect('mongodb://localhost:27017/pricetrack');
  },
  getHeroRelationList(sortBy, callback) {
    HeroRelationModel
      .find({})
      .limit(200)
      .sort(sortBy)
      .exec(callback)
  },
  insertHeroRelation(heroRelationData) {
    HeroRelationModel.collection.insert(heroRelationData, (err, docs) => {
      if (err) {
        console.log(err)
      } else {
        console.info('%d potatoes were successfully stored.', docs.length);
      }
    });
  },
  getSymbolList(callback) {
    TrackSymbolModel.find({}, (error, result) => {
      callback(result);
    });
  },
  addSymbol(data, callback) {
    TrackSymbolModel.findOne({
      symbol: data.symbol
    }, (error, result) => {
      if (!result) {
        var instance = new TrackSymbolModel();
        Object.assign(instance, data);
        instance.save(callback)
      }
    });
  },
  removeSymbol(data, callback) {
    TrackSymbolModel.findOne({
      symbol: data.symbol
    }, (error, result) => {
        if (result) {
          result.remove(callback);
        }
    });
  },
  getHolding(callback) {
    HoldingModel.find({}, (error, result) => {
      callback(result);
    });
  },
  addHolding(data, callback) {
    var instance = new HoldingModel();
    Object.assign(instance, data);
    instance.save(callback)
  },
  removeHolding(data, callback) {
    HoldingModel.findOne({
      _id: data.id
    }, (error, result) => {
      if (result) {
        result.remove(callback);
      }
    });
  },
  updateHolding(data, callback) {
    HoldingModel.findOne({
      symbol: data.symbol
    }, (error, result) => {
      if (result) {
        Object.assign(result, data);
        if (result.volumn === 0) {
          result.remove(() => {
            callback()
          })
        } else {
          result.save(() => {
            callback()
          });
        }
      } else {
        var instance = new HoldingModel();
        Object.assign(instance, data);
        if (instance.volumn > 0) {
          instance.save(() => {
            callback()
          });
        }
      }
    });
  }
}

