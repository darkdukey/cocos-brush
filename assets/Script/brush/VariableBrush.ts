import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class VariableBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];
        let width = randomInt(5,10);

        g.moveTo(p1.x, p1.y);
        g.lineTo(p2.x, p2.y);
        g.lineWidth = width;
        g.stroke();
    }


}