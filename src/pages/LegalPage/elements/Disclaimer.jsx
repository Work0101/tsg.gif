import { Worker } from '@react-pdf-viewer/core';
import {useState} from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer } from '@react-pdf-viewer/core';
import pdf from '../../../assets/pdf/Документ Microsoft Word.pdf'
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';




const Disclaimer = () =>{
    const [scale, setScale] = useState(1);

    const handleZoomIn = () => {
        setScale(scale + 0.1);
    };

    const handleZoomOut = () => {
        if (scale > 0.1) {
            setScale(scale - 0.1);
        }
    };
    const zoomPluginInstance = zoomPlugin({enableShortcuts:false})

    return(
<div>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">


        <div  style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
        }}
        >
            <zoomPluginInstance.ZoomInButton style={{width:"40px"}}/>
            <zoomPluginInstance.ZoomOutButton style={{width:"40px"}}/>
            {/*<button onClick={()=>zoomPluginInstance.CurrentScale}>*/}
            {/*    reset zoom*/}
            {/*</button>*/}
            {/*<zoomPluginInstance.CurrentScale style={{width:"40px"}}/>*/}




            <Viewer fileUrl={pdf} defaultScale={scale}
                    plugins={[zoomPluginInstance]}/>
        </div>

    </Worker>

</div>

    )
}
export default Disclaimer