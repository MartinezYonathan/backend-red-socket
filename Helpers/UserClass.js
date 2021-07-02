class User {
  constructor() {
    this.globalArray = [];
  }

  EnterRoom(id, name, room) {
    const user = { id, name, room };
    this.globalArray.push(user);
    return user;
  }

  GetUserId(id) {
    const socketId = this.globalArray.filter(userId => userId.id === id)[0];
    return socketId;
  }
  
  GetUserName(name) {
    const socketId = this.globalArray.filter(userId => userId.name === name)[0];
    return socketId;
  }

  RemoveUser(id) {
    const user = this.GetUserId(id);
    if (user) {
      this.globalArray = this.globalArray.filter(userId => userId.id !== id);
    }
    return user;
  }
  
  RemoveItemFromArr(arr,item ) {
    var i = arr.indexOf( item );
    console.log("con: " + arr);
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
    console.log(arr);
  }

  GetRoomList(room) {
    const roomName = this.globalArray.filter(user => user.room === room);
    const names = roomName.map(user => user.name);
    return names;
  }

}

module.exports = { User };
