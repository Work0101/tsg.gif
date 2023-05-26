import FlagItem from "./FlagItem";
import "./style.css"

import unitedkingdom from '../../../assets/our_img/img/flag/gbunitedkingdomflag_111699.png'
import brazil from '../../../assets/our_img/img/flag/brbrazilflag_111698.png'
import china from '../../../assets/our_img/img/flag/cnchinaflag_111955.png'
import spain from '../../../assets/our_img/img/flag/esspainflag_111796.png'
import france from '../../../assets/our_img/img/flag/frfranceflag_111874.png'
import indonesia from '../../../assets/our_img/img/flag/idindonesiaflag_111827.png'
import india from '../../../assets/our_img/img/flag/inindiaflag_111950.png'
import italy from '../../../assets/our_img/img/flag/ititalyflag_111732.png'
import japan from '../../../assets/our_img/img/flag/jpjapanflag_111832.png'
import korea from '../../../assets/our_img/img/flag/krsouthkoreaflag_111691.png'
import mymalaysia from '../../../assets/our_img/img/flag/mymalaysiaflag_111816.png'
import saudiarabia from '../../../assets/our_img/img/flag/sasaudiarabiaflag_111739.png'
import turkey from '../../../assets/our_img/img/flag/trturkeyflag_111676.png'
import poland from '../../../assets/our_img/img/flag/plpolandflag_111661.png'
import germany from '../../../assets/our_img/img/flag/degermanyflag_111762.png'


import {useSelector} from "react-redux";
import useMediaQuery from "../../../hooks/useMediaQuery";


const FlagComponents = ({
                            inMenu,matches,  menuIsOpen,
                            handelNavLinkButtonClick
                        }) => {
    const mediaresualt = useMediaQuery("(max-height: 1264px)")
    const langInfo = useSelector((state) => state.language)

    return (
        <div className="dropdown  nav-item p-0"  style={{maxHeight: "100vh", width: matches ? "100%" : "60px"}}>
            <div className={`d-flex   justify-content-center  ${matches ? "new-button-auth" : "new-button"}`}
                 data-bs-toggle="dropdown"
                 style={{padding: 0, maxHeight: "100vh", scrollBehavior: "auto",  width: matches ? "100%" : "60px", border:"none", position:"relative"}}
                 aria-expanded="false">
                <div
                    className={`my-auto `}
                     style={{padding: 0, width: matches  ? "100%" : "60px", border: "none", scrollBehavior: "auto",  transform:" none !important", cursor: "pointer", margin:" 0 5px 0 5px" }}>

                    <div id={'dropdownFlagMenuShellSite '} className={"d-flex justify-content-center locked-custom"}>
                        <img src={langInfo.countryFlag} alt={"flag"} height={"20px"} width={"36px"} style={{cursor: "pointer"}}/>
                    </div>

                    <div className="dropdown-menu p-0 flag-list "  aria-labelledby="dropdownFlagMenuShellSite"
                         style={{  overflow: mediaresualt?"scroll":"hidden",overflowX:"hidden",  width:matches?"100%":"180px", transform: "none !important",left: "0 !important"  }}>
                        <FlagItem element={unitedkingdom} name={'English'} code={"en"}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={germany} name={'Deutsch'} code={"de"}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={china} name={'中文'} code={'zh'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={india} name={'हिन्दी'} code={'hi'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={korea} name={'한국어'} code={'ko'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={japan} name={'日本語'} code={"ja"}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={saudiarabia} name={'العربيn'} code={'ar'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={indonesia} name={'Indonesian'} code={'id'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={brazil} name={'Português'} code={"pt"}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={poland} name={'Polski'} code={'pl'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={spain} name={'Español'} code={'es'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={france} name={'Français'} code={"fr"}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={italy} name={'Italiano'} code={'it'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={turkey} name={'Türkçe'} code={'tr'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        <FlagItem element={mymalaysia} name={'Melayu'} code={'ms'}
                                  handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FlagComponents