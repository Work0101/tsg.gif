import FlagItem from "./FlagItem";
import unitedkingdom from './flag/gbunitedkingdomflag_111699.svg'
import brazil from './flag/brbrazilflag_111698.svg'
import china from './flag/cnchinaflag_111955.svg'
import spain from './flag/esspainflag_111796.svg'
import france from './flag/frfranceflag_111874.svg'
import indonesia from './flag/idindonesiaflag_111827.svg'
import india from './flag/inindiaflag_111950.svg'
import italy from './flag/ititalyflag_111732.svg'
import japan from './flag/jpjapanflag_111832.svg'
import korea from './flag/krsouthkoreaflag_111691.svg'
import mymalaysia from './flag/mymalaysiaflag_111816.svg'
import saudiarabia from './flag/sasaudiarabiaflag_111739.svg'
import turkey from './flag/trturkeyflag_111676.svg'
import poland from './flag/plpolandflag_111661.svg'
import germany from './flag/degermanyflag_111762.svg'








import {useState} from "react";



const FlagComponents = () =>{
    const [flag, setFlag] = useState(unitedkingdom)
    return(
        <div className="dropdown  nav-item">
            <a className="d-flex  nav-item nav-link country-flag1" data-bs-toggle="dropdown"
               aria-expanded="false">
                <span className="avatar country-Flag me-0 align-self-center bg-transparent"> </span>
                <div className="my-auto d-fle">
                    <strong className="me-2 ms-2 my-auto"><img src={flag} height={"28px"}/></strong>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-start  dropdown-menu-arrow" x-placement="bottom-end">













               <FlagItem element={unitedkingdom} name={'English'} setFlag={setFlag}/>
                <FlagItem element={germany} name={'Deutsch'}/>
                <FlagItem element={china} name={'中文'}/>
                <FlagItem element={india} name={'हिन्दी'}/>
                <FlagItem element={korea} name={'한국어'}/>
                <FlagItem element={japan} name={'日本語'}/>
                <FlagItem element={brazil} name={'Português'}/>
                <FlagItem element={spain} name={'Español'}/>
                <FlagItem element={france} name={'Français'}/>
                <FlagItem element={italy} name={'Italiano'}/>
                <FlagItem element={turkey} name={'Türkçe'}/>
                <FlagItem element={saudiarabia} name={'العربيn'}/>
                <FlagItem element={mymalaysia} name={'Melayu'}/>
                <FlagItem element={indonesia} name={'Indonesian'}/>
                <FlagItem element={poland} name={'Polski'}/>



            </div>
        </div>

)
}

export default FlagComponents