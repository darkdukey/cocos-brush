import Brush from "./Brush";

const {ccclass} = cc._decorator;

@ccclass
export default class SketchyBrush extends Brush{
    hasDrawnStart = false;
    draw (g:cc.Graphics, points: cc.Vec2[]) {
        let p1 = points[points.length-2];
        let p2 = points[points.length-1];

        g.lineWidth = 1;

        if(!this.hasDrawnStart){
            g.moveTo(p1.x, p1.y);
            g.lineTo(p2.x, p2.y);
            g.stroke();
            this.hasDrawnStart = true;
        } else {
            for (var i = 0, len = points.length; i < len; i++) {
                let dx = points[i].x - p2.x;
                let dy = points[i].y - p2.y;
                let d = dx * dx + dy * dy;
      
                if (d < 1000) {
                    g.strokeColor = cc.color(0,0,0,255*0.3);
                    g.moveTo( p2.x + (dx * 0.2), p2.y + (dy * 0.2));
                    g.lineTo( points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
                    g.stroke();
                }
            }
        }
    }
    endDraw(){
        this.hasDrawnStart = false;
    }
}