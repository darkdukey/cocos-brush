import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class SlicedBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];
        
        this.drawLine(g, p1, p2, points);
    }
    drawLine(g:cc.Graphics, p1:cc.Vec2, p2:cc.Vec2, points:cc.Vec2[]) {
        g.moveTo(p1.x, p1.y);
        g.lineTo(p2.x, p2.y);
        g.stroke();
        
        g.moveTo(p1.x - 4, p1.y - 4);
        g.lineTo(p2.x - 4, p2.y - 4);
        g.stroke();
        
        g.moveTo(p1.x - 2, p1.y - 2);
        g.lineTo(p2.x - 2, p2.y - 2);
        g.stroke();
        
        g.moveTo(p1.x + 2, p1.y + 2);
        g.lineTo(p2.x + 2, p2.y + 2);
        g.stroke();
        
        g.moveTo(p1.x + 4, p1.y + 4);
        g.lineTo(p2.x + 4, p2.y + 4);
        g.stroke();
    }
}