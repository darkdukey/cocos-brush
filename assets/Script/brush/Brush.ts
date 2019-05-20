const {ccclass, property} = cc._decorator;

@ccclass
export default class Brush {
    draw(g:cc.Graphics, points:cc.Vec2[]) {
        cc.error("Draw function not implemented for the base class");
    }
    drawLine(g:cc.Graphics, p1:cc.Vec2, p2:cc.Vec2) {
        cc.error("DrawPlayback function not implemented for the base class");
    }
    endDraw(){
        cc.error("EndDraw function not implemented for the base class");
    }
}

