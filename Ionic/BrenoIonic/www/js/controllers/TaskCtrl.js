function getTasks(){
  this.item = [
    {nome:'item01', check: false},
    {nome:'item02', check: false},
    {nome:'item03', check: false}];

  this.add = function(item){
    this.items.push(item);
  };

  this.remove = function(item){
    var posição = this.items.indexOf(item);
    this.items.splice(pos,1);
  };
};
