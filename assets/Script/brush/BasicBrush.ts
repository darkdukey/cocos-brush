import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class BasicBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];
        
        g.moveTo(p1.x, p1.y);
        g.lineTo(p2.x, p2.y);

        g.stroke();
    }
}