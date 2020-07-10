const Block_queue={
    queue:[],
    queue_size: 0,
    queueControl: function(control){
        this.queue.push(control);
        this.queue_size++;
        console.log(this.queue_size);
        unityInstance.SendMessage('Player','appendArrList', control);
    },
    runcode: function(){
        unityInstance.SendMessage('Player','ArrList_Arr');
    }
}
