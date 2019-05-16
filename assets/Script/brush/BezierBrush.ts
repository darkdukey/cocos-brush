import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class BezierBrush extends Brush{
    hasDrawnStart = false;
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        if(!this.hasDrawnStart){
            let p1 = points[points.length-2];
            g.moveTo(p1.x, p1.y);
            this.hasDrawnStart = true;
        } else {
            let p1 = points[points.length-2];
            let p2 = points[points.length-1];
            let mid = p1.add(p2).mul(0.5);
            g.quadraticCurveTo(p1.x, p1.y, mid.x, mid.y);
            
            g.stroke();
        }
    }
    endDraw(){
        this.hasDrawnStart = false;
    }
}