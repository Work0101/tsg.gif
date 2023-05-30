import {createStore, SpecialZoomLevel, Viewer, Worker} from '@react-pdf-viewer/core';
import {useMemo} from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import {BsZoomIn, BsZoomOut} from "react-icons/bs";
import {TbZoomReplace} from "react-icons/tb";
import {zoomPlugin} from '@react-pdf-viewer/zoom';
import pdf from '../../../assets/pdf/Документ Microsoft Word.pdf'
import '@react-pdf-viewer/zoom/lib/styles/index.css';


const Disclaimer = () => {

    const customZoomPlugin = () => {
        const store =  createStore();
        return {
            install: (pluginFunctions) => {
                store.update('zoom', pluginFunctions.zoom);
            },
            zoomTo: (scale) => {
                const zoom = store.get('zoom');
                if (zoom) {
                    // Zoom to that scale
                    zoom(scale);
                }
            },
        };
    };
    const customZoomPluginInstance = customZoomPlugin();
    const {zoomTo} = customZoomPluginInstance;

    const zoomPluginInstance = zoomPlugin({enableShortcuts: true})
    return (
        <div style={{width: "100%", height: '100%', }}>

            <div className={'pdf-container'}>
                <div style={{position: "absolute", top: "0", right: "0", zIndex: "109876567890"}}>
                    <zoomPluginInstance.ZoomIn>
                        {(props) =>
                            <div onClick={props.onClick} className={"zoom-button"}><BsZoomIn size={'28px'}/></div>}
                    </zoomPluginInstance.ZoomIn>
                    <zoomPluginInstance.ZoomOut>
                        {(props) =>
                            <div onClick={props.onClick} className={"zoom-button"}><BsZoomOut size={'28px'}/></div>}
                    </zoomPluginInstance.ZoomOut>
                    <div onClick={() => zoomTo(SpecialZoomLevel.PageWidth)} className={"zoom-button"}><TbZoomReplace
                        size={'28px'}/></div>


                </div>

                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">


                    {/*<button onClick={()=>zoomPluginInstance.CurrentScale}>*/}
                    {/*    reset zoom*/}
                    {/*</button>*/}
                    {/*<zoomPluginInstance.CurrentScale style={{width:"40px"}}/>*/}


                    <Viewer fileUrl={pdf}
                            plugins={[zoomPluginInstance, customZoomPluginInstance]}/>

                </Worker>
            </div>


        </div>

    )
}
export default Disclaimer