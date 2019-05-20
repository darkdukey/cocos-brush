import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class FurBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length - 2];
        let p2 = points[points.length - 1];


    }
    drawLine(g:cc.Graphics, p1:cc.Vec2, p2:cc.Vec2) {
        
    }
}