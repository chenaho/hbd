// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,



    onLoad: function () {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    // destroy () {
    //     cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    //     cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    // },        

    properties: {

        // btnStartNodes: {
        //     default: null,
        //     type: cc.Node
        // },

        // btnFinishNodes: {
        //     default: null,
        //     type: cc.Node
        // },
        

        // btnAfterNodes: {
        //     default: null,
        //     type: cc.Node
        // },


        btnStartNodes:  [cc.Node],
        btnFinishNodes:  [cc.Node],
        btnAfterNodes:  [cc.Node],


        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onKeyUp: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.q :
                console.log('release 1');

                this.btnStartNodes.forEach(item => item.active = true);
                this.btnFinishNodes.forEach(item => item.active = false);
                this.btnAfterNodes.forEach(item => item.active = false);


                break;

            case cc.macro.KEY.w:
                console.log('release 2');

                this.btnStartNodes.forEach(item => item.active = false);
                this.btnFinishNodes.forEach(item => item.active = true);
                this.btnAfterNodes.forEach(item => item.active = false);

                break;              


            case cc.macro.KEY.e:
                console.log('release 3');

                this.btnStartNodes.forEach(item => item.active = false);
                this.btnFinishNodes.forEach(item => item.active = false);
                this.btnAfterNodes.forEach(item => item.active = true);

                break;                                
        }
    },

    start () {
                // this.btnStartNode.forEach(item => item.active = false);  

    },

    // update (dt) {},
});
