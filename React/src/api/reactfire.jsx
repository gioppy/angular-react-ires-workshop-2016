module.exports = {
  ref: function(){
    return firebase.database().ref("players");
  },
  insert: function(ref, obj){
    ref.push(obj);
  },
  update: function(ref, field, value){
    var updates = {};
    updates[field] = value;
    ref.update(updates);
  }
};