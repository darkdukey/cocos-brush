const {ccclass, property} = cc._decorator;

@ccclass
export default class Brush {
    draw(g:cc.Graphics, points:cc.Vec2[]){
        cc.error("Draw function not implemented for the base class");
    }
    endDraw(){
        cc.error("Draw function not implemented for the base class");
    }
}

