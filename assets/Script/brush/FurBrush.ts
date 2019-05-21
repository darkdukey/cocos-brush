import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class FurBrush extends Brush{
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length - 2];
        let p2 = points[points.length - 1];

        this.drawLine(g, p1, p2, points);
    }
    drawLine(g:cc.Graphics, p1:cc.Vec2, p2:cc.Vec2, points:cc.Vec2[]) {
        g.lineWidth = 1;
        g.moveTo(p1.x, p1.y);
        g.lineTo(p2.x, p2.y);
        g.stroke();
        
        for (var i = 0, len = points.length; i < len; i++) {
            let dx = points[i].x - p2.x;
            let dy = points[i].y - p2.y;
            let d = dx * dx + dy * dy;
  
            if (d < 2000 && Math.random() > d / 2000) {
                g.strokeColor = cc.color(0,0,0,255*0.3);
                g.moveTo( p2.x + (dx * 0.5), p2.y + (dy * 0.5));
                g.lineTo( p2.x - (dx * 0.5), p2.y - (dy * 0.5));
                g.stroke();
            }
        }
    }
}