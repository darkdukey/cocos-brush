import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class BezierBrush extends Brush{
    hasDrawnStart = false;
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];
        this.drawLine(g, p1, p2);
    }
    drawLine(g:cc.Graphics, p1:cc.Vec2, p2:cc.Vec2) {
        if(!this.hasDrawnStart){
            g.moveTo(p1.x, p1.y);
            this.hasDrawnStart = true;
        } else {
            let mid = p1.add(p2).mul(0.5);
            g.quadraticCurveTo(p1.x, p1.y, mid.x, mid.y);
            
            g.stroke();
        }
    }
    endDraw(){
        this.hasDrawnStart = false;
    }
}