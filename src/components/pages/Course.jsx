export default function Course(props){
 
    
    return  <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%"}}>
                <h1 className="pageTitle">Course</h1>
                <iframe id='mapmyfitness_route' src='https://www.mapmyrun.com/routes/view/embedded/6656129175?width=600&height=401&elevation=true&&line_color=E61900DC&rgbhex=DC0019&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&show_marker_every=1&last_updated=2025-11-25T18:23:29+00:00' height='401px' width='100%' frameborder='0' ></iframe>
            </div>
}