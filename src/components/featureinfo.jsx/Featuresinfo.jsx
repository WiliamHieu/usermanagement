import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featureinfo.css'

export default function Featuresinfo() {
    return (
        <div>
            <div className="featured">
                <div className="feturedItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="feturedMoney">$2,454</span>
                        <span className="featuredMoneyRate">
                            -11,4 <ArrowDownward className="featuredIcon negative"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compare to lastmonth</span>
                </div>
                <div className="feturedItem">
                    <span className="featuredTitle">Sales</span>
                    <div className="featuredMoneyContainer">
                        <span className="feturedMoney">$2,454</span>
                        <span className="featuredMoneyRate">
                            -11,4 <ArrowDownward className="featuredIcon negative"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compare to lastmonth</span>
                </div>
                <div className="feturedItem">
                    <span className="featuredTitle">Cost</span>
                    <div className="featuredMoneyContainer">
                        <span className="feturedMoney">$2,454</span>
                        <span className="featuredMoneyRate">
                            -11,4 <ArrowUpward className="featuredIcon"/>
                        </span>
                    </div>
                    <span className="featuredSub">Compare to lastmonth</span>
                </div>
            </div>
        </div>
    )
}
