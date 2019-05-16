import Brush from "./Brush";
import randomInt from "../utils/math_util"

const {ccclass} = cc._decorator;

@ccclass
export default class MultiStrokeBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];
        
        g.lineWidth = 1;

        g.moveTo(p1.x - randomInt(0, 2), p1.y - randomInt(0, 2));
        g.lineTo(p2.x - randomInt(0, 2), p2.y - randomInt(0, 2));
        g.stroke();
        
        g.moveTo(p1.x, p1.y);
        g.lineTo(p2.x, p2.y);
        g.stroke();
        
        g.moveTo(p1.x + randomInt(0, 2), p1.y + randomInt(0, 2));
        g.lineTo(p2.x + randomInt(0, 2), p2.y + randomInt(0, 2));
        g.stroke();
    }
}