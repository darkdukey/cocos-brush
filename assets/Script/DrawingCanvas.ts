import Brush from "./brush/Brush";
import BasicBrush from "./brush/BasicBrush";
import BezierBrush from "./brush/BezierBrush";
import VariableBrush from "./brush/VariableBrush";
import MultiStrokeBrush from "./brush/MultiStrokeBrush";
import SlicedBrush from "./brush/SlicedBrush";
import SlicedFadingBrush from "./brush/SlicedFadingBrush";
import SketchyBrush from "./brush/SketchyBrush";
import FurBrush from "./brush/FurBrush";

const {ccclass, property} = cc._decorator;

enum BrushType {
    Basic,
    Bezier,
    Variable,
    MultiStroke,
    Sliced,
    SlicedFading,
    Sketchy,
    Fur
}

@ccclass
export default class DrawingCanvas extends cc.Component {
    @property(cc.Graphics)
    graphics:cc.Graphics = null;

    @property({type: cc.Enum(BrushType)})
    brushType:BrushType = BrushType.Basic;

    brush:Brush = null;

    points:cc.Vec2[] = [];

    onLoad(){
        switch(this.brushType){
            case BrushType.Basic: {
                this.brush = new BasicBrush();
                break;
            }
            case BrushType.Bezier: {
                this.brush = new BezierBrush();
                break;
            }
            case BrushType.Variable: {
                this.brush = new VariableBrush();
                break;
            }
            case BrushType.MultiStroke: {
                this.brush = new MultiStrokeBrush();
                break;
            }
            case BrushType.Sliced: {
                this.brush = new SlicedBrush();
                break;
            }
            case BrushType.SlicedFading: {
                this.brush = new SlicedFadingBrush();
                break;
            }
            case BrushType.Sketchy: {
                this.brush = new SketchyBrush();
                break;
            }
            case BrushType.Fur: {
                this.brush = new FurBrush();
                break;
            }
        }

        if(this.graphics == null){
            this.graphics = this.getComponent(cc.Graphics);
        } else {
            cc.error("Brush component require a cc.Graphics component to work. Please attach one to the node.")
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, true);
    }
    start () {

    }

    // update (dt) {}

    //Event callbacks
    onTouchStart (event:cc.Event.EventTouch) {
        var loc = event.touch.getLocation();
        loc = this.node.parent.convertToNodeSpaceAR(loc);

        this.points = [loc];
        return true;
    }

    onTouchMove(event:cc.Event.EventTouch) {
        var loc = event.touch.getLocation();
        loc = this.node.parent.convertToNodeSpaceAR(loc);

        this.points.push(loc);
        
        if(this.brush != null){
            this.brush.draw(this.graphics, this.points);
        }
    }

    onTouchEnd(event:cc.Event.EventTouch) {
        if(this.brush != null) {
            this.brush.endDraw();
        }
    }
}