import './App.css';
import Request from "./components/Request";
import React from "react";

const arr = [
    "rt.com",
    "kremlin.ru",
    "smotrim.ru",
    "tass.ru",
    "tvzvezda.ru",
    "vsoloviev.ru",
    "1tv.ru",
    "vgtrk.ru",
    "zakupki.gov.ru",
    "vesti.ru",
    "online.sberbank.ru",
    "sberbank.ru",
    "vtb.ru",
    "duma.gov.ru",
    "rtr-planeta.com",
    "5-tv.ru",
    "rkn.gov.ru",
    "rg.ru",
    "government.ru",
    "data.gov.ru",
    "mchs.gov.ru",
    "ac.gov.ru",
    "svr.gov.ru",
    "gov.ru",
    "council.gov.ru",
    "premier.gov.ru",
    "minenergo.gov.ru",
    "economy.gov.ru",
    "edu.gov.ru",
    "torgi.gov.ru",
    "chechnya.gov.ru",
    "gosuslugi.ru",
    "epp.genproc.gov.ru",
    "ach.gov.ru",
    "scrf.gov.ru",
    "mil.ru",
    "gazprom.ru",
    "lukoil.ru",
    "magnit.ru",
    "nornickel.com",
    "surgutneftegas.ru",
    "tatneft.ru",
    "evraz.com/ru",
    "nlmk.com",
    "sibur.ru",
    "severstal.com",
    "metalloinvest.com",
    "nangs.org",
    "rmk-group.ru/ru",
    "tmk-group.ru",
    "ya.ru",
    "polymetalinternational.com/ru",
    "uralkali.com/ru",
    "eurosib.ru",
    "omk.ru",
    "sberbank.ru",
    "vtb.ru",
    "gazprombank.ru",
    "gosuslugi.ru",
    "mos.ru/uslugi",
    "kremlin.ru",
    "government.ru",
    "mil.ru",
    "nalog.gov.ru",
    "customs.gov.ru",
    "pfr.gov.ru",
    "rkn.gov.ru",
]

function App() {

    return (
        <div className="App">
            <div className="box">
                <div className='items'>
                    <div className='item'><h1>Page</h1></div>
                    <div className='item'><h1>Status</h1></div>
                    <div className='item'><h1>Counts</h1></div>
                </div>
                {arr.map((page, i) => <Request key={i} page={page}/>)}
            </div>
        </div>
    );
}

export default App;
