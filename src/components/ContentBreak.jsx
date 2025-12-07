export default function ContentBreak(props){
    return  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingBottom:'30px', paddingTop:'30px'}}>
                <hr style={{paddingRight:'0.25em', paddingLeft:'0.1em'}} className="contentBreakLine"/>
                <h1 className="homepageText" style={{paddingLeft:'1em', paddingRight:'1em', fontSize:'1.5em'}}>{props.text}</h1>
                <hr style={{paddingRight:'0.25em', paddingLeft:'0.1em'}} className="contentBreakLine"/>
            </div>
}