import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'


const useLang = () => {
    return useSelector((state) => state.language.LanguageCode);
}

export default useLang;