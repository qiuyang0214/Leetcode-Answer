//将实例化的订阅者对象 连同本身的方法和属性 保存起来
//当发布者发布信息时，通知已保存的订阅者调用自身方法 获得信息。

//发布者
function Publisher() {
    this.observers = [];
    this.state = "";

}
Publisher.prototype.addOb = function (observer) {
    var flag = false;
    for (var i = this.observers.length - 1; i >= 0; i--) {
        if (this.observers[i] === observer) {
            flag = true;
        }
    };
    if (!flag) {
        this.observers.push(observer);
    }
    return this;
}
Publisher.prototype.removeOb = function (observer) {
    var observers = this.observers;
    for (var i = 0; i < observers.length; i++) {
        if (observers[i] === observer) {
            observers.splice(i, 1);
        }
    };
    return this;
}
Publisher.prototype.notice = function () {
    var observers = this.observers;
    for (var i = 0; i < observers.length; i++) {
        observers[i].update(this.state);
    };
}

//订阅者
function Subscribe() {
    this.update = function (data) {
        console.log(data);
    };
}

//实际应用 实例化两个订阅者
var a = new Subscribe(),
    b = new Subscribe();

//实例化 一个发布者
var z = new Publisher();

z.addOb(a);
z.addOb(b);

a.update = function (state) {
    console.log(state + "hello!");
}
b.update = function (state) {
    console.log(state + "world!");
}
z.state = "open ";
z.notice();