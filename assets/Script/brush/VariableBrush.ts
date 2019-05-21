import Brush from "./Brush";
import randomInt from "../utils/math_util"
const {ccclass} = cc._decorator;

@ccclass
export default class VariableBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];
        this.drawLine(g, p1, p2, points);
    }
    drawLine(g:cc.Graphics, p1:cc.Vec2, p2:cc.Vec2, points:cc.Vec2[]) {
        let width = randomInt(5,10);
        g.moveTo(p1.x, p1.y);
        g.lineTo(p2.x, p2.y);
        g.lineWidth = width;
        g.stroke();
    }
}