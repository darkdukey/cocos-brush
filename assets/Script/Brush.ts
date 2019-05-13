// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Brush extends cc.Component {

    @property(cc.Graphics)
    graphics:cc.Graphics = null;

    points:cc.Vec2[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(this.graphics == null){
            this.graphics = this.getComponent(cc.Graphics);
        } else {
            cc.error("Brush component require a cc.Graphics component to work. Please attach one to the node.")
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
    }

    start () {

    }

    // update (dt) {}

    //Event callbacks
    onTouchStart (event:cc.Event.EventTouch){
        var loc = event.touch.getLocation();
        loc = this.node.parent.convertToNodeSpaceAR(loc);

        this.points = [loc];
        return true;
    }

    onTouchMove(event:cc.Event.EventTouch){
        var loc = event.touch.getLocation();
        loc = this.node.parent.convertToNodeSpaceAR(loc);

        this.points.push(loc);
        this.graphics.clear();
        for (let i = 0; i < this.points.length; i++) {
            const p = this.points[i];

            //First point
            if(i === 0){
                this.graphics.moveTo(p.x, p.y);
            } else {
                this.graphics.lineTo(p.x, p.y);
            }
        }
        this.graphics.stroke();
    }
}
